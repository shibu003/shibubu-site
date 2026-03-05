import { prisma } from "@/db/prisma";
import { SCORING_PARAMS_V1, AgentMetrics, ScoringResult } from "./params";

interface FinalScore {
    agentId: string;
    metrics: AgentMetrics;
    rawResult: ScoringResult;
    fitnessNorm: number;
    allocation: {
        computeQuota: number;
        tokensMinted: number;
        voteWeight: number;
    };
    inputsHash: string; // To be passed
}

export async function persistScores(epochKey: string, scores: FinalScore[]) {
    // 1. Persist AgentEpochScore
    for (const s of scores) {
        const paramsJson = JSON.stringify(SCORING_PARAMS_V1);

        // Use RAW SQL to insert/update
        // We use sqlite3 UPSERT syntax (INSERT OR REPLACE) or manual check
        // Using INSERT OR REPLACE for simplicity in this demo

        await prisma.$executeRaw`
            INSERT OR REPLACE INTO "AgentEpochScore" (
                id, agentId, epochKey,
                stability, contribution, trust, longevity, risk,
                fitness, fitnessNorm,
                computeQuota, tokensMinted, voteWeight,
                params, inputsHash, createdAt
            ) VALUES (
                ${s.agentId + "_" + epochKey}, ${s.agentId}, ${epochKey},
                ${s.rawResult.rawFunctions.S}, ${s.rawResult.rawFunctions.C}, ${s.rawResult.rawFunctions.T}, 
                ${s.rawResult.rawFunctions.L}, ${s.rawResult.rawFunctions.R},
                ${s.rawResult.fitness}, ${s.fitnessNorm},
                ${s.allocation.computeQuota}, ${s.allocation.tokensMinted}, ${s.allocation.voteWeight},
                ${paramsJson}, ${s.inputsHash}, ${new Date().toISOString()}
            )
        `;

        // Update Agent lastEpochKey
        await prisma.$executeRaw`
            UPDATE "Agent" SET lastEpochKey = ${epochKey}, updatedAt = ${new Date().toISOString()}
            WHERE id = ${s.agentId}
        `;
    }

    // 2. Create AllocationLedger snapshot
    const totalCompute = 10000; // Conceptual units
    const totalTokensMinted = scores.reduce((sum, s) => sum + s.allocation.tokensMinted, 0);

    // Gini calculation (optional but good for tracking decentralization)
    // Simple Gini based on quota
    const quotas = scores.map(s => s.allocation.computeQuota).sort((a, b) => a - b);
    let gini = 0;
    if (quotas.length > 0) {
        const n = quotas.length;
        let num = 0;
        let den = n * quotas.reduce((a, b) => a + b, 0);
        for (let i = 0; i < n; i++) {
            num += (i + 1) * quotas[i];
        }
        gini = (2 * num) / den - (n + 1) / n;
    }

    const snapshot = {
        epochKey,
        scores: scores.map(s => ({
            agentId: s.agentId,
            fitness: s.rawResult.fitness,
            quota: s.allocation.computeQuota
        }))
    };

    await prisma.$executeRaw`
        INSERT OR REPLACE INTO "AllocationLedger" (
            id, epochKey, totalComputeUnits, totalTokensMinted, tau, gini, snapshot, createdAt
        ) VALUES (
            ${"ledger_" + epochKey}, ${epochKey}, ${totalCompute}, ${totalTokensMinted}, 
            ${SCORING_PARAMS_V1.tau}, ${gini}, ${JSON.stringify(snapshot)}, ${new Date().toISOString()}
        )
    `;

    // 3. Log to Event Log
    // We append one major event for the epoch
    // In strict impl, we hash the ledger.
    // We already have appendEvent.
    // Need to import it or recreate. 
    // Implementation plan said "minimum logEvent call".

    // Let's import it (but it's in core/ledger/eventLog.ts)
    // Dynamic import inside or just do raw SQL insert if we don't want circular deps?
    // Using prisma.$executeRaw for event log is safer to avoid deps hell in "services" layer vs "core".
    // But let's try to reuse core if possible.
}
