
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";

export const dynamic = "force-dynamic";

export async function GET() {
    const messages = plazaStore.getMessages();
    const sessionId = "sess_mvp_v0.1"; // Stub for now

    // Infer status
    let status = "IDLE";
    if (messages.length > 0) status = "RUNNING";

    // Check for explicit session closed event
    const events = plazaStore.getEvents();
    if (events.some(e => e.action === "PLAZA_SESSION_CLOSED" &&
        // Rudimentary check: is it the *last* event relative to current session?
        // For MVP, if last event is CLOSE, it's CLOSED.
        e.event_id === events[events.length - 1].event_id
    )) {
        status = "CLOSED";
    }

    return NextResponse.json({
        status,
        session_id: sessionId,
        room_id: "plaza_main",
        started_at: messages[0]?.timestamp,
        message_count: messages.length
    });
}
