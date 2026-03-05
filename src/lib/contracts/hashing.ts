import crypto from "crypto";

function isObject(x: any) {
    return x !== null && typeof x === "object" && !Array.isArray(x);
}

/**
 * stable-json-v1:
 * - recursively sort object keys
 * - preserve array order
 * - JSON.stringify with no whitespace
 */
export function stableStringify(value: any): string {
    if (Array.isArray(value)) {
        return `[${value.map(stableStringify).join(",")}]`;
    }
    if (isObject(value)) {
        const keys = Object.keys(value).sort();
        const props = keys.map((k) => `${JSON.stringify(k)}:${stableStringify(value[k])}`);
        return `{${props.join(",")}}`;
    }
    return JSON.stringify(value);
}

export function sha256Hex(inputUtf8: string): string {
    return crypto.createHash("sha256").update(inputUtf8, "utf8").digest("hex");
}

export function hashJsonSha256(value: any): { hash: string; canonicalization: string; canonical: string } {
    const canonical = stableStringify(value);
    return {
        hash: `sha256:${sha256Hex(canonical)}`,
        canonicalization: "stable-json-v1",
        canonical,
    };
}

// Keeping computeHash from previous instruction for backward compat if needed, 
// or I can just rely on the new skeleton export. 
// For now, sticking strictly to the skeleton.
// If previous code (like flow.ts before rewrite) imports computeHash, it will break. 
// But I am rewriting routes too, so strict adherence is better.
