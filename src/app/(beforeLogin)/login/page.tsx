"use client";

import { useRouter } from "next/navigation";

function Login() {
    const router = useRouter();
    router.replace("i/flow/login");
}

export default Login;
