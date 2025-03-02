"use client";
import Image from "next/image";
import cairo from "./cairo.jpg";
import { SimpleLink } from "@/components/flagger";
import { useEffect, useState } from "react";

export default function page() {
    const [flag, setFlag] = useState("_");
    useEffect(() => {
        fetch("/api/egpyt").then(resp => resp.json().then(m => setFlag(m.message)));
    }, []);
    return (
        <div className="p-5">
            {(flag === "") && (<><p className="p-5">
                The Nile (also known as the Nile River or River Nile) is a major north-flowing river in northeastern Africa. It flows into the Mediterranean Sea. The Nile is the longest river in Africa. It has historically been considered the longest river in the world, though this has been contested by research suggesting that the Amazon River is slightly longer. Of the world's major rivers, the Nile is one of the smallest, as measured by annual flow in cubic metres of water. About 6,650 km (4,130 mi) long, its drainage basin covers eleven countries: the Democratic Republic of the Congo, Tanzania, Burundi, Rwanda, Uganda, Kenya, Ethiopia, Eritrea, South Sudan, Sudan, and Egypt. In particular, the Nile is the primary water source of Egypt, Sudan and South Sudan. In these countries it is an important economic factor in agriculture and fishing.
            </p>
                <div className="lg:ml-10">
                    <SimpleLink href="https://en.wikipedia.org/wiki/Nile">from Wikipedia</SimpleLink><br></br>
                    <Image src={cairo} alt="A photo of the Nile River" />
                    <SimpleLink href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cairo_skyline%2C_Panoramic_view%2C_Egypt.jpg/390px-Cairo_skyline%2C_Panoramic_view%2C_Egypt.jpg">Original image source</SimpleLink>
                </div>
            </>)}
            {(flag !== "" && flag !== "_" && flag.startsWith("C")) && (
                <div className="mx-auto w-fit">
                    <div className="font-extrabold text-center">SERVER ERROR: Service Denied</div>
                    
                    The server has received too many requests from this device. Good job! {flag}
                </div>)}
            {(flag.startsWith("T") && <div className="font-extrabold text-center">{flag}</div>)}
        </div>
    )
}