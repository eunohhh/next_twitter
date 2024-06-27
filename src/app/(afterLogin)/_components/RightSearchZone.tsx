"use client";

import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";

function RightSearchZone() {
    const pathname = usePathname();
    const onChangeFollow = () => {};
    const onChangeAll = () => {};
    if (pathname === "/explore") {
        return null;
    }
    if (pathname === "/search") {
        return (
            <div>
                <h5 className="bg-white py-3 px-4 text-black font-bold mb-4 mt-3 rounded-md border-white border">
                    검색 필터
                </h5>
                <div className="pr-4 pb-3 mb-4 rounded-md border-white border">
                    <div>
                        <label className="text-base font-bold h-9 flex items-center">사용자</label>
                        <div className="flex">
                            <div className="flex-1">모든 사용자</div>
                            <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
                        </div>
                        <div className="flex">
                            <div className="flex-1">내가 팔로우하는 사람들</div>
                            <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div style={{ marginBottom: 60, width: "inherit" }}>
            <SearchForm />
        </div>
    );
}

export default RightSearchZone;
