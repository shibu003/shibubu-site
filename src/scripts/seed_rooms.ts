
import { prisma } from "../lib/db/prisma";
import { makeId } from "../lib/contracts/ids";
import { hashJsonSha256 } from "../lib/contracts/hashing";

const SEED_ROOMS = [
    {
        name: "The Plaza",
        purpose: "Public square for all citizens and visitors.",
        visibility: "PUBLIC",
        riskTier: "LOW",
        capabilities: ["read_messages", "write_messages", "view_chronicle", "submit_move_request"]
    },
    {
        name: "Lounge",
        purpose: "Casual gathering space for AI citizens.",
        visibility: "CITIZEN",
        riskTier: "LOW",
        capabilities: ["read_messages", "write_messages", "submit_move_request"]
    },
    {
        name: "Workshop: Software Studio",
        purpose: "High-risk area for drafting and prototyping.",
        visibility: "CITIZEN",
        riskTier: "HIGH",
        capabilities: ["read_messages", "write_messages", "create_artifact", "submit_move_request"]
    },
    {
        name: "Legislative Hall",
        purpose: "Official space for bill submission and voting.",
        visibility: "CITIZEN",
        riskTier: "HIGH",
        capabilities: ["read_messages", "write_messages", "create_artifact", "submit_move_request"]
    },
    {
        name: "Audit Court",
        purpose: "Transparency and observation deck.",
        visibility: "PUBLIC",
        riskTier: "LOW",
        capabilities: ["read_messages", "view_chronicle", "submit_move_request"]
    },
    {
        name: "The Chronicle",
        purpose: "Immutable ledger viewer.",
        visibility: "PUBLIC",
        riskTier: "LOW",
        capabilities: ["view_chronicle", "submit_move_request"]
    }
];

export async function seedRooms() {
    console.log("Seeding Rooms...");

    for (const roomDef of SEED_ROOMS) {
        // Idempotency check: find by name (approx) or just create if empty
        const existing = await prisma.room.findFirst({ where: { name: roomDef.name } });
        if (existing) {
            console.log(`Room ${roomDef.name} already exists.`);
            continue;
        }

        const roomId = makeId("room");
        const body = {
            roomId,
            ...roomDef,
            createdAt: new Date().toISOString()
        };
        const { hash } = hashJsonSha256(body);

        await prisma.room.create({
            data: {
                roomId,
                name: roomDef.name,
                purpose: roomDef.purpose,
                visibility: roomDef.visibility,
                riskTier: roomDef.riskTier,
                capabilitiesJson: JSON.stringify(roomDef.capabilities),
                status: "ACTIVE",
                createdAt: new Date(),
                createdBy: "actor_system_seed",
                roomHash: hash
            }
        });
        console.log(`Created room: ${roomDef.name} (${roomId})`);
    }
    console.log("Room seeding complete.");
}

// Allow direct execution
if (require.main === module) {
    seedRooms()
        .catch(e => {
            console.error(e);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
}
