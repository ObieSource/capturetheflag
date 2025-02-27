
/**
 * This is a list of flags with some designated information about the vulnerability that was used to capture that flag!
 */

import { NextApiRequest } from "next";
import { NextRequest } from "next/server";


type Flag = {
   challenge: string
   flag: string
   description: string
   points: number
}; 

// I'm using a naive find/replace for links. so dont use [] and () unless you want a link... lmao
export const flags = [
    {
        challenge: "login",
        flag: "CTF-LOG-H7LR",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium amet quis voluptates eos debitis autem ipsum quae beatae qui ut dolores ea quaerat rem, facere dolore minus aut enim!",
        points: 1
    }
] as const;

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    for (let flag of flags) {
        if (flag.challenge === params.get("challenge") && flag.flag === params.get("flag")) {
            return Response.json(flag);
        }
    }
    return Response.json({
        challenge: params.get("challenge"),
        flag: params.get("flag"),
        description: "Hmmm... that doesn't seem to be the right flag",
        points: 0
    });
}