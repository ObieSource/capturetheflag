
/**
 * This is a list of flags with some designated information about the vulnerability that was used to capture that flag!
 */

import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";


// This should be set to true after the CTF event. This way people can see what the solutions were.

type Flag = {
    challenge: string
    flag: string
    description: string
    points: number
};

// THE SECRET FLAG ISNT IN HERE
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
        challenge: "A-RIVER-IN-EGPYT",
        flag: "CTF-DOS-KJ2B",
        description: "You captured the flag! A [Denial Of Service](https://en.wikipedia.org/wiki/Denial-of-service_attack) attack is an attack in which bad actors overwhelm a service with network requests, making the service either crash or extremely difficult for users to use.\n\nIn this scenario, the site wasn't checking how often we were making requests. As such, the site got overwhelmed and broke! Nearly every site has some sort of [rate limiting](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/) that prevents this from happening. For example, google will make you verify that you're not a bot if you spam the refresh button!\n\nOne of the largest wide-scale attacks is from the [Mirai Botnet](https://www.cisecurity.org/insights/blog/the-mirai-botnet-threats-and-mitigations).",
        points: 1
    },
    {
        challenge: "RESET-PASSWORD",
        flag: "CTF-QNA-92T6",
        description: "You captured the flag! This challenge looks similar to the login page, but with a major difference: instead of a mistake in the website's programming, this page instead has a flawed security model. Even if the website works flawlessly, answering the questions still cannot truly verify that the user is the intended person, since the intended person is not the only person who knows the answers. Security is not just good programming, but general design as a whole. This is also why you shouldn't put your answers to security questions as the actual answers.",
        points: 1
    },
    {
        challenge: "IP-T-SHIRT",
        flag: "CTF-B67-MHMT",
        description: "You captured the flag! In this challenge, we noticed that there was a year in the url, and we changed the year to 2021 to see that the flag was there!\n\nThis is a quasi-example of an [enumeration attack](https://stytch.com/blog/what-is-an-enumeration-attack/). Some insecure image-sharing sites enumerate their photos in this way (i.e. imageId=1, imageId=2, etc.) and can be easily indexed. This is highly insecure as sensitive data can be leaked. Another example of this is the fact that [credit cards have a set amount of numbers](https://www.acamstoday.org/enumeration-attack/).",
        points: 3
    },
    {
        challenge: "FLAG-STORAGE-LOCATION",
        flag: "CTF-DIR-SL62",
        description: "You captured the flag! In this example, we took advantage of the fact that pages are accessible from anywhere. By going to /flags, we were able to see information that the site owners thought was not accessible to the public.\n\nOne of the most important things in keeping sites secure is requiring authentication for web pages that have restricted access. Simply not having a link be clickable from anywhere does not prevent a user from going to that page. Oberlin has been guilty of doing exactly this.",
        points: 3
    },
    {
        challenge: "TREES",
        flag: "CTF-IMG-49F7",
        description: "You captured the flag! In this example, by downloading an image that was shared with us, we were able to look further into the contents of the file to uncover more information!\n\nWhile this example only worked with file names, a big issue arises with file [metadata](https://en.wikipedia.org/wiki/Metadata). For example, if a user shared an image, that image will contain sensitive information that can include where the photo was taken from. If this image was shared publicly, that user's location would be leaked. As such, it is integral for file-sharing sites to [scrub metadata](https://support.discord.com/hc/en-us/community/posts/13996617793559-Image-metadata-getting-removed).",
        points: 3
    },
    {
        challenge: "AP-CHARTER",
        flag: "CTF-CZ3-WRJT",
        description: "You captured the flag! In this example, we exploited the fact that the code is available to use in the webpage's inspection menu, and saw an HTML comment that contained the flag that we wanted.\n\nA common vulnerability is expecting users to not be tech-savvy, or to not put in work. By providing a user with a program, there is a likely chance that someone can modify it to their will. [Deobfuscation](https://nordvpn.com/cybersecurity/glossary/deobfuscate/) is not enough.\n\nIt is the server's job to maintain the validity of information regarding user data. Without it, video game hackers and much more impactful attacks will continue to exist.",
        points: 5
    },
    {
        challenge: "COOKIES",
        flag: "CTF-API-ZUV3",
        description: "You captured the flag! In this example, we inspected the network traffic of the communication of the server and found an API call. By modifying the request that was made, we were able to 'crash' the server.\n\nThis is a vulnerable API. Even while the logic of our code was correct, the server didn't validate the input. Even if your code using your code is correct, it is still important to enforce [invariance](https://medium.com/code-design/invariants-in-code-design-557c7864a047) in your code. You can find more vulnerabilities in APIs [here](https://brightsec.com/blog/top-api-vulnerabilities-and-6-ways-to-mitigate-them/).",
        points: 5,
    },
    {
        challenge: "AND-MILK",
        flag: "CTF-CK3-M1LK",
        description: "You captured the flag! In this example, we looked at the [cookies](https://usa.kaspersky.com/resource-center/definitions/cookies?srsltid=AfmBOoq2p-ClPS1zneVx7Wl8bMfQxjEqwqEy0_AAbfBFq1VaFVAQM4eo) stored in our session, changed the value of the 'amountOfTimesEgyptPageRequested' cookie to a value that doesnt make sense (A super high number, a negative number, or something that isnt a number).\n\nWhile this is similar to some other challenges that involve server validation, there is some interesting stuff that can surround cookies. For example, if a game kept track of a sessionID for a particular user, then an attacker could change their sessionID to that of the user and impersonate them. This is known as [session hijacking](https://en.wikipedia.org/wiki/Session_hijacking).",
        points: 5
    }
] as const;

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const cookie = await cookies();
    for (let flag of flags) {
        if (flag.challenge === params.get("challenge") && (flag.flag === params.get("flag")!.trim() || ((new Date()).getTime() >= Date.UTC(2025, 2, 2, 20) || cookie.has(flag.flag)))) {
            cookie.set(flag.flag, "true");
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
    if (params.get("flag") === "") {
        return Response.json({
            challenge: params.get("challenge"),
            flag: params.get("flag"),
            description: "",
            points: 0
        });
    }
    return Response.json({
        challenge: params.get("challenge"),
        flag: params.get("flag"),
        description: "Hmmm... that doesn't seem to be the right flag",
        points: 0
    });
}