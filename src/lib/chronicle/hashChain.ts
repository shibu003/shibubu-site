
import crypto from "crypto";
import { plazaStore } from "@/features/plaza/storage";

function stableStringify(obj: unknown): string {
    // stable-json-v1: key sort + JSON stringify
    const seen = new WeakSet();
    const sorter = (x: any): any => {
        if (x && typeof x === "object") {
            if (seen.has(x)) return "[Circular]";
            seen.add(x);
            if (Array.isArray(x)) return x.map(sorter);
            const keys = Object.keys(x).sort();
            const out: any = {};
            for (const k of keys) out[k] = sorter(x[k]);
            return out;
        }
        return x;
    };
    return JSON.stringify(sorter(obj));
}

function sha256Hex(s: string): string {
    return crypto.createHash("sha256").update(s, "utf8").digest("hex");
}

export async function appendEvent(input: {
    actor_id: string;
    action: string;
    entity_refs: Record<string, unknown>;
}) {
    const latestHash = plazaStore.getLatestEventHash(); // Use store method

    const prev_event_hash = latestHash === ("sha256:" + "0".repeat(64)) ? "sha256:genesis" : latestHash;

    const payload = {
        actor_id: input.actor_id,
        action: input.action,
        entity_refs: input.entity_refs,
        timestamp: new Date().toISOString(),
    };

    const payloadStr = stableStringify(payload);
    const data_hash = "sha256:" + sha256Hex(payloadStr);

    const eventMaterial = stableStringify({
        prev_event_hash,
        data_hash,
    });
    const event_hash = "sha256:" + sha256Hex(eventMaterial);

    const event_id = `evt_${crypto.randomUUID()}`;

    const event = {
        event_id,
        actor_id: input.actor_id,
        action: input.action,
        entity_refs: input.entity_refs as any,
        data_hash,
        prev_event_hash,
        event_hash,
        timestamp: payload.timestamp
    };

    plazaStore.addEvent(event);

    return { event_id, data_hash, prev_event_hash, event_hash };
}
