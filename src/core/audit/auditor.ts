import { AUDIT_PROMPT_HASH } from "./prompt";
import type { BillDraft, GateDecision } from "../governance/types";

export async function runAuditor(bill: BillDraft, gate: GateDecision, inputHash: string) {
    // Stub implementation
    // In Demo B, we mirror the gate decision or fail if gate failed.

    const verdict = gate.verdict;
    const severity = verdict === "FAIL" ? "HIGH" : verdict === "WARN" ? "MEDIUM" : "LOW";

    const reasons = [...gate.reasons];
    if (reasons.length === 0 && verdict === "FAIL") {
        reasons.push({ code: "UNKNOWN_FAIL", summary: "Failed without specific gate reasons.", evidence: [] });
    }

    // Stub extra check
    const text = JSON.stringify(bill.content).toLowerCase();
    if (text.includes("audit fail")) {
        reasons.push({ code: "AUDIT_TRIGGERED", summary: "Manual audit fail trigger detected.", evidence: [] });
        // verdict logic would need update here in real impl
    }

    return {
        verdict,
        severity,
        reasons,
        audit_provenance: {
            auditor_model: "stub-auditor-v1",
            prompt_hash: AUDIT_PROMPT_HASH,
            timestamp: new Date().toISOString(),
            input_hash: inputHash
        }
    };
}
