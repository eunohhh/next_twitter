"use client";

import { useState } from "react";

const inputDiv = "flex flex-col h-auto relative";
const inputLabel = "text-base font-bold";
const input = "w-full text-base py-1 border border-gray-300";

export default function LoginModal() {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();
    const onSubmit = () => {};
    const onClickClose = () => {};

    const onChangeId = () => {};

    const onChangePassword = () => {};

    return (
        <div className="w-screen h-full absolute flex justify-center top-0 left-0 right-0 bottom-0 bg-black/[0.4] ">
            <div className="max-w-[80vw] top-[5%] min-w-[600px] rounded-md flex flex-col h-[450px] relative bg-white">
                <div className="pt-9 pr-20 pb-5 font-bold text-3xl">
                    <button
                        className="w-[34px] h-[34px] rounded-md cursor-pointer border-none absolute bg-white left-4 right-4 flex justify-center items-center"
                        onClick={onClickClose}
                    >
                        <svg
                            width={24}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
                        >
                            <g>
                                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                            </g>
                        </svg>
                    </button>
                    <div className="text-center text-3xl font-bold">로그인하세요.</div>
                </div>
                <form className="flex flex-col box-border p-4" onSubmit={onSubmit}>
                    <div className="flex-1 py-20">
                        <div className={inputDiv}>
                            <label className={inputLabel} htmlFor="id">
                                아이디
                            </label>
                            <input
                                id="id"
                                className={input}
                                value={id}
                                onChange={onChangeId}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className={inputDiv}>
                            <label className={inputLabel} htmlFor="password">
                                비밀번호
                            </label>
                            <input
                                id="password"
                                className={input}
                                value={password}
                                onChange={onChangePassword}
                                type="password"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div>{message}</div>
                    <div>
                        <button
                            className="w-full h-10 bg-blue-500 text-white rounded-full"
                            disabled={!id && !password}
                        >
                            로그인하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
