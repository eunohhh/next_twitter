import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MainPage from "./_components/main";

async function BeforeLoginPage() {
    const session = await auth();
    if (session?.user) {
        redirect("/home");
        return null;
    }
    return <MainPage />;
}

export default BeforeLoginPage;
