import { PostImage } from "@/model/PostImage";
import { User } from "next-auth";

export interface Post {
    postId: number;
    User: User;
    content: string;
    createdAt: Date;
    Images: PostImage[];
}
