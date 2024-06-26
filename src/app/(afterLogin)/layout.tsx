import Image from "next/image";
import Link from "next/link";
import NavMenuPage from "./_components/NavMenu";

function AfterLoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-stretch bg-white">
            <header className="flex items-end grow shrink-0 flex-col">
                <section className="bg-orange-500 w-[275px] px-2 h-dvh">
                    <div className="fixed w-inherit h-dvh flex flex-col">
                        <Link className="inline-block h-[56px] mt-[2px]" href="/home">
                            <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center">
                                <Image src={"/zlogo.png"} alt="z.com로고" width={50} height={50} />
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenuPage />
                            </ul>
                            <Link
                                href="/compose/tweet"
                                className="my-4 flex justify-center items-center h-13 shadow-md bg-[rgb(29, 155, 240)] w-56 text-black text-base font-bold rounded-md"
                            >
                                게시하기
                            </Link>
                        </nav>
                    </div>
                </section>
            </header>
            <div className="flex items-start grow shrink h-dvh flex-col bg-slate-400">
                <div className="h-full w-[990px] flex justify-between">
                    <main className="w-[600px] h-[200dvh]">{children}</main>
                    <section className="w-[350px] h-full">
                        <div style={{ marginBottom: 60, width: "inherit" }}>
                            <form className="fixed h-10 w-inherit rounded-md bg-[rgb(239, 243, 244))] mt-1.5 mb-3 flex items-center">
                                <svg
                                    className="ml-5 fill-[83, 100, 113]"
                                    width={20}
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <g>
                                        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                                    </g>
                                </svg>
                                <input
                                    className="outline-none bg-inherit p-3 ml-1 text-base border-none"
                                    type="search"
                                />
                            </form>
                        </div>
                        <div className="text-md font-bold bg-[rgb(247, 249, 249] rounded-sm my-3 py-3 px-4">
                            <h3 className="text-[12px]">팔로우 추천</h3>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AfterLoginLayout;
