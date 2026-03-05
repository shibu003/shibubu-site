
import { NextResponse } from "next/server";
import { appendPlazaEvent } from "@/features/plaza/chronicle";
import { runPlazaLoopStep } from "@/features/plaza/loop"; // Using loop to trigger auto-start logic if needed

export const dynamic = "force-dynamic";

export async function POST() {
    // Manually trigger start
    appendPlazaEvent("actor_system", "PLAZA_AUTO_START", {}, {});

    // Trigger initial topic proposal
    await runPlazaLoopStep();

    return NextResponse.json({ status: "STARTED" });
}
