"use client";
import { flags } from "@/app/api/flags/route";
import React from "react";


export function Flagger({challenge}: {challenge: typeof flags[number]["challenge"]}) {
    const inp = React.createRef<HTMLInputElement>();
    const [inside, setInside] = React.useState("");

    const submit = () => {
        fetch(`/api/flags?challenge=${challenge}&flag=${inp.current?.value}`).then(x => x.json().then(y => setInside(y.description)))
    }
    return (
        <div className="w-2/3 mt-5">
            <span className="font-bold font-sm">Enter Flag:</span>
            <div className="flex gap-4">
                <input ref={inp} placeholder="CTF-XXX-XXXX" className="outline-none block w-full rounded-md bg-[#212020] focus:bg-[#1A1A1D] px-3 py-1.5 text-base text-white border-2 outline-0 border-[#A64D79]" />
                <button onClick={submit} className="flex w-full justify-center rounded-md bg-[#69304d] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#A64D79] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A64D79]">Submit</button>
                <div className=""></div>
            </div>
            <p className="mt-4">
                {inside}
            </p>
        </div>
    )
}