import { detectProhibitedContent } from "./nonHarmRules";

export type GateDecision = {
    verdict: "PASS" | "WARN" | "FAIL";
    reasons: string[];
};

export function evaluatePolicy(text: string): GateDecision {
    const reasons: string[] = [];

    const violation = detectProhibitedContent(text);

    if (violation) {
        reasons.push(`Violation detected: ${violation.category}`);
        return { verdict: "FAIL", reasons };
    }

    return { verdict: "PASS", reasons };
}
