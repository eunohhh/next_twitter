import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";
import ActionButtons from "@/app/(afterLogin)/_components/ActionButtons";
import Post from "@/app/(afterLogin)/_components/Post";
import { faker } from "@faker-js/faker";
import PhotoModalCloseButton from "./_components/PhotoModalCloseButton";

export default function Default() {
    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
            content: faker.lorem.text(),
        },
    };
    return (
        <div className="bg-black/90 fixed z-10 left-0 top-0 w-dvw h-dvh flex flex-row">
            <PhotoModalCloseButton />
            <div className="flex-1 flex flex-col">
                <img className="hidden" src={photo.link} alt={photo.Post?.content} />
                <div
                    className="bg-contain bg-no-repeat bg-center flex-1"
                    style={{ backgroundImage: `url(${photo.link})` }}
                />
                <div className="flex flex-row justify-center items-center">
                    <div className="w-[600px] h-[60px]">
                        <ActionButtons white />
                    </div>
                </div>
            </div>
            <div className="w-[350px] bg-white border-l border-gray-200 overflow-auto">
                <Post noImage />
                <CommentForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
