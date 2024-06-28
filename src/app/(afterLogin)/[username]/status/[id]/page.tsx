import BackButton from "@/app/(afterLogin)/_components/BackButton";
import Post from "@/app/(afterLogin)/_components/Post";
import CommentForm from "./_components/CommentForm";

export default function SinglePost() {
    return (
        <div className="w-[600px] border-slate-200 border-l border-r flex flex-col items-stretch">
            <div className="flex h-[53px] items-center">
                <BackButton />
                <h3 className="text-xl font-bold ml-[30px]">게시하기</h3>
            </div>
            <Post />
            <CommentForm />
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
