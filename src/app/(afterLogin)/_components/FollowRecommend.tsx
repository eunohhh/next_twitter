"use client";

import { User } from "@/model/User";

function FollowRecommend({ user }: { user: User }) {
    const onFollow = () => {};

    return (
        <div className="h-[66px] py-3 flex">
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
                    팔로우
                </button>
            </div>
        </div>
    );
}

export default FollowRecommend;
