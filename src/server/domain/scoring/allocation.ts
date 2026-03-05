import { SCORING_CONSTANTS } from "./constants";

export interface AgentNorm {
    agentId: string;
    fitness_raw: number;
    fitness_norm: number;
}

export interface AllocationResult {
    agentId: string;
    p_softmax: number;
    quota_q: number;
    tokens_minted: number;
    vote_weight_w: number;
}

export function computeAllocation(agents: AgentNorm[]): AllocationResult[] {
    const { tau, kappa } = SCORING_CONSTANTS.PARAMS_V1;
    const { QUOTA_CAP, TOKEN_POOL, TOKEN_USER_CAP, VOTE_WEIGHT_CAP } = SCORING_CONSTANTS;

    // 1. Softmax
    // subtract max for numerical stability
    const maxRaw = Math.max(...agents.map(a => a.fitness_raw));
    const exps = agents.map(a => ({
        ...a,
        expVal: Math.exp((a.fitness_raw - maxRaw) / tau)
    }));
    const sumExps = exps.reduce((sum, a) => sum + a.expVal, 0);

    let allocations = exps.map(a => ({
        agentId: a.agentId,
        p_softmax: a.expVal / sumExps,
        quota_q: 0,
        tokens_minted: 0,
        vote_weight_w: 0,
        fitness_norm: a.fitness_norm // carry for next steps
    }));

    // 2. Compute Quota (Anti-Monopoly Cap & Redistribution)
    // Initial assignment
    let remainingQuota = 1.0;
    let uncappedAgents: number[] = [];
    let cappedSum = 0;

    // First pass: Apply caps
    for (let i = 0; i < allocations.length; i++) {
        if (allocations[i].p_softmax > QUOTA_CAP) {
            allocations[i].quota_q = QUOTA_CAP;
            remainingQuota -= QUOTA_CAP;
            cappedSum += QUOTA_CAP;
        } else {
            uncappedAgents.push(i);
            // Temporarily set to p_softmax, will adjust
            allocations[i].quota_q = allocations[i].p_softmax;
        }
    }

    // Redistribution of excess
    const totalCapped = allocations.length - uncappedAgents.length;
    if (totalCapped > 0 && uncappedAgents.length > 0) {
        // Calculate total uncapped raw shares
        const uncappedSumP = uncappedAgents.reduce((sum, idx) => sum + allocations[idx].p_softmax, 0);

        // Excess to distribute = 1.0 - cappedSum - uncappedSumP
        // Wait, standard redistribution logic:
        // Quota = min(P, Cap) -> sum < 1.0
        // We need sum to be 1.0.
        // The excess is (Sum of P for capped agents) - (Sum of Caps).
        // Actually, since sum(P) = 1.0, the "excess" available to redistribute is:
        // 1.0 - (Sum of assignable quota so far).
        // Since we clamped capped agents, their contribution to sum dropped.
        // We must boost uncapped agents proportionally.

        const currentSum = allocations.reduce((s, a) => s + a.quota_q, 0);
        const excess = 1.0 - currentSum;

        if (excess > 0 && uncappedSumP > 0) {
            for (const idx of uncappedAgents) {
                // Boost factor = 1 + (excess / uncappedSumP) ?
                // No, new_share = old_share + (excess * (old_share / uncappedSumP))
                const shareOfUncapped = allocations[idx].p_softmax / uncappedSumP;
                allocations[idx].quota_q += excess * shareOfUncapped;
            }
        }
    }

    // 3. Token Minting
    // M_i = round(10000 * F_norm_i)
    // Cap at 2500
    // Total conservation not strictly enforced per instruction, but cap is.

    for (const alloc of allocations) {
        let minted = Math.round(TOKEN_POOL * alloc.fitness_norm);
        if (minted > TOKEN_USER_CAP) {
            minted = TOKEN_USER_CAP;
        }
        alloc.tokens_minted = minted;
    }

    // 4. Vote Weight
    // W_i = min(1 + kappa * F_norm, 2.0)
    for (const alloc of allocations) {
        let w = 1.0 + (kappa * alloc.fitness_norm);
        if (w > VOTE_WEIGHT_CAP) {
            w = VOTE_WEIGHT_CAP;
        }
        alloc.vote_weight_w = w;
    }

    return allocations.map(a => ({
        agentId: a.agentId,
        p_softmax: a.p_softmax,
        quota_q: a.quota_q,
        tokens_minted: a.tokens_minted,
        vote_weight_w: a.vote_weight_w
    }));
}
