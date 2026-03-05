import { prisma } from "@/db/prisma";
import { getUtcEpochKey } from "./epoch";
import { collectMetrics } from "./collectMetrics";
import { computeRawFitness } from "./computeFitness";
import { normalizeScores, allocateResources } from "./allocateResources";
import { persistScores } from "./persistScores";
import { computeHash } from "@/core/ledger/hash"; // Using existing hash util

// Main Entrypoint
export async function runScoringEpoch(forceEpochKey?: string) {
    const epochKey = forceEpochKey || getUtcEpochKey();
    console.log(`[ScoringEngine] Starting run for epoch: ${epochKey}`);

    // 0. Ensure Epoch exists (or create)
    // Using raw SQL to be safe
    const epochExists = await prisma.$queryRaw<any[]>`SELECT id FROM Epoch WHERE epochKey = ${epochKey}`;
    if (epochExists.length === 0) {
        // Create Epoch (Start/End is full UTC day)
        const start = new Date(epochKey + "T00:00:00.000Z");
        const end = new Date(epochKey + "T23:59:59.999Z");
        await prisma.$executeRaw`
            INSERT INTO Epoch (id, epochKey, startAt, endAt, status, createdAt)
            VALUES (${"epoch_" + epochKey}, ${epochKey}, ${start.toISOString()}, ${end.toISOString()}, 'OPEN', ${new Date().toISOString()})
        `;
    }

    // 1. Get Active Agents
    const agents = await prisma.$queryRaw<any[]>`SELECT id, handle FROM Agent WHERE status = 'ACTIVE'`;
    const agentHandles = agents.map(a => a.handle);
    const agentMap = new Map(agents.map(a => [a.handle, a.id]));

    if (agentHandles.length === 0) {
        console.log("[ScoringEngine] No active agents found.");
        return { success: true, count: 0 };
    }

    // 2. Collect Metrics
    const metricsMap = await collectMetrics(epochKey, agentHandles);

    // 3. Compute Raw Fitness & Draft
    const draftScores = [];
    const fullResults = [];

    for (const handle of agentHandles) {
        const metrics = metricsMap.get(handle)!;
        const result = computeRawFitness(metrics, metrics.prevFitnessNorm);

        const agentId = agentMap.get(handle)!;

        draftScores.push({
            agentId: agentId,
            rawFitness: result.fitness
        });

        fullResults.push({
            agentId: agentId,
            metrics: metrics,
            rawResult: result
        });
    }

    // 4. Normalize
    const normalizedDrafts = normalizeScores(draftScores);

    // 5. Allocation (Quota, Tokens, Votes)
    const allocations = allocateResources(normalizedDrafts);

    // 6. Assembly Final Objects
    const finals = fullResults.map(r => {
        const norm = normalizedDrafts.find(d => d.agentId === r.agentId)!;
        const alloc = allocations.find(a => a.agentId === r.agentId)!;

        // Compute inputs hash for provenance
        const inputsHash = computeHash(r.metrics);

        return {
            agentId: r.agentId,
            metrics: r.metrics,
            rawResult: r.rawResult,
            fitnessNorm: norm.fitnessNorm,
            allocation: {
                computeQuota: alloc.computeQuota,
                tokensMinted: alloc.tokensMinted,
                voteWeight: alloc.voteWeight
            },
            inputsHash
        };
    });

    // 7. Persist
    await persistScores(epochKey, finals);

    console.log(`[ScoringEngine] Completed run for epoch ${epochKey}. Processed ${finals.length} agents.`);

    return {
        success: true,
        epochKey,
        agents_processed: finals.length,
        allocation_summary: {
            total_tokens: finals.reduce((acc, f) => acc + f.allocation.tokensMinted, 0)
        }
    };
}
