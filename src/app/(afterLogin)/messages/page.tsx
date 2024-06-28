import Room from "./_components/Room";

function MessagesPage() {
    return (
        <main className="w-[600px] min-h-dvh border-slate-300 border-r-2 border-l-2 flex flex-col items-stretch">
            <div className="h-[53px] flex items-center px-4">
                <h3 className="text-xl font-bold">쪽지</h3>
            </div>
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
        </main>
    );
}

export default MessagesPage;
