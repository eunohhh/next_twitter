"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MainPage from "../_components/main";

export default function Login() {
    const router = useRouter();
    const { data: session } = useSession();

    if (session?.user) {
        router.replace("/home");
        return null;
    }

    router.replace("/i/flow/login");
    return <MainPage />;
}
