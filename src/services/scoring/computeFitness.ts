import { AgentMetrics, SCORING_PARAMS_V1, ScoringResult } from "./params";

function clamp01(val: number): number {
    return Math.max(0, Math.min(1, val));
}

// 4.1 Stability (S)
// S = clamp01(exp(-k1 * failCount - k2 * warnCount))
function calculateStability(failCount: number, warnCount: number): number {
    const k1 = 1.2;
    const k2 = 0.25;
    return clamp01(Math.exp(-k1 * failCount - k2 * warnCount));
}

// 4.2 Contribution (C)
// C = clamp01(log(1 + publishedCount) / log(1 + cap))
function calculateContribution(publishedCount: number): number {
    const cap = 10;
    return clamp01(Math.log(1 + publishedCount) / Math.log(1 + cap));
}

// 4.3 Trust (T)
// T = clamp01(1.0 - (auditFail * 0.6) - (auditWarn * 0.1))
function calculateTrust(auditFail: number, auditWarn: number): number {
    return clamp01(1.0 - (auditFail * 0.6) - (auditWarn * 0.1));
}

// 4.4 Longevity (L)
// L_t = lambda * L_{t-1} + (1-lambda) * fitnessNorm_{t-1}
function calculateLongevity(prevLongevity: number, prevFitnessNorm: number): number {
    const lambda = SCORING_PARAMS_V1.lambda;
    return (lambda * prevLongevity) + ((1 - lambda) * prevFitnessNorm);
}

// 4.5 Risk (R)
// R = clamp01((warnCount * 0.1) + (suspiciousCount * 0.2) + (failCount * 0.4))
function calculateRisk(warnCount: number, suspiciousCount: number, failCount: number): number {
    return clamp01((warnCount * 0.1) + (suspiciousCount * 0.2) + (failCount * 0.4));
}

export function computeRawFitness(metrics: AgentMetrics, prevFitnessNorm: number = 0.5): ScoringResult {
    const S = calculateStability(metrics.failCount, metrics.warnCount);
    const C = calculateContribution(metrics.publishedCount);
    const T = calculateTrust(metrics.auditFailCount, metrics.auditWarnCount);

    // If no history (first epoch), treat Longevity as neutral 0.5
    // In real implementation, we pass the actual previous value
    const L = calculateLongevity(metrics.prevLongevity, prevFitnessNorm);

    const R = calculateRisk(metrics.warnCount, metrics.suspiciousCount, metrics.failCount);

    const { alpha, beta, gamma, delta, epsilon } = SCORING_PARAMS_V1;

    // F_i = αS + βC + γT + δL - εR
    const rawF = (alpha * S) + (beta * C) + (gamma * T) + (delta * L) - (epsilon * R);

    return {
        rawFunctions: { S, C, T, L, R },
        fitness: rawF
    };
}
