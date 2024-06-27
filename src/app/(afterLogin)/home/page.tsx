import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";

function HomePage() {
    return (
        <section className="flex flex-col items-stretch border-x-2 border-solid border-slate-100">
            <TabProvider>
                <Tab />
                <PostForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </TabProvider>
        </section>
    );
}

export default HomePage;
