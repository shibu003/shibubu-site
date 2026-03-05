
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";

export const dynamic = "force-dynamic";

export async function GET() {
    // getMoves() is now available on plazaStore
    const moves = plazaStore.getMoves();
    // Return last 50 reversed
    return NextResponse.json({ moves: moves.slice().reverse().slice(0, 50) });
}
