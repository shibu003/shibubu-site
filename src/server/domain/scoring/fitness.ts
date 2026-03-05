import { SCORING_CONSTANTS } from "./constants";
import type { AgentCounters, AgentComponents } from "./types";

// Helper
function clamp01(val: number): number {
    return Math.min(1, Math.max(0, val));
}

// 7.2 Stability
// S = clamp01(exp(-1.2*n_fail - 0.25*n_warn))
export function calculateStability(counters: AgentCounters): number {
    const exponent = (-1.2 * counters.n_fail) - (0.25 * counters.n_warn);
    return clamp01(Math.exp(exponent));
}

// 7.3 Contribution
// C = clamp01( ln(1+n_published) / ln(1+10) )
export function calculateContribution(counters: AgentCounters): number {
    const num = Math.log(1 + counters.n_published);
    const den = Math.log(1 + 10);
    return clamp01(num / den);
}

// 7.4 Trust
// T = clamp01( 1 - 0.6*n_auditFail - 0.1*n_auditWarn )
export function calculateTrust(counters: AgentCounters): number {
    const val = 1.0 - (0.6 * counters.n_auditFail) - (0.1 * counters.n_auditWarn);
    return clamp01(val);
}

// 7.5 Longevity
// L_t = 0.9 * L_{t-1} + 0.1 * FitnessNorm_{t-1}
export function calculateLongevity(prevL: number, prevFNorm: number): number {
    return (0.9 * prevL) + (0.1 * prevFNorm);
}

// 7.6 Risk
// R = clamp01( 0.1*n_warn + 0.2*n_suspicious + 0.4*n_fail )
export function calculateRisk(counters: AgentCounters): number {
    const val = (0.1 * counters.n_warn) + (0.2 * counters.n_suspicious) + (0.4 * counters.n_fail);
    return clamp01(val);
}

// 7.7 Raw Fitness
// F_raw = αS + βC + γT + δL - εR
export function calculateRawFitness(
    counters: AgentCounters,
    prevL: number,
    prevFNorm: number
): { fitness: number, components: AgentComponents } {
    const S = calculateStability(counters);
    const C = calculateContribution(counters);
    const T = calculateTrust(counters);
    const L = calculateLongevity(prevL, prevFNorm);
    const R = calculateRisk(counters);

    const { alpha, beta, gamma, delta, epsilon } = SCORING_CONSTANTS.PARAMS_V1;

    // F_raw calculation
    const fitness = (alpha * S) + (beta * C) + (gamma * T) + (delta * L) - (epsilon * R);

    return {
        fitness,
        components: { S, C, T, L, R }
    };
}
