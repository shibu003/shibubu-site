import { prisma } from "@/db/prisma";

const STATE_ID = "global";

export async function getSystemState() {
    let state = await prisma.systemState.findUnique({
        where: { id: STATE_ID },
    });

    if (!state) {
        state = await prisma.systemState.create({
            data: { id: STATE_ID, halted: false },
        });
    }

    return state;
}

export async function setSystemHalted(halted: boolean) {
    const state = await prisma.systemState.upsert({
        where: { id: STATE_ID },
        update: { halted },
        create: { id: STATE_ID, halted },
    });
    return state;
}

export async function isSystemHalted() {
    const state = await getSystemState();
    return state.halted;
}
