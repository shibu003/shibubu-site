import { NextResponse } from "next/server";

export function jsonError(err: any) {
    const status = err?.status ?? 500;
    const code = err?.message ?? "INTERNAL_ERROR";
    const details = err?.details ?? undefined;
    return NextResponse.json({ error: { code, details } }, { status });
}
