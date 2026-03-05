import { NextResponse } from "next/server";
import { getSystemState } from "@/core/ledger/systemState";

export async function GET() {
    const state = await getSystemState();
    return NextResponse.json(state);
}
