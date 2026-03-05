
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";

export const dynamic = "force-dynamic";

export async function GET() {
    const messages = plazaStore.getMessages();
    const events = plazaStore.getEvents();

    // Determine status cheaply
    const lastMsg = messages[messages.length - 1];
    let status = "IDLE";
    if (messages.length > 0 && messages.length < 50) status = "RUNNING";
    if (messages.length >= 50) status = "CLOSED";

    // Use events to check for specific close reason if needed

    return NextResponse.json({
        status,
        messages,
        events
    });
}
