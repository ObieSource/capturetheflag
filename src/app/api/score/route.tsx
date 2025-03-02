import { cookies } from "next/headers";
import { flags } from "../flags/route";
import { NextResponse } from "next/server";


export async function GET() {
    const cookie = await cookies();
    let total = 0;
    for (let challenge of flags) {
        if (cookie.has(challenge.flag)) {
            total += challenge.points;
        }
    }
    return NextResponse.json({score: total});
}