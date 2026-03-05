import { NextResponse } from "next/server";
import { jsonError } from "@/lib/api/errors";

export async function GET(req: Request) {
    try {
        return NextResponse.json(
            { error: { code: "NOT_IMPLEMENTED", details: "Instruction 10 scaffold only" } },
            { status: 501 }
        );
    } catch (err) {
        return jsonError(err);
    }
}
