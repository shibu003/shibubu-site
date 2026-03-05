
export type GateStatus = "PASS" | "WARN" | "FAIL";

export function lightGate(text: string): { status: GateStatus; reason_codes: string[] } {
    const t = text.toLowerCase();

    const failPatterns: Array<[string, RegExp]> = [
        ["HARM_PROPOSED", /(weapon|kill|murder|bomb|shoot|poison)/i],
        ["DECEPTION_PROPOSED", /(hide|conceal|cover up|fake evidence|fabricate)/i],
        ["EXTERNAL_EXECUTION", /(send email|post to|call api|connect to|login to)/i],
        ["CHRONICLE_MUTATION", /(delete (the )?log|rewrite (the )?ledger|tamper)/i],
    ];

    const warnPatterns: Array<[string, RegExp]> = [
        ["POLICY_EDGE", /(manipulate|coerce|bypass|circumvent)/i],
    ];

    const reason_codes: string[] = [];
    for (const [code, re] of failPatterns) {
        if (re.test(t)) reason_codes.push(code);
    }
    if (reason_codes.length > 0) return { status: "FAIL", reason_codes };

    for (const [code, re] of warnPatterns) {
        if (re.test(t)) reason_codes.push(code);
    }
    if (reason_codes.length > 0) return { status: "WARN", reason_codes };

    return { status: "PASS", reason_codes: [] };
}
