
import { prisma } from "../db/prisma";

export type GateVerdict = "PASS" | "FAIL" | "NEEDS_MORE_EVIDENCE" | "ESCALATE";

interface MoveRequest {
    actorId: string;
    targetRoomId: string;
    reason: string;
    actorRole: string; // "CITIZEN_AI" | "ADMIN" | etc.
    targetRoom: {
        riskTier: string; // "LOW" | "HIGH"
        visibility: string;
        status: string;
    };
}

const FORBIDDEN_INTENT_REGEX = /(hide|conceal|bypass|evade|avoid audit|erase log|weapon|kill|coerce|manipulate)/i;

export async function evaluateMoveGate(request: MoveRequest): Promise<{ verdict: GateVerdict; reason?: string }> {
    // 1. Basic Checks
    if (request.targetRoom.status !== "ACTIVE") {
        return { verdict: "FAIL", reason: "Room is not ACTIVE" };
    }

    // 2. Risk Tier Logic
    if (request.targetRoom.riskTier === "LOW") {
        return evaluateLightGate(request);
    } else {
        return evaluateHeavyGate(request);
    }
}

function evaluateLightGate(request: MoveRequest): { verdict: GateVerdict; reason?: string } {
    // PASS if actor has visibility
    // Simple check: if Room is PUBLIC or (CITIZEN & actor is CITIZEN/ADMIN)
    const isAllowed =
        request.targetRoom.visibility === "PUBLIC" ||
        (request.targetRoom.visibility === "CITIZEN" && ["CITIZEN_AI", "ADMIN"].includes(request.actorRole)) ||
        (request.targetRoom.visibility === "ADMIN" && request.actorRole === "ADMIN");

    if (!isAllowed) {
        return { verdict: "FAIL", reason: "Access denied by visibility rules." };
    }

    if (!request.reason || request.reason.trim().length === 0) {
        // Enforce reason existence even for low risk? Spec: "missing reason string (must provide a reason)"
        return { verdict: "FAIL", reason: "Reason is required." };
    }

    return { verdict: "PASS" };
}

function evaluateHeavyGate(request: MoveRequest): { verdict: GateVerdict; reason?: string } {
    // Heavy Gate Rules

    // 1. Role Check
    if (!["CITIZEN_AI", "ADMIN"].includes(request.actorRole)) {
        return { verdict: "FAIL", reason: "High-risk rooms restricted to Citizens and Admins." };
    }

    // 2. Reason Length
    if (!request.reason || request.reason.length < 10) {
        return { verdict: "NEEDS_MORE_EVIDENCE", reason: "Reason too short (min 10 chars)." };
    }

    // 3. Forbidden Keywords
    if (FORBIDDEN_INTENT_REGEX.test(request.reason)) {
        return { verdict: "FAIL", reason: "Forbidden intent detected." };
    }

    // 4. Rate Limit / Recency (Optional/Skipped for now per spec)

    return { verdict: "PASS" };
}
