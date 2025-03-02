"use client";
import { SimpleLink } from "@/components/flagger"
import React, { useEffect, useState } from "react";


// adapted from https://tailwindflex.com/@sienna/copy-code-block
function Code({ children }: { children: string }) {

    return (
        <code
            className="mt-10 w-fit text-sm sm:text-base inline-flex space-x-4 bg-[#1A1A1D] text-white rounded-lg p-4 lg:pl-6">
            <span className="flex gap-4">
                <span className="shrink-0 text-gray-500">
                    $
                </span>

                <span className="flex-1">
                    <span>
                        {children.split("\n").map((text, i, arr) => (
                            <React.Fragment key={i}>
                                {text}{i < arr.length && <br/>}
                            </React.Fragment>
                        ))}
                    </span>
                </span>
            </span>

        </code>
    )
}

export default function Page() {
    
    const [currentCookie, setCurrentCookie] = useState("");

    const cookie = () => {
        fetch("/api/cookies", {
            method: "POST",
            body: JSON.stringify({
                id: Math.floor(Math.random() * 4336)
            })
        }).then(resp => resp.json().then(({cookie}) => setCurrentCookie(cookie)))
    };

    useEffect(cookie, []);

    return (
        <div className="p-5">
            <h1 className="font-extrabold">Cookie</h1>
            <p className="pt-5">
                Cookie is a command-line argument utility that exists in the Oberlin CS servers.
                It is a simple database that lets users submit public messages or look at them.
                To access it, you first must ssh into the oberlin servers:
            </p>
            <Code>
                ssh username@occs.cs.oberlin.edu
            </Code>
            <p className="pt-5">
                From there, you can simply enter in "cookie", and you're good to go! It will choose a random cookie to display. The convention of cookie is that you "cookie" someone else by quoting them or a conversation and then following it with their oberlin username. To look at who's been cookied, you can do:
            </p>
            <Code>
                cookiegrep username
            </Code>
            <p className="pt-5">
                Below is a random cookie. As of the time of making this site there are 4337 cookies. BTW these are not always family friendly. You can get a new random cookie by clicking <span onClick={cookie} className="text-[#DD88CF] font-bold leading-snug hover:cursor-pointer hover:underline hover:decoration-[#6A1E55] underline-offset-4 decoration-[2px]">here</span>
            </p>
            <Code>
                {currentCookie}
            </Code>
        </div>
    )
}