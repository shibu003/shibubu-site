import { prisma } from "@/lib/db/prisma";
import { makeEventId } from "@/lib/contracts/ids";
import { hashJsonSha256 } from "@/lib/contracts/hashing";
import { validateOrThrow } from "@/lib/contracts/validate";

type EmitArgs = {
    actor_id: string;
    action: string;
    entity_refs: Record<string, any>;
    data: any; // payload to be hashed (not necessarily stored in event)
};

export async function getPrevEventHash(): Promise<string> {
    const last = await prisma.ledgerEvent.findFirst({
        orderBy: { timestamp: "desc" },
        select: { event_hash: true },
    });
    // For genesis event, use a fixed constant.
    return last?.eventHash ?? "sha256:" + "0".repeat(64);
}

export async function emitLedgerEvent(args: EmitArgs) {
    const timestamp = new Date().toISOString();
    const prev_event_hash = await getPrevEventHash();

    const { hash: data_hash } = hashJsonSha256(args.data);

    const event_id = makeEventId();
    const eventWithoutHash = {
        event_id,
        timestamp,
        actor_id: args.actor_id,
        action: args.action,
        entity_refs: args.entity_refs,
        data_hash,
        prev_event_hash,
    };

    const { hash: event_hash } = hashJsonSha256(eventWithoutHash);

    const fullEvent = { ...eventWithoutHash, event_hash };

    // Validate against schema
    validateOrThrow("shibubu:v0.1:event", fullEvent);

    // Persist
    await prisma.ledgerEvent.create({
        data: {
            eventId: event_id,
            timestamp: new Date(timestamp),
            actorId: args.actor_id,
            action: args.action,
            entityRefs: JSON.stringify(args.entity_refs), // Changed to stringify as per minimal schema in Instruction 9
            dataHash: data_hash,
            prevEventHash: prev_event_hash,
            eventHash: event_hash,
        },
    });

    return fullEvent;
}
