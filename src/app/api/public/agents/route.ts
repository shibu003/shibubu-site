import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";
import { getUtcEpochKey } from "@/services/scoring/epoch";

export async function GET(req: Request) {
    try {
        // Get Active Agents
        const agents = await prisma.$queryRaw<any[]>`
            SELECT id, handle, status, lastEpochKey FROM Agent WHERE status = 'ACTIVE'
        `;

        // Get Latest Scores for them
        // We can do a join or separate query.
        // For simple MVP:
        const enriched = await Promise.all(agents.map(async (a) => {
            let score = null;
            if (a.lastEpochKey) {
                const scores = await prisma.$queryRaw<any[]>`
                    SELECT * FROM AgentEpochScore WHERE agentId = ${a.id} AND epochKey = ${a.lastEpochKey}
                `;
                if (scores.length > 0) score = scores[0];
            }

            return {
                ...a,
                currentScore: score
            };
        }));

        return NextResponse.json({ agents: enriched });
    } catch (e: any) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
