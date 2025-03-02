import { NextResponse } from 'next/server';

export async function POST( 
    req: Request,
) {
    const body = await req.json();
    if (body.question1.match("Oberlin") &&
        body.question2.match("2026") &&
        body.question3.match("King") ) {
        return NextResponse.json({message: "Reset confirmed: CTF-QNA-92T6"});
    }
    else {
        return NextResponse.json({message: "Incorrect"});
    }
}