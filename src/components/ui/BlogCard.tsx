'use client';

import Image from "next/image";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
    post: BlogPost;
    height: string;
}

export default function BlogCard({ post, height }: BlogCardProps) {
    return (
        <article
            className={`group relative overflow-hidden rounded-3xl ${height} cursor-pointer`}
        >
            <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 transition-all duration-700 group-hover:bg-black/40" />

            <div className="absolute bottom-4 left-4 right-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-white text-2xl font-bold line-clamp-2">
                    {post.title}
                </h3>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003F6B] to-transparent translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0">
                <h3 className="text-white font-semibold text-lg line-clamp-2">
                    {post.title}
                </h3>
            </div>
        </article>
    );
}