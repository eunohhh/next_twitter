import { auth } from "@/auth";
import { QueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { getUserServer } from "../../[username]/_lib/getUserServer";
import MessageForm from "./_components/MessageForm";
import MessageList from "./_components/MessageList";
import { UserInfo } from "./_components/UserInfo";
import WebSocketComponent from "./_components/WebSocketComponent";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
    params: { room: string };
};

export default async function ChatRoom({ params }: Props) {
    const session = await auth();
    const queryClient = new QueryClient();
    const ids = params.room.split("-").filter((v) => v !== session?.user?.email);
    if (!ids[0]) {
        return null;
    }
    await queryClient.prefetchQuery({ queryKey: ["users", ids[0]], queryFn: getUserServer });

    return (
        <main className="w-[600px] min-h-dvh border-slate-300 border-r-2 border-l-2 flex flex-col items-stretch">
            <WebSocketComponent />
            <UserInfo id={ids[0]} />
            <MessageList id={ids[0]} />
            <MessageForm id={ids[0]} />
        </main>
    );
}
