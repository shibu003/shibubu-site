
import { PlazaMessage, ACTOR_IDS } from "./types";
import { plazaStore } from "./storage";
import { appendPlazaEvent } from "./chronicle";
import { hashJsonSha256 } from "@/lib/contracts/hashing";
import { makeId } from "@/lib/contracts/ids";

export function createAndPostMessage(
    actor_id: string,
    content: string,
    intent: PlazaMessage["intent"],
    evidence_ids: string[] = []
): PlazaMessage {
    const timestamp = new Date().toISOString();
    const message_id = makeId("msg");
    const room_id = "plaza_main";

    const msgPayload = {
        message_id,
        room_id,
        actor_id,
        content,
        intent,
        evidence_ids,
        timestamp
    };

    const { hash } = hashJsonSha256(msgPayload);

    const fullMsg: PlazaMessage = {
        ...msgPayload,
        hash
    };

    // 1. Store Message
    plazaStore.addMessage(fullMsg);

    // 2. Emit Event
    appendPlazaEvent(
        actor_id,
        "MESSAGE_POSTED",
        { room_id, message_id },
        fullMsg // In this MVP, data_hash covers the full message object
    );

    return fullMsg;
}
