import { NextResponse } from "next/server";
import { jsonError } from "@/lib/api/errors";
import { prisma } from "@/lib/db/prisma";
import { assertState } from "@/lib/api/state";

export async function POST(req: Request, { params }: { params: { bundleId: string } }) {
    try {
        // Need to resolve Bundle ID to Bill ID to check state
        // For stub, just return 501
        return NextResponse.json(
            { error: { code: "NOT_IMPLEMENTED", details: "Instruction 10 scaffold only" } },
            { status: 501 }
        );
    } catch (err) {
        return jsonError(err);
    }
}
