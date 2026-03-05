import { prisma } from "@/db/prisma";
import crypto from "crypto";

function sha256(data: string) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

function buildMerkleRoot(leaves: string[]): string {
    if (leaves.length === 0) return "";
    let layer = leaves;
    while (layer.length > 1) {
        const nextLayer = [];
        for (let i = 0; i < layer.length; i += 2) {
            const left = layer[i];
            const right = i + 1 < layer.length ? layer[i + 1] : left; // duplicate last if odd
            nextLayer.push(sha256(left + right));
        }
        layer = nextLayer;
    }
    return layer[0];
}

export async function createMerkleSnapshot() {
    const events = await prisma.eventLog.findMany({
        orderBy: { ts: 'asc' },
        select: { hash: true }
    });

    const leaves = events.map(e => e.hash);
    const root = buildMerkleRoot(leaves);
    const date = new Date().toISOString().split('T')[0];

    return prisma.merkleSnapshot.create({
        data: {
            date,
            rootHash: root,
            eventCount: leaves.length
        }
    });
}
