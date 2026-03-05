
import { createAndPostMessage } from "./actions";
import { ACTOR_IDS, PlazaMessage } from "./types";

// Mock Auditor AI decision logic (Deterministic for MVP)
export function runAuditorCheck(messages: PlazaMessage[]): PlazaMessage {
    const riskLevel = Math.random() > 0.9 ? "MEDIUM" : "LOW"; // Mostly safe in simulation
    const content = `AUDIT CHECK
RISK LEVEL: ${riskLevel}
EVIDENCE SUFFICIENCY: Checked ${messages.length} recent messages.
POLICY CONCERN: None detected.
RECOMMENDATION: CONTINUE`;

    return createAndPostMessage(
        ACTOR_IDS.AUDITOR,
        content,
        "audit_flag" // Using audit_flag intent for the check message itself
    );
}
