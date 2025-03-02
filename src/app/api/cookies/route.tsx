import { NextResponse } from "next/server";
import { cookieList } from "./cookieList";


export async function POST( 
    req: Request,
) {
    const body = await req.json();
    if (body === undefined || body.id === undefined || isNaN(parseInt(body.id)) || parseInt(body.id) >= cookieList.length || parseInt(body.id) < 0) {
        return NextResponse.json({cookie: "'You thought this would result in an error, didn't you?' -- CTF-API-ZUV3"});
    }
    return NextResponse.json({cookie: cookieList[parseInt(body.id)]});
}