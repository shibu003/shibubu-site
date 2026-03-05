import { ALL_RULES } from "./rules";
import type { BillDraft, GateDecision } from "../governance/types";

export async function evaluatePolicyGate(bill: BillDraft, startHash: string): Promise<GateDecision> {
    const reasons: { code: string; summary: string; evidence: string[] }[] = [];

    for (const rule of ALL_RULES) {
        const result = await rule.check(bill);
        if (result.status === "FAIL" || result.status === "WARN") {
            reasons.push({
                code: result.ruleId,
                summary: result.message || "Rule violation detected",
                evidence: result.evidence || []
            });
        }
    }

    const verdict: "PASS" | "FAIL" = reasons.length > 0 ? "FAIL" : "PASS";

    return {
        verdict,
        policy_version: "1.0",
        reasons,
        input_hash: startHash
    };
}
