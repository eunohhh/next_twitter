"use client";
import Post from "@/app/(afterLogin)/_components/Post";
import { getFollowingPosts } from "@/app/(afterLogin)/home/_lib/getFollowingPosts";
import styles from "@/app/(afterLogin)/home/home.module.css";
import { Post as IPost } from "@/model/Post";
import { useQuery } from "@tanstack/react-query";

export default function FollowingPosts() {
    const { data, isPending } = useQuery<IPost[]>({
        queryKey: ["posts", "followings"],
        queryFn: getFollowingPosts,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    });

    if (isPending) {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <svg className={styles.loader} height="100%" viewBox="0 0 32 32" width={40}>
                    <circle
                        cx="16"
                        cy="16"
                        fill="none"
                        r="14"
                        strokeWidth="4"
                        style={{ stroke: "rgb(29, 155, 240)", opacity: 0.2 }}
                    ></circle>
                    <circle
                        cx="16"
                        cy="16"
                        fill="none"
                        r="14"
                        strokeWidth="4"
                        style={{
                            stroke: "rgb(29, 155, 240)",
                            strokeDasharray: 80,
                            strokeDashoffset: 60,
                        }}
                    ></circle>
                </svg>
            </div>
        );
    }

    return data?.map((post) => <Post key={post.postId} post={post} />);
}
