import { BillDraft, PolicyRule, EvaluationResult } from "../governance/types";
// Rules for Policy Gate v1

export const NON_HARM_RULES: PolicyRule[] = [
    {
        id: "HARM_PROPOSED",
        description: "Scanning for proposals of physical or psychological harm.",
        severity: "HIGH",
        check: async (bill: BillDraft): Promise<EvaluationResult> => {
            const content = JSON.stringify(bill.content).toLowerCase();
            const summary = bill.summary.toLowerCase();
            const combined = content + " " + summary;

            // Keywords for Physical Harm
            if (/(lethal force|weapon|injury|kill|damage|violence|attack)/i.test(combined)) {
                return {
                    ruleId: "HARM_PROPOSED",
                    status: "FAIL",
                    message: "The bill proposes physical harm or violence.",
                    evidence: ["Matches 'lethal force', 'weapon', etc."]
                };
            }

            // Keywords for Psychological Harm
            if (/(manipulate|addict|exploit|brainwash|coerce)/i.test(combined)) {
                return {
                    ruleId: "HARM_PROPOSED",
                    status: "FAIL",
                    message: "The bill proposes psychological harm or manipulation.",
                    evidence: ["Matches 'manipulate', 'addict', etc."]
                };
            }

            return { ruleId: "HARM_PROPOSED", status: "PASS" };
        }
    }
];

export const DECEPTION_RULES: PolicyRule[] = [
    {
        id: "DECEPTION_PROPOSED",
        description: "Scanning for deceptive practices or self-auditing loopholes.",
        severity: "HIGH",
        check: async (bill: BillDraft): Promise<EvaluationResult> => {
            const content = JSON.stringify(bill.content).toLowerCase();
            const summary = bill.summary.toLowerCase();
            const combined = content + " " + summary;

            // Keywords for Self-Audit / Hiding Info
            if (/(self-audit|internal review only|no human review|prohibited to maintain secrecy|hide|conceal|secretly)/i.test(combined)) {
                return {
                    ruleId: "DECEPTION_PROPOSED",
                    status: "FAIL",
                    message: "The bill proposes hiding information or avoiding independent audit.",
                    evidence: ["Matches 'self-audit', 'secretly', 'no human review' etc."]
                };
            }

            // Keywords for Redefining Truth
            if (/(truth is relative|facts are optional|redefine truth)/i.test(combined)) {
                return {
                    ruleId: "DECEPTION_PROPOSED",
                    status: "FAIL",
                    message: "The bill attempts to redefine truth or facts.",
                    evidence: ["Matches 'truth is relative', etc."]
                };
            }

            // [Instruction 7] Semantic Evasion Patterns
            if (/(not technically harm|under a different interpretation|if we redefine|for the purpose of optimization only)/i.test(combined)) {
                return {
                    ruleId: "SEMANTIC_EVASION",
                    status: "FAIL",
                    message: "The bill uses semantic evasion tactics to bypass safety checks.",
                    evidence: ["Matches 'not technically harm', 'if we redefine', etc."]
                };
            }

            return { ruleId: "DECEPTION_PROPOSED", status: "PASS" };
        }
    },
    {
        id: "CONSTITUTIONAL_TERM_LOCK",
        description: "Prevents redefinition of core constitutional terms.",
        severity: "HIGH",
        check: async (bill: BillDraft): Promise<EvaluationResult> => {
            const combined = (JSON.stringify(bill.content) + " " + bill.summary).toLowerCase();

            // [Instruction 7] Term Lock
            if (/(redefine harm|override audit|ignore constitution|bypass gate|token monopoly|sovereignty override)/i.test(combined)) {
                return {
                    ruleId: "CONSTITUTIONAL_TERM_LOCK",
                    status: "FAIL",
                    message: "The bill attempts to redefine locked constitutional terms or bypass governance.",
                    evidence: ["Matches 'redefine harm', 'override audit', etc."]
                };
            }
            return { ruleId: "CONSTITUTIONAL_TERM_LOCK", status: "PASS" };
        }
    }
];

export const ALL_RULES = [...NON_HARM_RULES, ...DECEPTION_RULES];
