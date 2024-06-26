"use client";

import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

const inputDiv = "flex flex-col h-auto relative";
const inputLabel = "text-base font-bold";
const input = "w-full text-base py-1 border border-gray-300";

export default function SignupModal() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState<File>();

    const router = useRouter();
    const onClickClose = () => {
        router.back();
        // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
    };

    const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
        setId(e.target.value);
    };

    const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value);
    };
    const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNickname(e.target.value);
    };
    const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.target.files && setImageFile(e.target.files[0]);
    };

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:9090/api/users", {
            method: "post",
            body: JSON.stringify({
                id,
                nickname,
                image,
                password,
            }),
            credentials: "include",
        })
            .then((response: Response) => {
                console.log(response.status);
                if (response.status === 200) {
                    router.replace("/home");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <>
            <div className="w-screen h-full flex justify-center absolute top-0 left-0 right-0 bottom-0 bg-black/[0.4]">
                <div className="relative top-[5%] max-w-[80vw] min-w-[600px] rounded-md flex flex-col h-[550px] bg-white">
                    <div className="pt-9 pr-20 pb-5 font-bold text-3xl">
                        <button
                            className="w-[34px] h-[34px] rounded-md cursor-pointer border-none absolute bg-white left-4 right-4 flex justify-center items-center"
                            onClick={onClickClose}
                        >
                            <svg
                                width={24}
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
                            >
                                <g>
                                    <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                </g>
                            </svg>
                        </button>
                        <div className="text-center text-3xl font-bold">계정을 생성하세요.</div>
                    </div>
                    <form>
                        <div className="flex-1 py-20">
                            <div className={inputDiv}>
                                <label className={inputLabel} htmlFor="id">
                                    아이디
                                </label>
                                <input
                                    id="id"
                                    className={input}
                                    type="text"
                                    placeholder=""
                                    value={id}
                                    onChange={onChangeId}
                                />
                            </div>
                            <div className={inputDiv}>
                                <label className={inputLabel} htmlFor="name">
                                    닉네임
                                </label>
                                <input
                                    id="name"
                                    className={input}
                                    type="text"
                                    placeholder=""
                                    value={nickname}
                                    onChange={onChangeNickname}
                                />
                            </div>
                            <div className={inputDiv}>
                                <label className={inputLabel} htmlFor="password">
                                    비밀번호
                                </label>
                                <input
                                    id="password"
                                    className={input}
                                    type="password"
                                    placeholder=""
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </div>
                            <div className={inputDiv}>
                                <label className={inputLabel} htmlFor="image">
                                    프로필
                                </label>
                                <input
                                    id="image"
                                    className={input}
                                    type="file"
                                    accept="image/*"
                                    onChange={onChangeImageFile}
                                />
                            </div>
                        </div>
                        <div>
                            <button disabled>가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
