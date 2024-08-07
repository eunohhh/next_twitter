"use client";

import { Post } from "@/model/Post";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    post: Post;
};

export default function PostArticle({ children, post }: Props) {
    const router = useRouter();
    let target = post;
    if (post.Original) {
        target = post.Original;
    }
    const onClick = () => {
        router.push(`/${target.User.id}/status/${target.postId}`);
    };

    return (
        <article
            onClick={onClick}
            className="flex flex-col py-3 px-4 border-slate-200 border-b-2 border-solid transition-colors cursor-pointer hover:bg-opacity-5"
        >
            {children}
        </article>
    );
}
