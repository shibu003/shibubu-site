import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET(req: Request, { params }: { params: { billId: string } }) {
    const bundle = await prisma.decisionBundle.findFirst({
        where: { billId: params.billId },
        orderBy: { createdAt: 'desc' }
    });

    if (!bundle) return NextResponse.json({ error: "Bundle not found" }, { status: 404 });

    return NextResponse.json(JSON.parse(bundle.bundleJson));
}
