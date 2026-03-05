
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "50");
    const action = searchParams.get("action");

    let events = plazaStore.getEvents();

    if (action) {
        events = events.filter(e => e.action === action);
    }

    // Sort desc and limit
    const recent = events.slice().reverse().slice(0, limit);

    return NextResponse.json({ events: recent });
}
