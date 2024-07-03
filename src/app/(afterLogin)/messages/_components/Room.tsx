"use client";

import type { Room } from "@/model/Room";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
    room: Room;
};

export default function Room({ room }: Props) {
    const { data: session } = useSession();
    const router = useRouter();

    const onClick = () => {
        router.push(`/messages/${room.room}`);
    };

    const user = room.Receiver.id === session?.user?.email ? room.Sender : room.Receiver;

    return (
        <div
            className="p-4 flex flex-row transition-colors cursor-pointer bg-white hover:bg-black/5"
            onClickCapture={onClick}
        >
            <div className="w-10 h-10 rounded-full mr-4">
                <img className="w-10 h-10 rounded-full mr-4" src={user.image} alt="" />
            </div>
            <div className="flex flex-col text-slate-600 text-base">
                <div className="roomUserInfo">
                    <b className="font-black">{user.nickname}</b>
                    &nbsp;
                    <span>@{user.id}</span>
                    &nbsp; · &nbsp;
                    <span className="postDate">{dayjs(room.createdAt).fromNow(true)}</span>
                </div>
                <div className="roomLastChat">{room.content}</div>
            </div>
        </div>
    );
}
