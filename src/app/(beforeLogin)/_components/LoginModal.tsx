"use client";

import { useState } from "react";

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
            <div className="max-w-[80vw] min-w-[600px] rounded-md flex flex-col h-[450px] relative bg-white">
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
                    <div>로그인하세요.</div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="flex-1 py-20">
                        <div className="flex flex-col h-14 relative my-3">
                            <label className="w-full inline-block absolute" htmlFor="id">
                                아이디
                            </label>
                            <input
                                id="id"
                                className="w-full border-none text-base mt-4 pt-3 pr-2 pb-2 outline-none"
                                value={id}
                                onChange={onChangeId}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="flex flex-col h-14 relative my-3">
                            <label
                                className="w-full inline-block absolute top-0 border-solid border border-black text-sm h-14 pt-2 pr-2 text-[rgb(83, 100, 113)]"
                                htmlFor="password"
                            >
                                비밀번호
                            </label>
                            <input
                                id="password"
                                className="w-full border-none text-base mt-4 pt-3 pr-2 pb-2 outline-none"
                                value={password}
                                onChange={onChangePassword}
                                type="password"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div>{message}</div>
                    <div>
                        <button disabled={!id && !password}>로그인하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
