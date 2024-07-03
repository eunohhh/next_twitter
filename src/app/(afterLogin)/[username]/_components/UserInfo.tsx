"use client";

import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import style from "@/app/(afterLogin)/[username]/profile.module.css";
import { User } from "@/model/User";
import { Session } from "@auth/core/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MouseEventHandler } from "react";
import BackButton from "../../_components/BackButton";

type Props = {
    username: string;
    session: Session | null;
};

export default function UserInfo({ username, session }: Props) {
    const { data: user, error } = useQuery<User, Object, User, [_1: string, _2: string]>({
        queryKey: ["users", username],
        queryFn: getUser,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    });
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
                if (index > -1) {
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
            }
            const value2: User | undefined = queryClient.getQueryData(["users", userId]);
            if (value2) {
                const shallow: User = {
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
            console.error(error);
            const value: User[] | undefined = queryClient.getQueryData(["users", "followRecommends"]);
            if (value) {
                const index = value.findIndex((v) => v.id === userId);
                console.log(value, userId, index);
                if (index > -1) {
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
                }
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
                if (index > -1) {
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
                }
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
            console.error(error);
            const value: User[] | undefined = queryClient.getQueryData(["users", "followRecommends"]);
            if (value) {
                const index = value.findIndex((v) => v.id === userId);
                console.log(value, userId, index);
                if (index > -1) {
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
            }
            const value2: User | undefined = queryClient.getQueryData(["users", userId]);
            if (value2) {
                const shallow = {
                    ...value2,
                    Followers: [{ userId: session?.user?.email as string }],
                    _count: {
                        ...value2._count,
                        Followers: value2._count?.Followers + 1,
                    },
                };
                queryClient.setQueryData(["users", userId], shallow);
            }
        },
    });

    console.log("error");
    console.dir(error);
    if (error) {
        return (
            <>
                <div className="flex h-[53px] items-center">
                    <BackButton />
                    <h3 className="text-xl font-bold ml-[20px]">프로필</h3>
                </div>
                <div className="flex items-center border border-b-2 py-3 px-4">
                    <div className="flex items-center mr-3 rounded-3xl w-[134px] h-[134px] border border-slate-200"></div>
                    <div className="mx-3 flex-1">
                        <div>@{username}</div>
                    </div>
                </div>
                <div
                    style={{
                        height: 100,
                        alignItems: "center",
                        fontSize: 31,
                        fontWeight: "bold",
                        justifyContent: "center",
                        display: "flex",
                    }}
                >
                    계정이 존재하지 않음
                </div>
            </>
        );
    }
    if (!user) {
        return null;
    }

    const followed = user.Followers?.find((v) => v.id === session?.user?.email);
    console.log(session?.user?.email, followed);

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
        <>
            <div className="flex h-[53px] items-center">
                <BackButton />
                <h3 className="text-xl font-bold ml-[20px]">{user.nickname}</h3>
            </div>
            <div className="flex items-center border-b border-white py-3 px-4">
                <div className={style.userRow}>
                    <div className="flex items-center mr-[12px] rounded-full">
                        <img className="w-[134px] rounded-full" src={user.image} alt={user.id} />
                    </div>
                    <div className="mx-3 flex-1">
                        <div className="font-bold text-xl">{user.nickname}</div>
                        <div className="text-base">@{user.id}</div>
                    </div>

                    {user.id !== session?.user?.email && (
                        <button
                            className="border-slate-300 border-2 bg-black text-white rounded-md py-4 h-[34px] flex justify-center items-center text-base hover:bg-slate-300"
                            onClick={onFollow}
                        >
                            {followed ? "팔로잉" : "팔로우"}
                        </button>
                    )}
                </div>

                <div className={style.userFollower}>
                    <div>{user._count.Followers} 팔로워</div>
                    &nbsp;
                    <div>{user._count.Followings} 팔로우 중</div>
                </div>
            </div>
        </>
    );
}
