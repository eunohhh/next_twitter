"use client";

import { useFormState, useFormStatus } from "react-dom";
import onSubmit from "../_lib/signup";
import BackButton from "./BackButton";

const inputDiv = "flex flex-col h-auto relative";
const inputLabel = "text-base font-bold";
const input = "w-full text-base py-1 border border-gray-300";

function showMessage(messasge: string | null | undefined) {
    if (messasge === "no_id") {
        return "아이디를 입력하세요.";
    }
    if (messasge === "no_name") {
        return "닉네임을 입력하세요.";
    }
    if (messasge === "no_password") {
        return "비밀번호를 입력하세요.";
    }
    if (messasge === "no_image") {
        return "이미지를 업로드하세요.";
    }
    if (messasge === "user_exists") {
        return "이미 사용 중인 아이디입니다.";
    }
    return "";
}

export default function SignupModal() {
    const [state, formAction] = useFormState(onSubmit, { message: null });
    const { pending } = useFormStatus();

    return (
        <>
            <div className="w-screen h-full flex justify-center absolute top-0 left-0 right-0 bottom-0 bg-black/[0.4]">
                <div className="relative top-[5%] max-w-[80vw] min-w-[600px] rounded-md flex flex-col h-[550px] bg-white">
                    <div className="pt-9 pr-20 pb-5 font-bold text-3xl">
                        <BackButton />
                        <div className="text-center text-3xl font-bold">계정을 생성하세요.</div>
                    </div>
                    <form className="flex flex-col box-border p-4" action={formAction}>
                        <div className="flex-1 py-20">
                            <div className={inputDiv}>
                                <label className={inputLabel} htmlFor="id">
                                    아이디
                                </label>
                                <input
                                    id="id"
                                    name="id"
                                    className={input}
                                    type="text"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className={inputDiv}>
                                <label className={inputLabel} htmlFor="name">
                                    닉네임
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    className={input}
                                    type="text"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className={inputDiv}>
                                <label className={inputLabel} htmlFor="password">
                                    비밀번호
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    className={input}
                                    type="password"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className={inputDiv}>
                                <label className={inputLabel} htmlFor="image">
                                    프로필
                                </label>
                                <input
                                    id="image"
                                    name="image"
                                    className={input}
                                    type="file"
                                    accept="image/*"
                                    required
                                />
                            </div>
                        </div>
                        <div className="py-6 px-[80px]">
                            <button
                                className="w-full h-10 bg-blue-500 text-white rounded-full"
                                disabled={pending}
                            >
                                가입하기
                            </button>
                            <div className="font-bold text-red-500">
                                {showMessage(state?.message)}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
