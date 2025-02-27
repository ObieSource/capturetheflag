"use client";
import React from "react";


// https://tailwindui.com/components/application-ui/forms/sign-in-forms
export default function loginChallenge() {
    const username = React.createRef<HTMLInputElement>();
    const password = React.createRef<HTMLInputElement>();
    const [isError, setIsError] = React.useState(true);
    const [message, setMessage] = React.useState("");

    const onClick = () => {
        fetch("/api/login", {
            body: JSON.stringify({
                username: username.current?.value || "",
                password: password.current?.value || ""
            },
        ), method: "POST"
        }).then(p => {
            p.json().then(({message}) => setMessage(message))
        });
    };

    const validate = () => {
        setIsError(!(/^[A-Za-z0-9]+$/g.test(username.current?.value || "")));
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm/6 font-medium text-white">Username</label>
                        <div className="mt-2">
                            <input onChange={validate} ref={username} className={"outline-none block w-full rounded-md bg-[#212020] focus:bg-[#1A1A1D] px-3 py-1.5 text-base text-white border-2 outline-0 " + (isError ? "border-red-500": "border-[#A64D79]")} />
                            {isError && <span className="text-sm text-red-500">* Username must only contain alphanumeric characters</span>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm/6 font-medium text-white">Password</label>
                        </div>
                        <div className="mt-2">
                            <input ref={password} className="outline-none block w-full rounded-md bg-[#212020] focus:bg-[#1A1A1D] px-3 py-1.5 text-base text-white border-[#A64D79] border-2 outline-0" />
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