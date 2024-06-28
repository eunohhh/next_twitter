import BackButton from "@/app/(afterLogin)/_components/BackButton";
import Post from "@/app/(afterLogin)/_components/Post";

export default function ProfilePage() {
    const user = {
        id: "zerohch0",
        nickname: "제로초",
        image: "/5Udwvqim.jpg",
    };

    return (
        <main className="w-[600px] border-white border-r-2 border-l-2 flex flex-col items-stretch">
            <div className="flex h-[53px] items-center">
                <BackButton />
                <h3 className="text-xl font-bold ml-[20px]">{user.nickname}</h3>
            </div>
            <div className="flex items-center border-b border-white py-3 px-4">
                <div className="flex items-center mr-[12px] rounded-full">
                    <img src={user.image} alt={user.id} />
                </div>
                <div className="mx-3 flex-1">
                    <div className="font-bold text-xl">{user.nickname}</div>
                    <div className="text-base">@{user.id}</div>
                </div>
                <button className="border-slate-300 border-2 bg-black text-white rounded-md py-4 h-[34px] flex justify-center items-center text-base hover:bg-slate-300">
                    팔로우
                </button>
            </div>
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </main>
    );
}
