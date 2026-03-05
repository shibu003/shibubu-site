
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";

export const dynamic = "force-dynamic";

export async function GET(_: Request, { params }: { params: { threadId: string } }) {
    const threadId = params.threadId;
    const thread = plazaStore.getThread(threadId);
    if (!thread) return NextResponse.json({ ok: false, reason: "NOT_FOUND" }, { status: 404 });

    const messages = plazaStore.getMessages()
        .filter(m => m.thread_id === threadId)
        .sort((a, b) => (a.turn_index || 0) - (b.turn_index || 0))
        .slice(-200);

    const agents = plazaStore.getAgents().filter(a => thread.participants.includes(a.actor_id));

    return NextResponse.json({ ok: true, thread, messages, agents });
}
