import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogItem({
    author,
    topic,
    link,
    blogHead,
    blogBody,
    image,
    date,
    text,
}) {
    return (
        <div className="border-gray-100 border-[0.05rem] rounded-md p-5 m-5 flex flex-col justify-start items-start hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.3)] duration-150">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-start items-center gap-5">
                    <div>
                        By <span className="font-bold">{author}</span>
                    </div>
                    <div className="rounded-full w-fit bg-slate-600 text-white py-1 px-5">
                        {topic}
                    </div>
                </div>
                <div className="text-sm font-extralight text-gray-500 pb-5">
                    {date}
                </div>
            </div>
            <Link
                href={"/" + topic + link}
                className="flex flex-row justify-between items-center w-full gap-5"
            >
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="font-extrabold text-xl">{blogHead}</div>
                    <div
                        className={`font-extralight ${
                            text === "#ffffff"
                                ? "text-gray-300"
                                : "text-gray-500"
                        }`}
                    >
                        {blogBody}
                    </div>
                </div>
                <div className="relative w-80 h-fit pb-[20%]">
                    <Image
                        src={image}
                        alt="Image in the blog section banner"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
            </Link>
        </div>
    );
}
