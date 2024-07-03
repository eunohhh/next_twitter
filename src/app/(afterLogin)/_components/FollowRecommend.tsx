"use client";

import { User } from "@/model/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { MouseEventHandler } from "react";

function FollowRecommend({ user }: { user: User }) {
    const { data: session } = useSession();
    const followed = !!user.Followers?.find((v) => v.id === session?.user?.email);
    const queryClient = useQueryClient();
    const follow = useMutation({
        mutationFn: (userId: string) => {
            console.log("follow", userId);
            return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`, {
                credentials: "include",
                method: "post",
            });
        },
        onMutate(userId: string) {
            const value: User[] | undefined = queryClient.getQueryData(["users", "followRecommends"]);
            if (value) {
                const index = value.findIndex((v) => v.id === userId);
                console.log(value, userId, index);
                const shallow = [...value];
                shallow[index] = {
                    ...shallow[index],
                    Followers: [{ id: session?.user?.email as string }],
                    _count: {
                        ...shallow[index]._count,
                        Followers: shallow[index]._count?.Followers + 1,
                    },
                };
                queryClient.setQueryData(["users", "followRecommends"], shallow);
            }
            const value2: User | undefined = queryClient.getQueryData(["users", userId]);
            if (value2) {
                const shallow = {
                    ...value2,
                    Followers: [{ id: session?.user?.email as string }],
                    _count: {
                        ...value2._count,
                        Followers: value2._count?.Followers + 1,
                    },
                };
                queryClient.setQueryData(["users", userId], shallow);
            }
        },
        onError(error, userId: string) {
            const value: User[] | undefined = queryClient.getQueryData(["users", "followRecommends"]);
            if (value) {
                const index = value.findIndex((v) => v.id === userId);
                console.log(value, userId, index);
                const shallow = [...value];
                shallow[index] = {
                    ...shallow[index],
                    Followers: shallow[index].Followers.filter((v) => v.id !== session?.user?.email),
                    _count: {
                        ...shallow[index]._count,
                        Followers: shallow[index]._count?.Followers - 1,
                    },
                };
                queryClient.setQueryData(["users", "followRecommends"], shallow);
                const value2: User | undefined = queryClient.getQueryData(["users", userId]);
                if (value2) {
                    const shallow = {
                        ...value2,
                        Followers: value2.Followers.filter((v) => v.id !== session?.user?.email),
                        _count: {
                            ...value2._count,
                            Followers: value2._count?.Followers - 1,
                        },
                    };
                    queryClient.setQueryData(["users", userId], shallow);
                }
            }
        },
    });
    const unfollow = useMutation({
        mutationFn: (userId: string) => {
            console.log("unfollow", userId);
            return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`, {
                credentials: "include",
                method: "delete",
            });
        },
        onMutate(userId: string) {
            const value: User[] | undefined = queryClient.getQueryData(["users", "followRecommends"]);
            if (value) {
                const index = value.findIndex((v) => v.id === userId);
                console.log(value, userId, index);
                const shallow = [...value];
                shallow[index] = {
                    ...shallow[index],
                    Followers: shallow[index].Followers.filter((v) => v.id !== session?.user?.email),
                    _count: {
                        ...shallow[index]._count,
                        Followers: shallow[index]._count?.Followers - 1,
                    },
                };
                queryClient.setQueryData(["users", "followRecommends"], shallow);
                const value2: User | undefined = queryClient.getQueryData(["users", userId]);
                if (value2) {
                    const shallow = {
                        ...value2,
                        Followers: value2.Followers.filter((v) => v.id !== session?.user?.email),
                        _count: {
                            ...value2._count,
                            Followers: value2._count?.Followers - 1,
                        },
                    };
                    queryClient.setQueryData(["users", userId], shallow);
                }
            }
        },
        onError(error, userId: string) {
            const value: User[] | undefined = queryClient.getQueryData(["users", "followRecommends"]);
            if (value) {
                const index = value.findIndex((v) => v.id === userId);
                console.log(value, userId, index);
                const shallow = [...value];
                shallow[index] = {
                    ...shallow[index],
                    Followers: [{ id: session?.user?.email as string }],
                    _count: {
                        ...shallow[index]._count,
                        Followers: shallow[index]._count?.Followers + 1,
                    },
                };
                queryClient.setQueryData(["users", "followRecommends"], shallow);
            }
            const value2: User | undefined = queryClient.getQueryData(["users", userId]);
            if (value2) {
                const shallow = {
                    ...value2,
                    Followers: [{ id: session?.user?.email as string }],
                    _count: {
                        ...value2._count,
                        Followers: value2._count?.Followers + 1,
                    },
                };
                queryClient.setQueryData(["users", userId], shallow);
            }
        },
    });
    const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("follow", followed, user.id);
        if (followed) {
            unfollow.mutate(user.id);
        } else {
            follow.mutate(user.id);
        }
    };

    return (
        <Link href={`/${user.id}`} className="h-[66px] py-3 flex">
            <div>
                <div className="w-[40px] mr-3">
                    <img src={user.image} alt={user.id} className="w-10 h-10 rounded-full" />
                </div>
            </div>
            <div className="flex-1">
                <div className="text-base font-bold leading-5">{user.nickname}</div>
                <div className="text-sm text-gray-500 leading-4">@{user.id}</div>
            </div>
            <div className="w-[76px]">
                <button
                    className="border-none w-full text-white bg-black text-sm font-bold h-8 rounded-lg"
                    onClick={onFollow}
                >
                    {followed ? "팔로잉" : "팔로우"}
                </button>
            </div>
        </Link>
    );
}

export default FollowRecommend;
