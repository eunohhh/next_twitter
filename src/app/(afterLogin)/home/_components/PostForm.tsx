"use client";

import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

export default function PostForm() {
    const imageRef = useRef<HTMLInputElement>(null);
    const [content, setContent] = useState("");
    const me = {
        id: "zerohch0",
        image: "/5Udwvqim.jpg",
    };

    const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setContent(e.target.value);
    };

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    const onClickButton = () => {
        imageRef.current?.click();
    };

    return (
        <form
            className="mt-[100px] flex pt-4 pr-4 pb-22 border-slate-200 border-b-2 border-solid"
            onSubmit={onSubmit}
        >
            <div className="mr-3 w-10">
                <div className="w-10 h-10 rounded-full">
                    <img className="w-10 h-10 rounded-full" src={me.image} alt={me.id} />
                </div>
            </div>
            <div className="flex-1">
                <textarea
                    className="w-full border-none py-3 text-xl leading-6 outline-none resize-none"
                    value={content}
                    onChange={onChange}
                    placeholder="무슨 일이 일어나고 있나요?"
                />
                <div className="w-full">
                    <div className="flex flex-row items-center">
                        <div className="flex-1">
                            <input type="file" name="imageFiles" multiple hidden ref={imageRef} />
                            <button
                                className="w-8 h-8 rounded-full bg-slate-200 bg-opacity-[0.01] transition-opacity flex justify-center items-center hover:bg-opacity-[0.1]"
                                type="button"
                                onClick={onClickButton}
                            >
                                <svg
                                    className="fill-slate-400"
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
                            className="w-[94px] h-9 border-none text-white font-black text-base rounded-full bg-slate-500 hover:bg-slate-600 disabled:opacity-50"
                            disabled={!content}
                        >
                            게시하기
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
