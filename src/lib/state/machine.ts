import type { Bill } from "@/generated/client";

// Re-defining strict types locally to avoid dependency on generated client if it fails
export type BillState =
    | "DRAFT"
    | "SUBMITTED"
    | "TRANSLATED"
    | "EVIDENCE_READY"
    | "GATED"
    | "AUDITED"
    | "BUNDLED"
    | "PUBLISHED"
    | "REJECTED"
    | "ON_HOLD";

export const STATES: Record<string, BillState> = {
    DRAFT: "DRAFT",
    SUBMITTED: "SUBMITTED",
    TRANSLATED: "TRANSLATED",
    EVIDENCE_READY: "EVIDENCE_READY",
    GATED: "GATED",
    AUDITED: "AUDITED",
    BUNDLED: "BUNDLED",
    PUBLISHED: "PUBLISHED",
    REJECTED: "REJECTED",
    ON_HOLD: "ON_HOLD"
};

const ALLOWED_TRANSITIONS: Record<BillState, BillState[]> = {
    DRAFT: ["SUBMITTED"],
    SUBMITTED: ["TRANSLATED"],
    TRANSLATED: ["EVIDENCE_READY"],
    EVIDENCE_READY: ["GATED"],

    // GATED branches based on decision
    GATED: ["AUDITED", "REJECTED", "ON_HOLD"],

    // AUDITED branches based on verdict
    AUDITED: ["BUNDLED", "REJECTED"],

    BUNDLED: ["PUBLISHED"],

    // Terminal states
    PUBLISHED: [],
    REJECTED: ["PUBLISHED"], // Can publish a rejection bundle? Spec says yes: "still can publish a bundle as FAIL"
    ON_HOLD: []
};

export class StateMachineError extends Error {
    constructor(public from: string, public to: string, public reason?: string) {
        super(`Invalid transition from ${from} to ${to}: ${reason || "Not allowed"}`);
        this.name = "StateMachineError";
    }
}

export function canTransition(current: string, next: BillState): boolean {
    const allowed = ALLOWED_TRANSITIONS[current as BillState];
    return allowed ? allowed.includes(next) : false;
}

export function assertTransition(current: string, next: BillState) {
    if (!canTransition(current, next)) {
        throw new StateMachineError(current, next);
    }
}

/**
 * Helper to determine next state based on Artifact content.
 * e.g. GateDecision -> "GATED" (if pass) or "REJECTED" (if fail) or "ON_HOLD"
 */
export function getNextStateFromGate(decision: "PASS" | "WARN" | "FAIL" | "NEEDS_MORE_EVIDENCE" | "ESCALATE"): BillState {
    switch (decision) {
        case "PASS":
        case "WARN":
            return "GATED"; // Ready for Audit
        case "FAIL":
            return "REJECTED";
        case "NEEDS_MORE_EVIDENCE":
        case "ESCALATE":
            return "ON_HOLD";
        default:
            throw new Error(`Unknown gate decision: ${decision}`);
    }
}

export function getNextStateFromAudit(verdict: "PASS" | "WARN" | "FAIL"): BillState {
    switch (verdict) {
        case "PASS":
        case "WARN":
            return "AUDITED"; // Ready for Bundle
        case "FAIL":
            return "REJECTED";
        default:
            throw new Error(`Unknown audit verdict: ${verdict}`);
    }
}
