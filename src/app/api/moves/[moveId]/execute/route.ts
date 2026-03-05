
import { NextResponse } from "next/server";
import { executeMove } from "@/features/plaza/moves";
import { jsonError } from "@/lib/api/errors";

export async function POST(req: Request, { params }: { params: { moveId: string } }) {
    try {
        const move = executeMove(params.moveId);
        return NextResponse.json(move);
    } catch (err) {
        return jsonError(err);
    }
}
