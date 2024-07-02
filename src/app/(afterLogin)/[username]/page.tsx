import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import UserInfo from "./_components/UserInfo";
import UserPosts from "./_components/UserPosts";
import { getUser } from "./_lib/getUser";
import { getUserPosts } from "./_lib/getUserPost";

type Props = {
    params: { username: string };
};

export default async function ProfilePage({ params }: Props) {
    const { username } = params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ["users", username], queryFn: getUser });
    await queryClient.prefetchQuery({
        queryKey: ["posts", "users", username],
        queryFn: getUserPosts,
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <main className="w-[600px] border-white border-r-2 border-l-2 flex flex-col items-stretch">
            <HydrationBoundary state={dehydratedState}>
                <UserInfo username={username} />
                <div>
                    <UserPosts username={username} />
                </div>
            </HydrationBoundary>
        </main>
    );
}
