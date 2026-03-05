
import { plazaStore } from "./storage";
import { ChronicleEvent } from "./types";
import { hashJsonSha256 } from "@/lib/contracts/hashing";
import { makeEventId } from "@/lib/contracts/ids"; // Using the stub/impl from lib
// Note: importing from @/lib/... requires tsconfig paths to work. 
// If generic run fails, we might need relative paths or copy utils.

export function appendPlazaEvent(
    actor_id: string,
    action: string,
    entity_refs: Record<string, any>,
    data: any // Data to be included in data_hash, but NOT necessarily stored in event body per strict schema, but simplified for Plaza MVP JSON store
): ChronicleEvent {
    const timestamp = new Date().toISOString();
    const prev_event_hash = plazaStore.getLatestEventHash();

    const { hash: data_hash } = hashJsonSha256(data);
    const event_id = makeEventId();

    const eventPayload = {
        event_id,
        timestamp,
        actor_id,
        action,
        entity_refs,
        data_hash,
        prev_event_hash
    };

    const { hash: event_hash } = hashJsonSha256(eventPayload);

    const fullEvent: ChronicleEvent = {
        ...eventPayload,
        event_hash
    };

    plazaStore.addEvent(fullEvent);
    return fullEvent;
}
