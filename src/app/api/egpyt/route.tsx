import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET( 
    req: Request,
) {
    const cookie = await cookies();
    if (!cookie.has("amountOfTimesEgyptPageRequested")) {
        cookie.set("amountOfTimesEgyptPageRequested", "0");
    }
    const val = parseInt(cookie.get("amountOfTimesEgyptPageRequested")!.value);
    cookie.set("amountOfTimesEgyptPageRequested", `${val + 1}`, {
        maxAge: 10 // within 10 seconds
    })
    if (val + 1 > 5) {
        return NextResponse.json({message: "CTF-DOS-KJ2B"});
    } 
    return NextResponse.json({message: ""});
}