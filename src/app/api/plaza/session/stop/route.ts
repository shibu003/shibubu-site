
import { NextResponse } from "next/server";
import { appendPlazaEvent } from "@/features/plaza/chronicle";

export const dynamic = "force-dynamic";

export async function POST() {
    appendPlazaEvent("actor_system", "PLAZA_SESSION_CLOSED", { reason: "MANUAL_STOP" }, {});
    return NextResponse.json({ status: "STOPPED" });
}
