import { SCORING_CONSTANTS } from "./constants";

export interface AgentRaw {
    agentId: string;
    fitness_raw: number;
}

export function normalizeScores(agents: AgentRaw[]): Map<string, number> {
    const rawValues = agents.map(a => a.fitness_raw).sort((a, b) => a - b);
    const N = rawValues.length;

    if (N === 0) return new Map();

    // Calculate P5 and P95 indices
    const p5Index = Math.floor(N * 0.05);
    const p95Index = Math.floor(N * 0.95);

    // Get P5 and P95 values
    // For small N, these might be the same as min/max
    const P5 = rawValues[p5Index];
    const P95 = rawValues[Math.min(p95Index, N - 1)];

    const result = new Map<string, number>();

    const range = P95 - P5;

    for (const a of agents) {
        let norm = 0.5; // Default fallback

        if (range === 0) {
            // Edge case: all scores identical or P5 == P95
            norm = SCORING_CONSTANTS.DEFAULT_FITNESS_NORM;
        } else {
            // Formula: (F_raw - P5) / (P95 - P5)
            norm = (a.fitness_raw - P5) / range;
        }

        // Clamp to [0, 1]
        norm = Math.max(0, Math.min(1, norm));
        result.set(a.agentId, norm);
    }

    return result;
}
