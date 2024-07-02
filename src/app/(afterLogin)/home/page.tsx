import { Suspense } from "react";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabDeciderSuspense from "./_components/TabDeciderSuspense";
import TabProvider from "./_components/TabProvider";
import Loading from "./loading";

function HomePage() {
    return (
        <section className="flex flex-col items-stretch border-x-2 border-solid border-slate-100">
            <TabProvider>
                <Tab />
                <PostForm />
                <Suspense fallback={<Loading />}>
                    <TabDeciderSuspense />
                </Suspense>
            </TabProvider>
        </section>
    );
}

export default HomePage;
