import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import ActionButtons from "@/app/(afterLogin)/_components/ActionButtons";
import { Post as IPost } from "@/model/Post";
import { useQuery } from "@tanstack/react-query";

type Props = {
    id: string;
};
export default function ImageZone({ id }: Props) {
    const { data: post, error } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({
        queryKey: ["posts", id],
        queryFn: getSinglePost,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    });

    if (!post?.Images[0]) {
        return null;
    }
    return (
        <div className="flex-1 flex flex-col">
            <img src={post.Images[0].link} alt={post.content} />
            <div
                className="bg-contain bg-no-repeat bg-center flex-1"
                style={{ backgroundImage: `url(${post.Images[0].link}})` }}
            />
            <div className="flex flex-row justify-center items-center">
                <div className="w-[600px] h-[60px]">
                    <ActionButtons white />
                </div>
            </div>
        </div>
    );
}
