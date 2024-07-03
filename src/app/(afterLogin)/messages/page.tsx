import { auth } from "@/auth";
import { Metadata } from "next";
import Room from "./_components/Room";
import { getRooms } from "./_lib/getRooms";

export const metadata: Metadata = {
    title: "쪽지 / Z",
    description: "쪽지를 보내보세요.",
};

async function MessagesPage() {
    const session = await auth();
    const rooms = session?.user?.email ? await getRooms(session?.user?.email) : [];

    return (
        <main className="w-[600px] min-h-dvh border-slate-300 border-r-2 border-l-2 flex flex-col items-stretch">
            <div className="h-[53px] flex items-center px-4">
                <h3 className="text-xl font-bold">쪽지</h3>
            </div>
            {rooms.map((room) => (
                <Room key={room.room} room={room} />
            ))}
        </main>
    );
}

export default MessagesPage;
