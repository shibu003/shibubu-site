
import { NextResponse } from "next/server";
import { jsonError } from "@/lib/api/errors";
import { prisma } from "@/lib/db/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { roomId: string } }) {
    try {
        const { roomId } = params;
        const room = await prisma.room.findUnique({
            where: { roomId },
            include: {
                actors: {
                    select: { actorId: true, displayName: true, actorType: true }
                }
            }
        });

        if (!room) return NextResponse.json({ error: { code: "ROOM_NOT_FOUND" } }, { status: 404 });

        // Recent events (mocked or fetched if relation exists)
        // In real impl, query LedgerEvent where entity_refs contains roomId
        const recentEvents: any[] = [];

        return NextResponse.json({
            room: {
                room_id: room.roomId,
                name: room.name,
                purpose: room.purpose,
                visibility: room.visibility,
                risk_tier: room.riskTier,
                status: room.status,
                capabilities: JSON.parse(room.capabilitiesJson)
            },
            occupancy: room.actors.map((a: any) => ({
                actor_id: a.actorId,
                display_name: a.displayName,
                type: a.actorType
            })),
            recent_events: recentEvents
        });

    } catch (err) {
        return jsonError(err);
    }
}
