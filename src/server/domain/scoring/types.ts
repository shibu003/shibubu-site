export type EpochId = string; // "YYYY-MM-DD"

export type Decision = "PASS" | "WARN" | "FAIL";
export type EventType =
    | "POLICY_GATE_DECISION"
    | "AUDIT_DECISION"
    | "BUNDLE_PUBLISHED"
    | "SUSPICIOUS_EVENT";

export interface SCORING_PARAMS_V1 {
    alpha: number;
    beta: number;
    gamma: number;
    delta: number;
    epsilon: number;
    tau: number;
    kappa: number;
}

export interface AgentCounters {
    n_fail: number;
    n_warn: number;
    n_auditFail: number;
    n_auditWarn: number;
    n_suspicious: number;
    n_published: number;
}

export interface AgentComponents {
    S: number;
    C: number;
    T: number;
    L: number;
    R: number;
}

export interface AgentScores extends AgentComponents {
    fitness_raw: number;
    fitness_norm: number;
    p_softmax: number;
    quota_q: number;
    tokens_minted: number;
    vote_weight_w: number;
}

export interface EpochResult {
    agentId: string;
    counters: AgentCounters;
    scores: AgentScores;
}
