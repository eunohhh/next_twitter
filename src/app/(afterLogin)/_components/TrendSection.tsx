"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function TrendSection() {
    const { data: session } = useSession();
    // const { data } = useQuery<Hashtag[]>({
    //     queryKey: ["trends"],
    //     queryFn: getTrends,
    //     staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    //     gcTime: 300 * 1000,
    //     enabled: !!session?.user,
    // });

    const pathname = usePathname();
    if (pathname === "/explore") return null;

    if (session?.user) {
        return (
            <div className="rounded-md mt-3 bg-white">
                <div className="text-xl font-bold py-3">
                    <h3>나를 위한 트렌드</h3>
                    {/* {data?.map((trend) => <Trend trend={trend} key={trend.tagId} />)} */}
                </div>
            </div>
        );
    }
    return (
        <div className="rounded-md mt-3 bg-white">
            <div className="text-xl font-bold py-3">트렌드를 가져올 수 없습니다.</div>
        </div>
    );
}

export default TrendSection;
