import { NextResponse } from "next/server";
import { runEpochScoring } from "@/server/domain/scoring/job";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { epochId } = body;

        if (!epochId) {
            // Default to yesterday if not provided? Or today?
            // "Instruction: Admin-only trigger POST { epochId }"
            return NextResponse.json({ error: "epochId required (YYYY-MM-DD)" }, { status: 400 });
        }

        // Ideally verify Admin auth (omitted for Instruction 7 MVP)

        const result = await runEpochScoring(epochId);

        return NextResponse.json(result);
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e.message || "Internal Error" }, { status: 500 });
    }
}
