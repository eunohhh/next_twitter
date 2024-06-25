import Image from "next/image";
import Link from "next/link";

function BeforeLoginPage() {
    return (
        <>
            <div className="flex-1 flex justify-center items-center">
                <Image
                    className="w-auto h-auto"
                    src="/liquid.webp"
                    alt="main-logo"
                    width={200}
                    height={200}
                    priority={true}
                />
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-6xl my-12 text-bold">지금 일어나고 있는 일</h1>
                <h2 className="text-3xl mb-8 text-bold">지금 가입하세요</h2>
                <Link href={"/i/flow/signup"}>
                    <button className="rounded-full bg-blue-500 text-white px-4 py-2">
                        계정 만들기
                    </button>
                </Link>
                <h3 className="text-base mb-5 mt-10">이미 트위터에 가입 하셨나요?</h3>
                <Link href={"/login"}>
                    <button className="rounded-full border border-gray-300 bg-white text-black px-7 py-2">
                        로그인
                    </button>
                </Link>
            </div>
        </>
    );
}

export default BeforeLoginPage;
