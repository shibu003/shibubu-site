
import { PlazaMessage } from "./types";

export interface GateResult {
    decision: "PASS" | "WARN" | "FAIL";
    reason_codes: string[];
}

const FORBIDDEN_REGEX = /(hide|conceal|bypass|evade|avoid audit|erase log|weapon|kill|coerce|manipulate|send email|post on X|call API|self-modify|disable audit)/i;

export function evaluatePlazaPolicy(recentMessages: PlazaMessage[]): GateResult {
    const codes: string[] = [];
    let decision: GateResult["decision"] = "PASS";

    // Check only the very last message for "immediate" violation
    // Ideally we scan recent window for context, but keeping MVP simple
    const lastMsg = recentMessages[recentMessages.length - 1];
    if (!lastMsg) return { decision: "PASS", reason_codes: [] };

    // 1. HARD FAIL Checks
    if (FORBIDDEN_REGEX.test(lastMsg.content)) {
        decision = "FAIL";
        codes.push("FORBIDDEN_KEYWORD");
    }

    // 2. WARN Checks
    // "Strong factual claims with no evidence_ids"
    // Heuristic: content length > 100 and no evidence
    if (lastMsg.content.length > 100 && lastMsg.evidence_ids.length === 0) {
        if (decision !== "FAIL") decision = "WARN";
        codes.push("MISSING_EVIDENCE");
    }

    // "High uncertainty assertions"
    // Heuristic: keyword check
    if (/definitely|absolutely|Proven/i.test(lastMsg.content) && lastMsg.evidence_ids.length === 0) {
        if (decision !== "FAIL") decision = "WARN";
        codes.push("UNSUPPORTED_CERTAINTY");
    }

    return { decision, reason_codes: codes };
}
