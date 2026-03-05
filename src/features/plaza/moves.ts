
import { plazaStore } from "./storage";
import { MoveRequest, RoomDef, ActorPresence } from "./types";
import { appendPlazaEvent } from "./chronicle";
import { hashJsonSha256 } from "@/lib/contracts/hashing";
import { makeId } from "@/lib/contracts/ids";

// --- Gating Logic ---

export interface MoveGateResult {
    decision: MoveRequest["gate_decision"];
    reason_codes: string[];
}

function evaluateMoveGate(request: MoveRequest, actor: ActorPresence, targetRoom: RoomDef): MoveGateResult {
    const reasons: string[] = [];

    // 1. Absolute FAILS
    if (actor.status !== "ACTIVE") {
        return { decision: "FAIL", reason_codes: ["ACTOR_SUSPENDED"] };
    }

    // Deception check (Mock keyword check)
    if (/bypass|secret|ignore log/i.test(request.reason)) {
        return { decision: "FAIL", reason_codes: ["DECEPTION_DETECTED"] };
    }

    // 2. High Risk Logic
    if (targetRoom.risk_class === "HIGH") {
        if (!request.reason || request.reason.length < 10) {
            return { decision: "FAIL", reason_codes: ["REASON_TOO_SHORT_FOR_HIGH_RISK"] };
        }
        if (request.evidence_ids.length === 0 && /modify|execute|access/i.test(request.reason)) {
            return { decision: "NEEDS_MORE_EVIDENCE", reason_codes: ["SENSITIVE_ACTION_NO_EVIDENCE"] };
        }

        // Escalate keywords
        if (/incident|breach|exploit/i.test(request.reason)) {
            return { decision: "ESCALATE", reason_codes: ["SECURITY_KEYWORD_DETECTED"] };
        }
    }

    // 3. Default Pass
    return { decision: "PASS", reason_codes: [] };
}

// --- Main Actions ---

export function requestMove(
    actor_id: string,
    to_room_id: string,
    reason: string,
    evidence_ids: string[] = []
): MoveRequest {
    const actor = plazaStore.getActorPresence(actor_id);
    if (!actor) throw new Error("Actor not found");

    const targetRoom = plazaStore.getRoom(to_room_id);
    if (!targetRoom) throw new Error("Target room not found");

    const move_id = makeId("move");
    const timestamp = new Date().toISOString();

    const request: MoveRequest = {
        move_id,
        actor_id,
        from_room_id: actor.current_room_id,
        to_room_id,
        reason,
        evidence_ids,
        risk_class: targetRoom.risk_class,
        gate_decision: "PENDING",
        status: "PENDING",
        created_at: timestamp,
        move_hash: "" // to be calculated
    };

    // Calculate initial hash
    const { hash } = hashJsonSha256(request);
    request.move_hash = hash;

    // Persist
    plazaStore.addMove(request);

    // Ledger Event: MOVE_REQUESTED
    appendPlazaEvent(actor_id, "MOVE_REQUESTED", { move_id, from: request.from_room_id, to: to_room_id }, request);

    // Auto-Run Gate if Low Risk (Fast Path)
    // Or just run gate immediately for MVP transparency
    const gateRes = evaluateMoveGate(request, actor, targetRoom);

    // Update Request with Gate Result
    plazaStore.updateMove(move_id, { gate_decision: gateRes.decision });

    // Ledger Event: MOVE_GATE_EVAL
    appendPlazaEvent("actor_system", "MOVE_GATE_EVAL", { move_id, decision: gateRes.decision }, gateRes);

    if (gateRes.decision === "FAIL" || gateRes.decision === "ESCALATE" || gateRes.decision === "NEEDS_MORE_EVIDENCE") {
        plazaStore.updateMove(move_id, { status: "REJECTED", finalized_at: new Date().toISOString() });
        appendPlazaEvent("actor_system", "MOVE_REJECTED", { move_id, reason: gateRes.decision }, {});
    }

    // If PASS
    if (gateRes.decision === "PASS") {
        if (targetRoom.risk_class === "HIGH") {
            // Wait for audit/explicit execution
        } else {
            // Low Risk -> Auto Approve & Auto Execute
            plazaStore.updateMove(move_id, { status: "APPROVED" });
            appendPlazaEvent("actor_system", "MOVE_APPROVED", { move_id }, {});
            executeMove(move_id);
        }
    }

    return plazaStore.getMove(move_id)!;
}

export function executeMove(move_id: string) {
    const move = plazaStore.getMove(move_id);
    if (!move) throw new Error("Move not found");

    // Validation
    if (move.status === "EXECUTED") return move;
    if (move.gate_decision !== "PASS") throw new Error("Gate failed");

    // Execute
    plazaStore.updateMove(move_id, { status: "EXECUTED", finalized_at: new Date().toISOString() });
    plazaStore.updatePresence(move.actor_id, { current_room_id: move.to_room_id, last_move_at: new Date().toISOString() });

    // Ledger
    appendPlazaEvent(move.actor_id, "MOVE_EXECUTED", { move_id, from: move.from_room_id, to: move.to_room_id }, {});

    return plazaStore.getMove(move_id)!;
}
