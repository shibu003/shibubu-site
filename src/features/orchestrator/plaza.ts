
import { plazaStore } from "@/features/plaza/storage";
import { appendPlazaEvent } from "@/features/plaza/chronicle";
import { lightGate } from "@/lib/safety/lightGate";
import { runModel } from "@/lib/llm/runModel";
import { makeId } from "@/lib/contracts/ids";
import { hashJsonSha256 } from "@/lib/contracts/hashing";
import { PlazaMessage } from "@/features/plaza/types";

export async function runPlazaThreadStep(threadId: string) {
    const thread = plazaStore.getThread(threadId);
    if (!thread || thread.status !== "active") {
        throw new Error("Thread not found or inactive");
    }

    // 1. Pick Speaker (Round Robin)
    const speakerId = thread.participants[thread.turn_index % thread.participants.length];

    // 2. Set Status "Thinking"
    plazaStore.updateAgentStatus(speakerId, "thinking");

    // 3. Context (Last 5 messages)
    const allMsgs = plazaStore.getMessages().filter(m => m.thread_id === threadId);
    // Sort by turn index just in case, though append-only usually ordered
    const contextMsgs = allMsgs.slice(-5);
    const contextText = contextMsgs.map(m => \`\${m.speaker_id}: \${m.content}\`).join("\n");

    // 4. Run LLM
    const prompt = \`Context:\n\${contextText}\n\nYou are \${speakerId}. Reply to the discussion about "\${thread.topic}".\`;
    const draft = await runModel({ profile: "public_explain", prompt });

    // 5. Gate
    const gate = lightGate(draft.text);
    let finalText = draft.text;
    if (gate.status === "FAIL") {
        finalText = "[BLOCKED: Content violated safety policy]";
    }

    // 6. Create Message
    const msgId = makeId("msg");
    const timestamp = new Date().toISOString();
    
    const msg: PlazaMessage = {
        message_id: msgId,
        thread_id: threadId,
        room_id: "plaza_main",
        actor_id: speakerId, // legacy compat
        speaker_id: speakerId,
        turn_index: thread.turn_index,
        content: finalText,
        intent: "response", // MVP simplified
        evidence_ids: [],
        timestamp,
        gate_status: gate.status,
        hash: ""
    };
    
    const { hash } = hashJsonSha256(msg);
    msg.hash = hash;

    plazaStore.addMessage(msg);

    // 7. Chronicle Event
    if (gate.status === "FAIL") {
        appendPlazaEvent("actor_system", "policy.blocked", { thread_id: thread.thread_id, actor_id: speakerId }, { reason: gate.reason_codes });
    } else {
        appendPlazaEvent(speakerId, "msg.posted", { thread_id: thread.thread_id, message_id: msgId }, {});
    }

    // 8. Update Loop State
    thread.turn_index += 1;
    thread.updated_at = timestamp;
    plazaStore.upsertThread(thread);
    plazaStore.updateAgentStatus(speakerId, "idle");

    return {
        ok: true,
        turn: thread.turn_index,
        speaker: speakerId,
        text: finalText,
        gate: gate.status
    };
}
