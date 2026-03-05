import { prisma } from "@/db/prisma";
import { SCORING_CONSTANTS } from "./constants";
import { aggregateCounters } from "./counters";
import { calculateRawFitness, calculateLongevity } from "./fitness";
import { normalizeScores } from "./normalize";
import { computeAllocation } from "./allocation";
import { appendLedgerArtifact } from "../ledger/append";
import { computeHash } from "@/core/ledger/hash";

export async function runEpochScoring(epochId: string) {
    console.log(`[ScoringJob] Starting Epoch ${epochId}`);

    // 1. Close/Verify Epoch
    // Ensure epoch exists
    let epoch = await prisma.epoch.findUnique({ where: { epochKey: epochId } });
    if (!epoch) {
        // Create if missing (e.g. testing)
        // In prod, this should likely exist or be created by a schedule
        const start = new Date(epochId + "T00:00:00.000Z");
        const end = new Date(epochId + "T23:59:59.999Z");
        epoch = await prisma.epoch.create({
            data: { epochKey: epochId, startAt: start, endAt: end, status: "CLOSED" }
        });
    } else if (epoch.status === 'OPEN') {
        await prisma.epoch.update({ where: { id: epoch.id }, data: { status: 'CLOSED' } });
    }

    if (epoch.status === 'FINALIZED') {
        console.log(`[ScoringJob] Epoch ${epochId} already finalized.`);
        return { status: "ALREADY_FINALIZED" };
    }

    // 2. Load Agents
    const agents = await prisma.agent.findMany({ where: { status: 'ACTIVE' } });
    const agentIds = agents.map(a => a.id);

    // 3. Compute Counters (Step 6)
    const countersMap = await aggregateCounters(epochId, agentIds);
    // Upsert counters to DB
    for (const agentId of agentIds) {
        const c = countersMap.get(agentId)!;
        await prisma.agentEpochCounters.upsert({
            where: { agentId_epochKey: { agentId, epochKey: epochId } },
            create: { agentId, epochKey: epochId, ...c },
            update: { ...c }
        });
    }

    // 4. Compute Fitness Components & Raw (Step 7)
    // Need previous epoch for Longevity
    // Find prev epoch key. Simple impl: Date minus 1 day
    const d = new Date(epochId);
    d.setDate(d.getDate() - 1);
    const prevEpochKey = d.toISOString().split('T')[0];

    const prevScores = await prisma.agentEpochScore.findMany({
        where: { epochKey: prevEpochKey }
    });
    const prevMap = new Map(prevScores.map(s => [s.agentId, s]));

    const agentRawDrafts = [];
    const fullAgentData = [];

    for (const agent of agents) {
        const counters = countersMap.get(agent.id)!;
        const prev = prevMap.get(agent.id);

        // Defaults if no history
        const prevL = prev ? prev.L : SCORING_CONSTANTS.DEFAULT_LONGEVITY;
        const prevFNorm = prev ? prev.fitness_norm : SCORING_CONSTANTS.DEFAULT_FITNESS_NORM;

        const { fitness, components } = calculateRawFitness(counters, prevL, prevFNorm);

        agentRawDrafts.push({ agentId: agent.id, fitness_raw: fitness });
        fullAgentData.push({ agentId: agent.id, counters, components, fitness_raw: fitness });
    }

    // 5. Normalize (Step 8)
    const normMap = normalizeScores(agentRawDrafts);

    // 6. Allocation (Step 9)
    // Prepare input for allocation
    const allocInputs = fullAgentData.map(d => ({
        agentId: d.agentId,
        fitness_raw: d.fitness_raw,
        fitness_norm: normMap.get(d.agentId)!
    }));

    const allocations = computeAllocation(allocInputs);
    const allocMap = new Map(allocations.map(a => [a.agentId, a]));

    // 7. Persist Scores (Step 10)
    for (const d of fullAgentData) {
        const norm = normMap.get(d.agentId)!;
        const alloc = allocMap.get(d.agentId)!;

        // Calc Hash (Provenance)
        const provenanceInput = {
            counters: d.counters,
            components: d.components,
            inputs: { prevL: 0, prevFNorm: 0 }, // Simplified for hash, could be more robust
            params: SCORING_CONSTANTS.PARAMS_V1
        };
        const calcHash = computeHash(provenanceInput);

        // Store
        await prisma.agentEpochScore.upsert({
            where: { agentId_epochKey: { agentId: d.agentId, epochKey: epochId } },
            create: {
                agentId: d.agentId,
                epochKey: epochId,
                // Components
                S: d.components.S, C: d.components.C, T: d.components.T, L: d.components.L, R: d.components.R,
                // Scores
                fitness_raw: d.fitness_raw,
                fitness_norm: norm,
                // Alloc
                quota_q: alloc.quota_q,
                tokens_minted: alloc.tokens_minted,
                vote_weight_w: alloc.vote_weight_w,
                p_softmax: alloc.p_softmax,
                // Meta
                params_version: SCORING_CONSTANTS.CURRENT_VERSION,
                calc_hash: calcHash
            },
            update: {
                S: d.components.S, C: d.components.C, T: d.components.T, L: d.components.L, R: d.components.R,
                fitness_raw: d.fitness_raw,
                fitness_norm: norm,
                quota_q: alloc.quota_q,
                tokens_minted: alloc.tokens_minted,
                vote_weight_w: alloc.vote_weight_w,
                p_softmax: alloc.p_softmax,
                calc_hash: calcHash
            }
        });

        // Optimization: Update Agent lastEpochKey
        await prisma.agent.update({ where: { id: d.agentId }, data: { lastEpochKey: epochId } });
    }

    // 8. Build Artifact & Publish
    // Collect all data for bundle
    const bundleData = {
        epochId,
        meta: {
            generatedAt: new Date().toISOString(),
            params: SCORING_CONSTANTS.PARAMS_V1
        },
        agents: fullAgentData.map(d => ({
            id: d.agentId,
            counters: d.counters,
            scores: {
                raw: d.fitness_raw,
                norm: normMap.get(d.agentId),
                components: d.components,
                allocation: allocMap.get(d.agentId)
            }
        }))
    };

    await appendLedgerArtifact({
        type: "EPOCH_SCORES_BUNDLE",
        epochKey: epochId,
        artifactJson: JSON.stringify(bundleData)
    });

    // 9. Finalize
    await prisma.epoch.update({ where: { epochKey: epochId }, data: { status: 'FINALIZED' } });

    console.log(`[ScoringJob] Epoch ${epochId} Finalized.`);
    return { status: "SUCCESS", count: agentIds.length };
}
