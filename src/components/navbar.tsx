"use client";
import React, { useEffect, useState } from "react";


// Color palette: https://colorhunt.co/palette/1a1a1d3b1c326a1e55a64d79
function NavItem(props: { link: string, title: string, active: boolean, onClick: () => any }) {
    const cls = props.active ? "text-[#DD88CF]" : "text-white";
    return (
        <li className="nav-item">
            <a
                className={cls + " px-3 py-2 flex items-center font-bold leading-snug hover:underline hover:decoration-[#6A1E55] underline-offset-8 decoration-[2px]"}
                href={props.link}
                onClick={props.onClick}
            >
                <span className="ml-2">{props.title}</span>
            </a>
        </li>
    );
}

const navElements = [
    {
        link: "/#beginner",
        title: "Beginner"
    },
    {
        link: "/#intermediate",
        title: "Intermediate"
    },
    {
        link: "/#advanced",
        title: "Advanced"
    }
];


export default function NavbarDefault({ active }: { active?: string }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const [score, setScore] = useState(0);

    const fetchScore = () => {
        fetch("/api/score").then(resp => resp.json().then(({score}) => setScore(score)));
        setTimeout(fetchScore, 1000 * 5); // every 5 seconds
    }

    useEffect(fetchScore,[]);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#1A1A1D] mb-3 font-serif border-b-4 border-b-[#A64D79]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                            href="/"
                        >
                            <div className="flex hover:scale-105">
                                <div className="mr-5 uppercase text-2xl"><code>CTF</code></div>
                            </div>
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path></g></g></svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {navElements.map(x => <NavItem link={x.link} title={x.title} key={x.link} active={x.title === active} onClick={() => setNavbarOpen(false)}/>)}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="fixed right-0 bottom-1 border-2 p-5 rounded-lg border-[#A64D79] bg-[#1A1A1D]">
                Current score: {score}
            </div>
        </>
    );
}