import { prisma } from "@/db/prisma";
import { computeHash } from "./hash";

export async function appendEvent(
    actorType: "HUMAN" | "AI_COUNCIL" | "SYSTEM",
    actorId: string | null,
    eventType: string,
    entityType: string,
    entityId: string,
    payload: any
) {
    // Get last event for chain
    const lastEvent = await prisma.eventLog.findFirst({
        orderBy: { ts: "desc" },
    });

    const prevHash = lastEvent?.hash || null;
    const ts = new Date();

    // Ensure payload is a string or object we can hash consistently
    // The Prisma model expects payload as String (JSON)

    const entry = {
        ts,
        actorType,
        actorId,
        eventType,
        entityType,
        entityId,
        payload,
        prevHash
    };

    const hash = computeHash(entry);

    return prisma.eventLog.create({
        data: {
            ts,
            actorType,
            actorId,
            eventType,
            entityType,
            entityId,
            payload: JSON.stringify(payload),
            prevHash,
            hash
        }
    });
}
