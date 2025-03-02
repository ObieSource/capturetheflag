"use client";
import React from "react";


// https://tailwindui.com/components/application-ui/forms/sign-in-forms
export default function resetPassword() {
    const question1 = React.createRef<HTMLInputElement>();
    const question2 = React.createRef<HTMLInputElement>();
    const question3 = React.createRef<HTMLInputElement>();
    const [message, setMessage] = React.useState("");

    const onClick = () => {
        fetch("/api/resetpassword", {
            body: JSON.stringify({
                question1: question1.current?.value || "",
                question2: question2.current?.value || "",
                question3: question3.current?.value || ""
            },
        ), method: "POST"
        }).then(p => {
            p.json().then(({message}) => setMessage(message))
        });
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Answer your security questions to reset your Oberlin password.</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm/6 font-medium text-white">What college do you go to?</label>
                        <div className="mt-2">
                            <input ref={question1} className={"outline-none block w-full rounded-md bg-[#212020] focus:bg-[#1A1A1D] px-3 py-1.5 text-base text-white border-2 outline-0 "} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm/6 font-medium text-white">What is your graduation year?</label>
                        <div className="mt-2">
                            <input ref={question2} className={"outline-none block w-full rounded-md bg-[#212020] focus:bg-[#1A1A1D] px-3 py-1.5 text-base text-white border-2 outline-0 "} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm/6 font-medium text-white">What building is your first class?</label>
                        <div className="mt-2">
                            <input ref={question3} className={"outline-none block w-full rounded-md bg-[#212020] focus:bg-[#1A1A1D] px-3 py-1.5 text-base text-white border-2 outline-0 "} />
                        </div>
                    </div>
                    <div>
                        {(message !== "") && <span>{message}</span>}
                    </div>
                    <div>
                        <button onClick={onClick} className="flex w-full justify-center rounded-md bg-[#69304d] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#A64D79] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A64D79]">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}