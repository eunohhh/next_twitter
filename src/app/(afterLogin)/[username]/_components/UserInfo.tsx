"use client";

import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import { User } from "@/model/User";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../../_components/BackButton";

type Props = {
    username: string;
};
export default function UserInfo({ username }: Props) {
    const { data: user, error } = useQuery<User, Object, User, [_1: string, _2: string]>({
        queryKey: ["users", username],
        queryFn: getUser,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    });
    // console.log("error");
    // console.dir(error);
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
    return (
        <>
            <div className="flex h-[53px] items-center">
                <BackButton />
                <h3 className="text-xl font-bold ml-[20px]">{user.nickname}</h3>
            </div>
            <div className="flex items-center border-b border-white py-3 px-4">
                <div className="flex items-center mr-[12px] rounded-full">
                    <img className="w-[134px] rounded-full" src={user.image} alt={user.id} />
                </div>
                <div className="mx-3 flex-1">
                    <div className="font-bold text-xl">{user.nickname}</div>
                    <div className="text-base">@{user.id}</div>
                </div>
                <button className="border-slate-300 border-2 bg-black text-white rounded-md py-4 h-[34px] flex justify-center items-center text-base hover:bg-slate-300">
                    팔로우
                </button>
            </div>
        </>
    );
}
