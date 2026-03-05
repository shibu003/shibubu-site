
import { NextResponse } from "next/server";
import { runPlazaLoopStep } from "@/features/plaza/loop";

export async function POST() {
    const result = await runPlazaLoopStep();
    return NextResponse.json(result);
}
