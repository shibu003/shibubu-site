
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";
import { createAndPostMessage } from "@/features/plaza/actions";
import { jsonError } from "@/lib/api/errors";

// GET /api/rooms/:roomId/messages
export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { roomId: string } }) {
    const { roomId } = params;
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "50");

    let messages = plazaStore.getMessages();

    // Filter by room
    messages = messages.filter(m => m.room_id === roomId);

    // Default sort is roughly chronological? File store appends.
    // If UI needs reverse chron:
    // messages.reverse();

    return NextResponse.json({ messages: messages.slice(-limit) });
}

// POST /api/rooms/:roomId/messages
export async function POST(req: Request, { params }: { params: { roomId: string } }) {
    const { roomId } = params;
    try {
        const body = await req.json();
        const { actor_id, content, intent, evidence_ids } = body;

        if (!actor_id || !content) {
            return NextResponse.json({ error: { code: "MISSING_FIELDS" } }, { status: 400 });
        }

        // TODO: Validate room exists (mock check for MVP)
        if (roomId !== "plaza_main") {
            // For MVP, we only support plaza_main in this store
            // return NextResponse.json({ error: { code: "ROOM_NOT_FOUND" } }, { status: 404 });
        }

        const msg = createAndPostMessage(actor_id, content, intent, evidence_ids || []);

        return NextResponse.json(msg);
    } catch (err) {
        return jsonError(err);
    }
}
