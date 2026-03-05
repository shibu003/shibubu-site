
import { NextResponse } from "next/server";
import { plazaStore } from "@/features/plaza/storage";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { roomId: string } }) {
    // getPresence() returns ActorPresence[]
    const actors = plazaStore.getPresence().filter(p => p.current_room_id === params.roomId);

    return NextResponse.json({
        room_id: params.roomId,
        actors
    });
}
