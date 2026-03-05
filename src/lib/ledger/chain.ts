import { hashJsonSha256 } from "@/lib/contracts/hashing";

export function computeEventHash(eventWithoutHash: any): { event_hash: string; canonicalization: string } {
    const { hash, canonicalization } = hashJsonSha256(eventWithoutHash);
    return { event_hash: hash, canonicalization };
}
