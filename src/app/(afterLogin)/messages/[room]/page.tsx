import { faker } from "@faker-js/faker";
import cx from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import BackButton from "../../_components/BackButton";
import style from "./chatroom.module.css";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function ChatRoom() {
    const user = {
        id: "hero",
        nickname: "영웅",
        image: faker.image.avatar(),
    };
    const messages = [
        {
            messageId: 1,
            roomId: 123,
            id: "zerohch0",
            content: "안녕하세요.",
            createdAt: new Date(),
        },
        { messageId: 2, roomId: 123, id: "hero", content: "안녕히가세요.", createdAt: new Date() },
    ];

    return (
        <main className="w-[600px] min-h-dvh border-slate-300 border-r-2 border-l-2 flex flex-col items-stretch">
            <div className="h-[54px] flex items-center">
                <BackButton />
                <div>
                    <h2 className="text-xl ml-10">{user.nickname}</h2>
                </div>
            </div>
            <Link
                href={user.nickname}
                className="pt-5 pr-4 pb-[60px] flex items-center flex-col transition-colors border-slate-300 border-b-2 mb-5 hover:bg-black/5"
            >
                <img className="w-[64px] h-[64px] rounded-full" src={user.image} alt={user.id} />
                <div>
                    <b>{user.nickname}</b>
                </div>
                <div>@{user.id}</div>
            </Link>
            <div className="list">
                {messages.map((m) => {
                    if (m.id === "zerohch0") {
                        // 내 메시지면
                        return (
                            <div key={m.messageId} className={cx(style.message, style.myMessage)}>
                                <div className={style.content}>{m.content}</div>
                                <div className={style.date}>
                                    {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                                </div>
                            </div>
                        );
                    }
                    return (
                        <div key={m.messageId} className={cx(style.message, style.yourMessage)}>
                            <div className={style.content}>{m.content}</div>
                            <div className={style.date}>
                                {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
