import Image from "next/image";
import React from "react";

export default function BlogItem({ author, blogHead, blogBody, image, date }) {
    return (
        <div className="border-gray-100 border-[0.05rem] rounded-md p-5 m-5 flex flex-col justify-start items-start hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.3)] duration-150">
            <div className="flex flex-row justify-between items-center w-full">
                <div>
                    By <span className="font-bold">{author}</span>
                </div>
                <div className="text-sm font-extralight text-gray-500 pb-5">
                    {date}
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full gap-5">
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="font-extrabold text-xl">{blogHead}</div>
                    <div className="font-extralight text-gray-500">
                        {blogBody}
                    </div>
                </div>
                <div className="relative w-80 h-30 pb-[20%]">
                    <Image
                        src={image}
                        alt="Image in the blog section banner"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
            </div>
        </div>
    );
}
