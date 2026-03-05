
import { NextResponse } from "next/server";
import { jsonError } from "@/lib/api/errors";
import { prisma } from "@/lib/db/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    try {
        const rooms = await prisma.room.findMany({
            include: {
                _count: {
                    select: { actors: true }
                }
            }
        });

        const list = rooms.map((r: any) => ({
            room_id: r.roomId,
            name: r.name,
            visibility: r.visibility,
            risk_tier: r.riskTier,
            status: r.status,
            current_occupancy_count: r._count.actors,
            capabilities: JSON.parse(r.capabilitiesJson)
        }));

        return NextResponse.json({ rooms: list });
    } catch (err) {
        return jsonError(err);
    }
}
