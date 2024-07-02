import { auth } from "@/auth";
import { Metadata } from "next";
import { Suspense } from "react";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabDeciderSuspense from "./_components/TabDeciderSuspense";
import TabProvider from "./_components/TabProvider";
import Loading from "./loading";

export const metadata: Metadata = {
    title: "홈 / Z",
    description: "홈",
};

async function HomePage() {
    const session = await auth();

    return (
        <section className="flex flex-col items-stretch border-x-2 border-solid border-slate-100">
            <TabProvider>
                <Tab />
                <PostForm me={session} />
                <Suspense fallback={<Loading />}>
                    <TabDeciderSuspense />
                </Suspense>
            </TabProvider>
        </section>
    );
}

export default HomePage;
