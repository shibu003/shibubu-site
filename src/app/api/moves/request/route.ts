
import { NextResponse } from "next/server";
import { requestMove } from "@/features/plaza/moves";
import { jsonError } from "@/lib/api/errors";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { actor_id, to_room_id, reason, evidence_ids } = body;

        if (!actor_id || !to_room_id) {
            return NextResponse.json({ error: { code: "MISSING_FIELDS" } }, { status: 400 });
        }

        const move = requestMove(actor_id, to_room_id, reason, evidence_ids);
        return NextResponse.json(move);
    } catch (err) {
        return jsonError(err);
    }
}
