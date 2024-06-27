"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    post: {
        postId: number;
        content: string;
        User: {
            id: string;
            nickname: string;
            image: string;
        };
        createdAt: Date;
        Images: any[];
    };
};

export default function PostArticle({ children, post }: Props) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.postId}`);
    };

    return (
        <article
            onClickCapture={onClick}
            className="flex flex-col py-3 px-4 border-slate-200 border-b-2 border-solid transition-colors cursor-pointer hover:bg-opacity-5"
        >
            {children}
        </article>
    );
}
