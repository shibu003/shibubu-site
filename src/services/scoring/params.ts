export const SCORING_PARAMS_V1 = {
    version: "v1.0",
    // Fitness Weights
    alpha: 1.0,  // Stability
    beta: 0.5,   // Contribution
    gamma: 0.7,  // Trust
    delta: 0.8,  // Longevity
    epsilon: 0.7, // Risk (Penalty)

    // Resource Allocation
    tau: 1.0,    // Softmax Temperature
    tauSmoothing: 1.2, // For small N

    // Caps (Anti-Monopoly)
    maxComputeQuota: 0.35, // 35%
    maxTokenMint: 0.25,    // 25%

    // Voting
    kappa: 1.0,  // w = 1 + kappa * F_norm
    maxVoteWeight: 2.0,

    // Longevity EWMA
    lambda: 0.9,

    // Token Economy
    totalTokensPerEpoch: 10000
};

export interface AgentMetrics {
    failCount: number;
    warnCount: number;
    publishedCount: number;
    auditFailCount: number;
    auditWarnCount: number;
    suspiciousCount: number;
    // History
    prevLongevity: number;
    prevFitnessNorm: number;
}

export interface ScoringResult {
    rawFunctions: {
        S: number;
        C: number;
        T: number;
        L: number;
        R: number;
    };
    fitness: number;
}
