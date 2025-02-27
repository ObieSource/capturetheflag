import { NextResponse } from 'next/server';



type ResponseData = {
    message: string
}

// This is just an example. Would probs be a beginner problem from backend standpoint

export async function POST( 
    req: Request,
) {
    const body = await req.json();
    if (body.username.match(/^[A-Za-z0-9]+$/g)) {
        return NextResponse.json({message: "Login successful"});
    } else if (body?.username !== undefined && body.username !== "[^A-Za-z0-9]+"){
        return NextResponse.json({message: "Server Error! You've found CTF-LOG-H7LR"});
    } 
    return NextResponse.json({message: "Someone likes to look at public repos for fun. The most insecure thing you can do is hide sensitive info in a repo! CTF-NICE-ONE-BRO"});

}