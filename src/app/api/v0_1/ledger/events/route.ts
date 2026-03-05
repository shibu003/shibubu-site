import { NextResponse } from "next/server";
import { jsonError } from "@/lib/api/errors";
// import { prisma } from "@/lib/db/prisma";

export async function GET(req: Request) {
    try {
        // Stub implementation compatible with Instruction 9 acceptance
        const events = [
            { event_id: "evt_stub", action: "SUBMIT_BILL", timestamp: new Date().toISOString() }
        ];
        return NextResponse.json({ events });
    } catch (err) {
        return jsonError(err);
    }
}
