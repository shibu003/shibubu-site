import { NextResponse } from "next/server";
import { runScoringEpoch } from "@/services/scoring/scoreRunner";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { epochKey, force } = body;

        // Admin check should be here (omitted for MVP)

        const result = await runScoringEpoch(epochKey);

        return NextResponse.json(result);
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
