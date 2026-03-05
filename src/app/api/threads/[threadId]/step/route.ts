
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage"; // Persistence
import { runModel } from "@/lib/llm/runModel";
import { lightGate } from "@/lib/safety/lightGate";
import { appendEvent } from "@/lib/chronicle/hashChain";
import { buildCitizenPrompt, pickNextSpeaker } from "@/lib/orchestrator/plaza";
import crypto from "crypto";
import { PlazaMessage } from "@/features/plaza/types";

export async function POST(_: Request, { params }: { params: { threadId: string } }) {
    const threadId = params.threadId;

    const thread = plazaStore.getThread(threadId);
    if (!thread) return NextResponse.json({ ok: false, reason: "NOT_FOUND" }, { status: 404 });
    if (thread.status !== "active") return NextResponse.json({ ok: false, reason: "THREAD_INACTIVE" }, { status: 409 });

    const participants = thread.participants as string[];
    const speakerId = pickNextSpeaker(participants, thread.turn_index);

    // Mark speaker thinking
    plazaStore.updateAgentStatus(speakerId, "thinking");

    const recent = plazaStore.getMessages()
        .filter(m => m.thread_id === threadId)
        .sort((a, b) => (a.turn_index || 0) - (b.turn_index || 0))
        .slice(-12);

    const context = recent.map((m) => ({ speaker: m.actor_id, text: m.content }));

    const prompt = buildCitizenPrompt({
        topic: thread.topic,
        roomId: thread.room_id,
        speakerId,
        context,
    });

    const draft = await runModel({ profile: "public_explain", prompt });

    const gate = lightGate(draft.text);
    const messageId = \`msg_\${crypto.randomUUID()}\`;

  const finalText = gate.status === "FAIL" ? "[BLOCKED BY POLICY GATE]" : draft.text;

  // Persist Message via PlazaStore
  const msg: PlazaMessage = {
      message_id: messageId,
      thread_id: threadId,
      room_id: thread.room_id,
      actor_id: speakerId, // legacy compat
      speaker_id: speakerId,
      turn_index: thread.turn_index,
      content: finalText,
      text: finalText,
      intent: "response",
      gate_status: gate.status,
      evidence_ids: [],
      hash: "", // not calc here for brevity, handled in store append if needed, but we do hash chain below
      timestamp: new Date().toISOString()
  };
  plazaStore.addMessage(msg);

  if (gate.status === "FAIL") {
    // Increment fails
     // (Store updateAgentCount logic omitted for brevity in MVP)
    
    await appendEvent({
      actor_id: "actor_system",
      action: "policy.blocked",
      entity_refs: {
        thread_id: threadId,
        message_id: messageId,
        room_id: thread.room_id,
        reason_codes: gate.reason_codes,
      },
    });
  } else {
    // Pass/Warn
    await appendEvent({
      actor_id: speakerId,
      action: "msg.posted",
      entity_refs: { thread_id: threadId, message_id: messageId, room_id: thread.room_id },
    });
    
    // Update Agent Status
    plazaStore.updateAgentStatus(speakerId, "idle");
  }

  // Update Thread
  thread.turn_index += 1;
  thread.updated_at = new Date().toISOString();
  plazaStore.upsertThread(thread);

  return NextResponse.json({
    ok: true,
    thread_id: threadId,
    speaker_id: speakerId,
    message_id: messageId,
    gate: gate.status,
    reason_codes: gate.reason_codes,
    text: finalText,
  });
}
