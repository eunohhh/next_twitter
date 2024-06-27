"use client";
function LogOutButton() {
    const me = {
        // 임시로 내 정보 있는것처럼
        id: "zerohch0",
        nickname: "제로초",
        image: "/5Udwvqim.jpg",
    };

    const onLogout = () => {};

    return (
        <button
            className="w-[258px] h-[66px] p-3 flex my-3 cursor-pointer border-none items-center bg-white text-left hover:bg-gray-100 bg-opacity-10 rounded-xl"
            onClick={onLogout}
        >
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img src={me.image} alt={me.id} />
            </div>
            <div className="mx-3">
                <div className="text-base font-bold">{me.nickname}</div>
                <div className="text-xs text-gray-500">@{me.id}</div>
            </div>
        </button>
    );
}

export default LogOutButton;
