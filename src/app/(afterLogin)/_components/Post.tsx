import type { Post } from "@/model/Post";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
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
    const target = {
        postId: 1,
        User: {
            id: "elonmusk",
            nickname: "Elon Musk",
            image: "/yRsRRjGO.jpg",
        },
        content: "클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ",
        createdAt: new Date(),
        Images: [] as any[],
    };
    if (Math.random() > 0.5 && !noImage) {
        target.Images.push(
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() }
        );
    }

    return (
        <PostArticle post={target}>
            <div className="flex flex-row">
                <div className="mr-3 w-10">
                    <Link
                        href={`/${target.User.id}`}
                        className="relative inline-block w-10 h-10 rounded-full"
                    >
                        <img src={target.User.image} alt={target.User.nickname} />
                        <div className="inline-block w-10 h-10 rounded-full absolute top-0 left-0" />
                    </Link>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row">
                        <Link href={`/${target.User.id}`}>
                            <span className="font-bold hover:underline">
                                {target.User.nickname}
                            </span>
                            &nbsp;
                            <span className="text-slate-500">@{target.User.id}</span>
                            &nbsp; · &nbsp;
                        </Link>
                        <span className="hover:underline">
                            {dayjs(target.createdAt).fromNow(true)}
                        </span>
                    </div>
                    <div>{target.content}</div>
                    <div>
                        <PostImages post={target} />
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </PostArticle>
    );
}
