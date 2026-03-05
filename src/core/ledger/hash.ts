import crypto from "crypto";

export function computeHash(data: unknown): string {
    // Use canonical-json like approach: sort keys
    const sorted = sortKeys(data);
    const str = JSON.stringify(sorted);
    return crypto.createHash("sha256").update(str).digest("hex");
}

function sortKeys(value: any): any {
    if (value && typeof value === "object" && !Array.isArray(value)) {
        return Object.keys(value)
            .sort()
            .reduce((acc: any, key) => {
                acc[key] = sortKeys(value[key]);
                return acc;
            }, {});
    }
    if (Array.isArray(value)) {
        return value.map(sortKeys);
    }
    return value;
}
