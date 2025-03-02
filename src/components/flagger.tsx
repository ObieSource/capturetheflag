"use client";
import { flags } from "@/app/api/flags/route";
import Link from "next/link";
import React, { useEffect } from "react";


export function SimpleLink({children, href, target}: {children: any, href?: string, target?: any}) {
    return (
      <Link target={target} className="text-[#DD88CF] font-bold leading-snug hover:underline hover:decoration-[#6A1E55] underline-offset-4 decoration-[2px]" href={href as any}>{children}</Link>
    );
  }

function ParseParagraph({paragraph}: {paragraph: string}) {
    const regex = /\[[^\]]*]\([^)]*\)/gm;
    const words = paragraph.split(regex);
    const links = regex.exec(paragraph)!;
    return (
        <>
        {words.map((w, i) => (
            
            <React.Fragment key={i}>{w}{i < (links?.length || 0) && <SimpleLink target="_blank" href={links[i].substring(links[i].indexOf("(")+1, links[i].length - 1)}>{links[i].substring(1,links[i].indexOf("]"))}</SimpleLink>}</React.Fragment>
        ))}
        </>
    )
}

function ParseInside({inside}: {inside: string}) {
    return (
        <>
        {inside.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mt-5">
                <ParseParagraph paragraph={paragraph} />
            </p>
        ))}
        </>
    );
}

export function Flagger({challenge}: {challenge: typeof flags[number]["challenge"]}) {
    const inp = React.createRef<HTMLInputElement>();
    const [inside, setInside] = React.useState("");

    const submit = () => {
        fetch(`/api/flags?challenge=${challenge}&flag=${inp.current?.value}`).then(x => x.json().then(y => {setInside(y.description); inp.current!.value = y.flag}));
    }
    useEffect(submit, []);
    return (
        <div className="w-2/3 mt-5">
            <span className="font-bold font-sm">Enter Flag:</span>
            <div className="flex gap-4">
                <input ref={inp} placeholder="CTF-XXX-XXXX" className="outline-none block w-full rounded-md bg-[#212020] focus:bg-[#1A1A1D] px-3 py-1.5 text-base text-white border-2 outline-0 border-[#A64D79]" />
                <button onClick={submit} className="flex w-full justify-center rounded-md bg-[#69304d] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#A64D79] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A64D79]">Submit</button>
                <div className=""></div>
            </div>
            <div>
                <ParseInside inside={inside} />
            </div>
        </div>
    )
}