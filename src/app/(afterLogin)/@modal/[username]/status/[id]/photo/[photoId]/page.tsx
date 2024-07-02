import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_components/Comments";
import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/_components/SinglePost";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import ImageZone from "./_components/ImageZone";
import PhotoModalCloseButton from "./_components/PhotoModalCloseButton";

type Props = {
    params: { id: string };
};

export default async function Default({ params }: Props) {
    const { id } = params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ["posts", id], queryFn: getSinglePost });
    await queryClient.prefetchQuery({ queryKey: ["posts", id, "comments"], queryFn: getComments });
    const dehydratedState = dehydrate(queryClient);

    return (
        <div className="bg-black/90 fixed z-10 left-0 top-0 w-dvw h-dvh flex flex-row">
            <HydrationBoundary state={dehydratedState}>
                <PhotoModalCloseButton />
                <ImageZone id={id} />

                <div className="w-[350px] bg-white border-l border-gray-200 overflow-auto">
                    <SinglePost id={id} noImage />
                    <CommentForm id={id} />
                    <Comments id={id} />
                </div>
            </HydrationBoundary>
        </div>
    );
}
