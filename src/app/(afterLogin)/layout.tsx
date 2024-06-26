function AfterLoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start bg-white">
            <header className="flex items-end grow shrink-0 flex-col">
                <section className="bg-orange-500 w-[275px] px-2 h-dvh"></section>
            </header>
            <div className="flex items-start grow shrink h-dvh flex-col">
                <div className="h-full w-[990px] flex justify-between">
                    <main className="w-[600px] h-[200dvh]">{children}</main>
                    <section className="w-[350px] h-full"></section>
                </div>
            </div>
        </div>
    );
}

export default AfterLoginLayout;
