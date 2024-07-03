import { auth } from "@/auth";
import { User } from "@/model/User";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import UserInfo from "./_components/UserInfo";
import UserPosts from "./_components/UserPosts";
import { getUserPosts } from "./_lib/getUserPost";
import { getUserServer } from "./_lib/getUserServer";

export async function generateMetadata({ params }: Props) {
    const user: User = await getUserServer({ queryKey: ["users", params.username] });
    return {
        title: `${user.nickname} (${user.id}) / Z`,
        description: `${user.nickname} (${user.id}) 프로필`,
    };
}

type Props = {
    params: { username: string };
};

export default async function ProfilePage({ params }: Props) {
    const { username } = params;
    const session = await auth();
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ["users", username], queryFn: getUserServer });
    await queryClient.prefetchQuery({ queryKey: ["posts", "users", username], queryFn: getUserPosts });
    const dehydratedState = dehydrate(queryClient);

    return (
        <main className="w-[600px] border-white border-r-2 border-l-2 flex flex-col items-stretch">
            <HydrationBoundary state={dehydratedState}>
                <UserInfo username={username} session={session} />
                <div>
                    <UserPosts username={username} />
                </div>
            </HydrationBoundary>
        </main>
    );
}
