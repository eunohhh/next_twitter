"use client";

import { Session } from "@auth/core/types";
import { useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

type Props = {
    me: Session | null;
};

function LogOutButton({ me }: Props) {
    const queryClient = useQueryClient();

    const onLogout = () => {
        queryClient.invalidateQueries({
            queryKey: ["posts"],
        });
        queryClient.invalidateQueries({
            queryKey: ["users"],
        });
        signOut({ callbackUrl: "/" });
    };

    if (!me?.user) {
        return null;
    }
    return (
        <button
            className="w-[258px] h-[66px] p-3 flex my-3 cursor-pointer border-none items-center bg-white text-left hover:bg-gray-100 bg-opacity-10 rounded-xl"
            onClick={onLogout}
        >
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img src={me.user?.image as string} alt={me.user?.email as string} />
            </div>
            <div className="mx-3">
                <div className="text-base font-bold">{me.user?.name}</div>
                <div className="text-xs text-gray-500">@{me.user?.email}</div>
            </div>
        </button>
    );
}

export default LogOutButton;
