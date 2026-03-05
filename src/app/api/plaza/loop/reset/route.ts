
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".plaza_data");

export async function POST() {
    // Hard reset for demo
    if (fs.existsSync(DATA_DIR)) {
        fs.rmSync(DATA_DIR, { recursive: true, force: true });
        fs.mkdirSync(DATA_DIR);
    }
    return NextResponse.json({ status: "RESET" });
}
