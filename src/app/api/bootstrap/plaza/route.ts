
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";
import { appendEvent } from "@/lib/chronicle/hashChain";
import crypto from "crypto";

export async function POST() {
    const roomId = "room_plaza";

    // Ensure 3 agents
    const agents = [
        { actor_id: "actor_citizen_01", display_name: "Citizen-01" },
        { actor_id: "actor_citizen_02", display_name: "Citizen-02" },
        { actor_id: "actor_citizen_03", display_name: "Citizen-03" },
    ];

    for (const a of agents) {
        plazaStore.upsertAgent({
            actor_id: a.actor_id,
            display_name: a.display_name,
            role: "citizen",
            current_room_id: roomId,
            status: "idle",
            model_profile: "public_explain",
            turns_today: 0
        });
    }

    // Ensure active thread
    let thread = plazaStore.getThreads().find(t => t.room_id === roomId && t.status === "active");

    if (!thread) {
        const threadId = `thr_${crypto.randomUUID()}`;
    thread = {
        thread_id: threadId,
        room_id: roomId,
        topic: "Casual chat in the Plaza (safe, internal-only).",
        status: "active",
        participants: agents.map((x) => x.actor_id),
        turn_index: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
    plazaStore.upsertThread(thread);

    await appendEvent({
      actor_id: "actor_system",
      action: "thread.created",
      entity_refs: { thread_id: thread.thread_id, room_id: roomId },
    });
  }

  return NextResponse.json({ ok: true, thread_id: thread.thread_id });
}
