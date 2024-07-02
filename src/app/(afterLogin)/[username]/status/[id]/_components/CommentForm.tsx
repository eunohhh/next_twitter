"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";

type Props = {
    id: string;
};
export default function CommentForm({ id }: Props) {
    const [content, setContent] = useState("");
    const imageRef = useRef<HTMLInputElement>(null);
    const { data: me } = useSession();

    const onClickButton = () => {};
    const onSubmit = () => {};
    const onChange = () => {};

    const queryClient = useQueryClient();
    const post = queryClient.getQueryData(["posts", id]);
    console.log("post", post, id);

    if (!post) {
        return null;
    }
    return (
        <form className="flex pt-4 pr-4 pb-2 border-b border-white " onSubmit={onSubmit}>
            <div className="mr-3 w-10">
                <div className="w-10 h-10 rounded-full">
                    <img src={me?.user?.image as string} alt={me?.user?.email as string} />
                </div>
            </div>
            <div className="flex-1">
                <textarea value={content} onChange={onChange} placeholder="답글 게시하기" />
                <div className="w-full">
                    <div className="flex flex-row items-center">
                        <div className="flex-1">
                            <input type="file" name="imageFiles" multiple hidden ref={imageRef} />
                            <button
                                className="w-[34px] h-[34px] flex justify-center items-center rounded-full bg-slate-700/5 border-none hover:bg-slate-700/10 transition-colors"
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
                            className="w-[94px] h-[36px] border-none rounded-full bg-sky-600 font-bold text-base text-white hover:bg-sky-500 transition-colors"
                            disabled={!content}
                        >
                            답글
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
