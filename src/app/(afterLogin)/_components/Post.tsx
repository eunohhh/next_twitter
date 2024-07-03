import type { Post } from "@/model/Post";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { MouseEventHandler } from "react";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import PostImages from "./PostImages";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
    noImage?: boolean;
    post: Post;
};
export default function Post({ noImage, post }: Props) {
    let target = post;
    if (post.Original) {
        target = post.Original;
    }

    const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.stopPropagation();
    };

    return (
        <PostArticle post={target}>
            <div className="flex flex-row">
                <div className="mr-3 w-10">
                    <Link
                        href={`/${target.User.id}`}
                        className="relative inline-block w-10 h-10 rounded-full"
                        onClick={stopPropagation}
                    >
                        <img src={target.User.image} alt={target.User.nickname} />
                        <div className="inline-block w-10 h-10 rounded-full absolute top-0 left-0" />
                    </Link>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row">
                        <Link href={`/${target.User.id}`} onClick={stopPropagation}>
                            <span className="font-bold hover:underline">{target.User.nickname}</span>
                            &nbsp;
                            <span className="text-slate-500">@{target.User.id}</span>
                            &nbsp; · &nbsp;
                        </Link>
                        <span className="hover:underline">{dayjs(target.createdAt).fromNow(true)}</span>
                    </div>
                    {target.Parent && (
                        <div>
                            <Link
                                href={`/${target.Parent.User.id}`}
                                style={{ color: "rgb(29, 155, 240)" }}
                                onClick={stopPropagation}
                            >
                                @{target.Parent.User.id}
                            </Link>{" "}
                            님에게 보내는 답글
                        </div>
                    )}
                    <div>{target.content}</div>
                    {!noImage && (
                        <div>
                            <PostImages post={target} />
                        </div>
                    )}
                    <ActionButtons post={target} />
                </div>
            </div>
        </PostArticle>
    );
}
