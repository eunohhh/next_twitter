import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MainPage from "../_components/Main";
import RedirectToLogin from "./_components/RedirectToLogin";

export default async function Login() {
    const session = await auth();

    if (session?.user) {
        redirect("/home");
        return null;
    }

    return (
        <>
            <RedirectToLogin />
            <MainPage />
        </>
    );
}
