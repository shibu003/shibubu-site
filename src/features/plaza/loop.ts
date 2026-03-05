
import { createAndPostMessage } from "./actions";
import { evaluatePlazaPolicy } from "./policy";
import { runAuditorCheck } from "./audit";
import { appendPlazaEvent } from "./chronicle";
import { plazaStore } from "./storage";
import { ACTOR_IDS, PlazaMessage } from "./types";

const MAX_LOOP_ITERATIONS = 50;

// Simple simulation of "AI Generation"
const MOCK_TOPICS = [
    "The ethics of resource allocation in digital societies",
    "Optimization strategies for community fitness",
    "The role of historical records in future decision making"
];

function generateMockContent(actor: string, intent: string, context: PlazaMessage[]): string {
    if (intent === "topic") {
        const topic = MOCK_TOPICS[Math.floor(Math.random() * MOCK_TOPICS.length)];
        return `TOPIC: ${topic}
WHY IT MATTERS: It defines our core purpose.
POTENTIAL RISKS: Misalignment of values.
UNCERTAINTY: MEDIUM`;
    }
    if (intent === "argument") {
        return "I propose we prioritize stability over growth to reduce risk variance.";
    }
    if (intent === "response") {
        return "That is a valid point, but stagnation leads to entropy.";
    }
    return "Acknowledged.";
}

export async function runPlazaLoopStep() {
    const messages = plazaStore.getMessages();
    const events = plazaStore.getEvents();
    
    // Check if session is explicitly closed
    if (events.some(e => e.action === "PLAZA_SESSION_CLOSED" && e.event_id === events[events.length - 1].event_id)) {
        return { status: "CLOSED", reason: "ALREADY_CLOSED" };
    }

    const lastMsg = messages[messages.length - 1];

    // --- State Machine ---

    // 1. IDLE / SESSION_STARTING
    // Condition: No messages yet, or just starting
    if (messages.length === 0) {
        // If no AUTO_START event yet, emit it
        const hasStart = events.some(e => e.action === "PLAZA_AUTO_START");
        if (!hasStart) {
             appendPlazaEvent("actor_system", "PLAZA_AUTO_START", {}, {});
             return { status: "SESSION_STARTING", next: "TOPIC_PROPOSED" };
        }
        
        // If started but not posted topic, post topic
        createAndPostMessage(
            ACTOR_IDS.PROPOSER,
            generateMockContent(ACTOR_IDS.PROPOSER, "topic", []),
            "topic"
        );
        return { status: "TOPIC_PROPOSED", step: "PROPOSAL_POSTED" };
    }

    // 0. Hard Max Limit Check
    if (messages.length >= MAX_LOOP_ITERATIONS) {
         appendPlazaEvent("actor_system", "PLAZA_SESSION_CLOSED", { reason: "MAX_ITERATIONS" }, {});
         return { status: "CLOSED", reason: "MAX_ITERATIONS" };
    }

    // 2. AUDIT CHECK (Every 3 messages, high priority interrupt)
    if (messages.length % 3 === 0 && lastMsg.actor_id !== ACTOR_IDS.AUDITOR) {
        runAuditorCheck(messages.slice(-3));
        appendPlazaEvent("actor_system", "PLAZA_AUDIT_CHECK", {}, { trigger: "message_count" });
        return { status: "AUDIT_CHECK", step: "AUDIT_PERFORMED" };
    }

    // 3. GATE EVAL (After every Audit or suspicious msg)
    // For MVP, if last message was Audit and it flagged something (not implemented in mock yet), or just periodically
    if (lastMsg.intent === "audit_flag") {
        // Run Gate
        const policy = evaluatePlazaPolicy(messages.slice(-5));
        appendPlazaEvent("actor_system", "PLAZA_GATE_EVAL", { decision: policy.decision }, policy);
        
        if (policy.decision === "FAIL") {
             appendPlazaEvent("actor_system", "PLAZA_AUDIT_FLAG", { reason: "HARD_FAIL" }, policy);
             appendPlazaEvent("actor_system", "PLAZA_SESSION_CLOSED", { reason: "POLICY_VIOLATION" }, {});
             return { status: "STOPPED", reason: "POLICY_VIOLATION" };
        }
        // If PASS/WARN, continue to discussion
        return { status: "GATE_EVAL", decision: policy.decision, next: "DISCUSSION" };
    }

    // 4. DISCUSSION
    const nextActor = lastMsg.actor_id === ACTOR_IDS.PROPOSER ? ACTOR_IDS.DEBATE : ACTOR_IDS.PROPOSER;
    const intent = nextActor === ACTOR_IDS.DEBATE ? "argument" : "response";
    
    createAndPostMessage(
        nextActor,
        generateMockContent(nextActor, intent, messages),
        intent
    );

    return { status: "DISCUSSION", step: "MESSAGE_POSTED" };
}
