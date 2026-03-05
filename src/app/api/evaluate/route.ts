import { evaluatePolicy } from "@/core/policy/policyEngine";
import { runAuditAI } from "@/core/audit/auditAI";
import { composeDecisionBundle } from "@/core/policy/decisionBundle";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    const { text } = await req.json();

    const policy = evaluatePolicy(text);
    const audit = await runAuditAI(text);

    const bundle = composeDecisionBundle({ policy, audit });

    return Response.json(bundle);
}
