
/**
 * This is a list of flags with some designated information about the vulnerability that was used to capture that flag!
 */

import { NextApiRequest } from "next";
import { NextRequest } from "next/server";


// This should be set to true after the CTF event. This way people can see what the solutions were.
const OVERRIDE_FLAG_CHECK = false;

type Flag = {
   challenge: string
   flag: string
   description: string
   points: number
}; 

// I'm using a naive find/replace for links. so dont use [] and () unless you want a link... lmao
// The parsing of this is also super horrible and untested. dont start or end the description with a link.

// Use \n\n if you want a new paragraph. Use [link name](https://link-to-website.com) for links
export const flags = [
    {
        challenge: "LOGIN-REQUIRED",
        flag: "CTF-LOG-H7LR",
        description: "You captured the flag! Perhaps one of the most common occurences of vulnerabilities is not properly validating user input. In this scenario, we were able to \"crash\" the server because while the web page told us we weren't allowed to use special characters, the web page relied on the user to enforce that rather than the server. It is always good practice to NEVER trust user input, otherwise things can go wrong very quickly. \n\nA common vulnerability in web development is the dreaded [XSS](https://portswigger.net/web-security/cross-site-scripting) attack, where malicious actors can exploit a website's faulty user-input-checker to run code on other users' machines. Really interesting stuff!",
        points: 1
    },
    {
        challenge: "EMPTY-PAGE",
        flag: "CTF-PNG-AY9D",
        description: "You captured the flag!",
        points: 1
    },
    {
        challenge: "IP-T-SHIRT",
        flag: "CTF-B67-MHMT",
        description: "You captured the flag! ",
        points: 3
    },
    {
        challenge: "FLAG-STORAGE-LOCATION",
        flag: "CTF-DIR-SL62",
        description: "You captured the flag! ",
        points: 3
    },
    {
        challenge: "AP-CHARTER",
        flag: "CTF-CZ3-WRJT",
        description: "You captured the flag! ",
        points: 5
    }
] as const;

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    for (let flag of flags) {
        if (flag.challenge === params.get("challenge") && (flag.flag === params.get("flag")!.trim() || OVERRIDE_FLAG_CHECK)) {
            return Response.json(flag);
        }
        if (flag.challenge !== params.get("challenge") && (flag.flag === params.get("flag")!.trim())) {
            return Response.json({
                challenge: flag.challenge,
                flag: flag.flag,
                description: `This isn't the right flag for this challenge, but it is the right flag for another one! You're looking for ${flag.challenge}!`
            });
        }
    }
    return Response.json({
        challenge: params.get("challenge"),
        flag: params.get("flag"),
        description: "Hmmm... that doesn't seem to be the right flag",
        points: 0
    });
}