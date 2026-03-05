
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const limit = Math.min(Number(url.searchParams.get("limit") ?? "50"), 200);

    // events in store are appended, so reverse to get latest
    const events = plazaStore.getEvents().slice().reverse().slice(0, limit);

    return NextResponse.json({ ok: true, events });
}
