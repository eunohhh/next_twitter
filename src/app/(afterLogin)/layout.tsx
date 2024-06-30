import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import FollowRecommend from "./_components/FollowRecommend";
import LogOutButton from "./_components/LogOutButton";
import NavMenuPage from "./_components/NavMenu";
import RightSearchZone from "./_components/RightSearchZone";
import TrendSection from "./_components/TrendSection";

interface AfterLoginLayoutProps {
    children: React.ReactNode;
    modal: React.ReactNode;
}

async function AfterLoginLayout({ children, modal }: AfterLoginLayoutProps) {
    const session = await auth();

    return (
        <section className="flex items-stretch bg-white">
            <header className="flex items-end grow shrink-0 flex-col">
                <section className="w-[275px] px-2 h-dvh">
                    <div className="fixed w-inherit h-dvh flex flex-col">
                        <Link
                            className="inline-block h-[56px] mt-[2px]"
                            href={session?.user ? "/home" : "/"}
                        >
                            <div className="relative w-[50px] h-[50px] rounded-full flex justify-center items-center">
                                <Image src={"/zlogo.png"} alt="z.com로고" fill sizes="100%" />
                            </div>
                        </Link>
                        {session?.user && (
                            <>
                                <nav className="flex-1">
                                    <ul>
                                        <NavMenuPage />
                                    </ul>
                                    <Link
                                        href="/compose/tweet"
                                        className="my-4 flex justify-center items-center h-12 shadow-md bg-blue-500 w-56 text-black text-base font-bold rounded-xl"
                                    >
                                        게시하기
                                    </Link>
                                </nav>
                                <LogOutButton />
                            </>
                        )}
                    </div>
                </section>
            </header>
            <section className="flex items-start grow shrink h-dvh flex-col">
                <main className="h-full w-[990px] flex justify-between">
                    <section className="w-[600px] h-[200dvh]">{children}</section>
                    <section className="w-[350px] h-full bg-white">
                        <RightSearchZone />
                        <TrendSection />
                        <div className="text-md font-bold bg-[rgb(247, 249, 249] rounded-sm my-3 py-3 px-4">
                            <h3 className="text-[12px]">팔로우 추천</h3>
                            <FollowRecommend />
                            <FollowRecommend />
                            <FollowRecommend />
                        </div>
                    </section>
                </main>
            </section>
            {modal}
        </section>
    );
}

export default AfterLoginLayout;
