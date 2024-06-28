"use client";

import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/navigation";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Room() {
    const router = useRouter();
    const user = {
        id: "hero",
        nickname: "영웅",
        Messages: [
            { roomId: 123, content: "안녕하세요.", createdAt: new Date() },
            { roomId: 123, content: "안녕히가세요.", createdAt: new Date() },
        ],
    };

    const onClick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
    };

    return (
        <div
            className="p-4 flex flex-row transition-colors cursor-pointer bg-white hover:bg-black/5"
            onClickCapture={onClick}
        >
            <div className="w-10 h-10 rounded-full mr-4">
                <img className="w-10 h-10 rounded-full mr-4" src={faker.image.avatar()} alt="" />
            </div>
            <div className="flex flex-col text-slate-600 text-base">
                <div className="roomUserInfo">
                    <b className="font-black">{user.nickname}</b>
                    &nbsp;
                    <span>@{user.id}</span>
                    &nbsp; · &nbsp;
                    <span className="postDate">
                        {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
                    </span>
                </div>
                <div className="roomLastChat">{user.Messages?.at(-1)?.content}</div>
            </div>
        </div>
    );
}
