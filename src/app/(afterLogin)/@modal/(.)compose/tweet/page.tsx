"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function TweetModal() {
    const [content, setContent] = useState();
    const imageRef = useRef<HTMLInputElement>(null);
    const { data: me } = useSession();
    const router = useRouter();

    const onSubmit = () => {};
    const onClickClose = () => {
        router.back();
    };
    const onClickButton = () => {};
    const onChangeContent = () => {};

    return (
        <div className="w-screen h-full flex justify-center absolute z-10 top-0 left-0 right-0 bottom-0 bg-black/25">
            <div className="bg-white relative top-[5%] max-w-[80vw] min-w-[600px] max-h-[400px] rounded-lg flex flex-col">
                <button
                    className="w-8 h-8 rounded-full absolute top-2 right-2 border-none cursor-pointer bg-white flex justify-center items-center hover:bg-black hover:bg-opacity-[0.1]"
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
                <form className="flex flex-col flex-1" onSubmit={onSubmit}>
                    <div className="px-4 flex-1 mt-[54px] flex flex-row">
                        <div className="mr-3 w-10">
                            <div className="w-10 h-10 rounded-full">
                                <img
                                    src={me?.user?.image as string}
                                    alt={me?.user?.email as string}
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <textarea
                                className="w-full border-none outline-none text-lg"
                                placeholder="무슨 일이 일어나고 있나요?"
                                value={content}
                                onChange={onChangeContent}
                            />
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="w-full border-b border-gray-200" />
                        <div className="flex flex-row items-center">
                            <div className="flex-1">
                                <input
                                    type="file"
                                    name="imageFiles"
                                    multiple
                                    hidden
                                    ref={imageRef}
                                />
                                <button
                                    className="w-8 h-8 border-none cursor-pointer rounded-lg bg-sky-500 bg-opacity-[0.01] hover:bg-opacity-[0.1] transition-colors flex justify-center items-center"
                                    type="button"
                                    onClick={onClickButton}
                                >
                                    <svg
                                        className="fill-sky-600"
                                        width={24}
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <g>
                                            <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <button
                                className="cursor-pointer w-[94px] h-[36px] rounded-full border-none my-2 bg-sky-500 disabled:bg-opacity-[0.5] text-white text-base"
                                disabled={!content}
                            >
                                게시하기
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
