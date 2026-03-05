import crypto from "crypto";

export function computeBundleHash(bundle: unknown): string {
    const serialized = JSON.stringify(bundle);
    return crypto.createHash("sha256").update(serialized).digest("hex");
}
