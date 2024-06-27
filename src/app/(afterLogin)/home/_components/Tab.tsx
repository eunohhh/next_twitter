"use client";
import { useState } from "react";

const homeTabDiv = "flex-1 flex justify-center items-center cursor-pointer text-base relative";
const tabIndicator =
    "h-[4px] self-center bg-sky-600 min-w-[56px] w-[56px] absolute bottom-0 rounded-full";

export default function Tab() {
    const [tab, setTab] = useState("rec");

    const onClickRec = () => {
        setTab("rec");
    };
    const onClickFol = () => {
        setTab("fol");
    };

    return (
        <div className="fixed z-10 w-[598px] backdrop-blur-md bg-white bg-opacity-85 border-slate-400 border-b-2 border-solid">
            <div className="text-xl leading-6 font-bold py-3 px-4">홈</div>
            <div className="h-[53px] flex">
                <div className={homeTabDiv} onClick={onClickRec}>
                    추천
                    <div className={tabIndicator} hidden={tab === "fol"}></div>
                </div>
                <div className={homeTabDiv} onClick={onClickFol}>
                    팔로우 중<div className={tabIndicator} hidden={tab === "rec"}></div>
                </div>
            </div>
        </div>
    );
}
