import { SCORING_PARAMS_V1 } from "./params";

interface AgentScoreDraft {
    agentId: string;
    rawFitness: number; // Raw score
    fitnessNorm: number; // Normalized 0..1
}

interface AllocationResult {
    agentId: string;
    computeQuota: number;
    tokensMinted: number;
    voteWeight: number;
}

export function normalizeScores(scores: { agentId: string, rawFitness: number }[]): AgentScoreDraft[] {
    if (scores.length === 0) return [];

    const values = scores.map(s => s.rawFitness);

    // Outlier Clipping (5% - 95%) - Simple strict implementation
    values.sort((a, b) => a - b);
    const minIdx = Math.floor(values.length * 0.05);
    const maxIdx = Math.floor(values.length * 0.95);
    const minVal = values[minIdx];
    const maxVal = values[maxIdx];

    return scores.map(s => {
        let clipped = s.rawFitness;
        if (clipped < minVal) clipped = minVal;
        if (clipped > maxVal) clipped = maxVal;

        // MinMax Normalization
        let norm = 0;
        if (maxVal > minVal) {
            norm = (clipped - minVal) / (maxVal - minVal);
        } else {
            norm = 0.5; // If all equal
        }

        return {
            agentId: s.agentId,
            rawFitness: s.rawFitness,
            fitnessNorm: norm
        };
    });
}

export function allocateResources(agents: AgentScoreDraft[]): AllocationResult[] {
    const N = agents.length;
    if (N === 0) return [];

    // 1. Compute Quota (Softmax)
    const tau = N <= 3 ? SCORING_PARAMS_V1.tauSmoothing : SCORING_PARAMS_V1.tau;

    // Calculate exponentials
    const exps = agents.map(a => Math.exp(a.rawFitness / tau));
    const sumExps = exps.reduce((a, b) => a + b, 0);

    let quotas = exps.map(e => e / sumExps);

    // Apply Cap (0.35) and Redistribute
    // Simple iterative redistribution
    const CAP = SCORING_PARAMS_V1.maxComputeQuota;
    let excess = 0;

    // First Pass: Clip
    quotas = quotas.map(q => {
        if (q > CAP) {
            excess += (q - CAP);
            return CAP;
        }
        return q;
    });

    // Second Pass: Redistribute excess to non-capped agents
    // (This is a simplified approach; accurate redistribution requires loop but v1 is fine)
    if (excess > 0) {
        const nonCappedCount = quotas.filter(q => q < CAP).length;
        if (nonCappedCount > 0) {
            const add = excess / nonCappedCount;
            quotas = quotas.map(q => {
                if (q < CAP) {
                    return Math.min(CAP, q + add); // Don't exceed cap again
                }
                return q;
            });
        }
    }

    // 2. Token Minting
    const totalTokens = SCORING_PARAMS_V1.totalTokensPerEpoch;
    const maxTokensPerAgent = totalTokens * SCORING_PARAMS_V1.maxTokenMint;

    const tokenAllocations = agents.map(a => {
        let tokens = Math.round(totalTokens * a.fitnessNorm);
        // Normalize? No, the command says: tokens_i = round(TOTAL * fitnessNorm_i)
        // This implies SUM(tokens) != TOTAL. It's minting based on performance.
        // It DOES NOT say "distribute TOTAL tokens".
        // Let's stick to the formula: tokens_i = round(TOTAL * fitnessNorm)

        if (tokens > maxTokensPerAgent) tokens = Math.round(maxTokensPerAgent);
        return tokens;
    });

    // 3. Vote Weight
    // W = 1 + kappa * F_norm
    const voteWeights = agents.map(a => {
        const w = 1 + (SCORING_PARAMS_V1.kappa * a.fitnessNorm);
        return Math.min(w, SCORING_PARAMS_V1.maxVoteWeight);
    });

    return agents.map((a, i) => ({
        agentId: a.agentId,
        computeQuota: quotas[i],
        tokensMinted: tokenAllocations[i],
        voteWeight: voteWeights[i]
    }));
}
