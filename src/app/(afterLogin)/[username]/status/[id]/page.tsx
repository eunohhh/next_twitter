import BackButton from "@/app/(afterLogin)/_components/BackButton";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import CommentForm from "./_components/CommentForm";
import Comments from "./_components/Comments";
import SinglePost from "./_components/SinglePost";
import { getComments } from "./_lib/getComments";
import { getSinglePost } from "./_lib/getSinglePost";

type Props = {
    params: { id: string };
};
export default async function Page({ params }: Props) {
    const { id } = params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ["posts", id], queryFn: getSinglePost });
    await queryClient.prefetchQuery({ queryKey: ["posts", id, "comments"], queryFn: getComments });
    const dehydratedState = dehydrate(queryClient);

    return (
        <div className="w-[600px] border-slate-200 border-l border-r flex flex-col items-stretch">
            <HydrationBoundary state={dehydratedState}>
                <div className="flex h-[53px] items-center">
                    <BackButton />
                    <h3 className="text-xl font-bold ml-[30px]">게시하기</h3>
                </div>
                <SinglePost id={id} />
                <CommentForm id={id} />
                <div>
                    <Comments id={id} />
                </div>
            </HydrationBoundary>
        </div>
    );
}
