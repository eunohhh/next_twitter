"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MainPage from "../_components/main";

function Login() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/i/flow/login");
    }, [router]);
    return <MainPage />;
}

export default Login;
