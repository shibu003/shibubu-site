
export interface PlazaMessage {
    message_id: string;
    room_id: string;
    actor_id: string;
    content: string;
    intent: "topic" | "argument" | "response" | "summary" | "audit_flag";
    evidence_ids: string[];
    timestamp: string;
    hash: string;
}

export interface ChronicleEvent {
    event_id: string;
    timestamp: string;
    actor_id: string;
    action: string;
    entity_refs: Record<string, any>;
    data_hash: string;
    prev_event_hash: string;
    event_hash: string;
}

export const ACTOR_IDS = {
    PROPOSER: "actor_goal_proposer_01",
    DEBATE: "actor_debate_agent_01",
    AUDITOR: "actor_auditor_ai"
} as const;

export interface RoomDef {
    room_id: string;
    name: string;
    risk_class: "LOW" | "HIGH";
    capabilities: string[];
}

export interface ActorPresence {
    actor_id: string;
    current_room_id: string;
    status: "ACTIVE" | "SUSPENDED" | "QUARANTINED";
    last_move_at?: string;
}

export interface MoveRequest {
    move_id: string;
    actor_id: string;
    from_room_id: string;
    to_room_id: string;
    reason: string;
    evidence_ids: string[];
    risk_class: "LOW" | "HIGH";
    gate_decision: "PENDING" | "PASS" | "FAIL" | "NEEDS_MORE_EVIDENCE" | "ESCALATE";
    audit_verdict?: "PASS" | "WARN" | "FAIL" | "SKIPPED";
    status: "PENDING" | "APPROVED" | "REJECTED" | "EXECUTED";
    created_at: string;
    finalized_at?: string;
    move_hash: string;
}
