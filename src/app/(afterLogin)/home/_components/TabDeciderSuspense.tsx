import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import TabDecider from "./TapDecider";

export default async function TabDeciderSuspense() {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery({
        queryKey: ["posts", "recommends"],
        queryFn: getPostRecommends,
        initialPageParam: 0,
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <TabDecider />
        </HydrationBoundary>
    );
}
