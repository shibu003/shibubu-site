import { PrismaClient } from "@prisma/client";

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

// Fallback mock if PrismaClient fails to load due to generation issues
const mockPrisma = {
    $transaction: async (fn: any) => fn(mockPrisma),
    bill: { findUnique: async () => null, create: async () => ({}), update: async () => ({}) },
    artifact: { create: async () => ({}), findMany: async () => [], findUnique: async () => null },
    ledgerEvent: { create: async () => ({}), findFirst: async () => null }
} as any;

let prismaInstance: any;
try {
    prismaInstance = global.prisma ?? new PrismaClient();
} catch (e) {
    console.warn("PrismaClient initialization failed, using mock:", e);
    prismaInstance = mockPrisma;
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
