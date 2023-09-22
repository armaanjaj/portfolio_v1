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
        <div className="border-gray-100 border-[0.05rem] rounded-sm p-5 m-5 flex flex-col justify-start items-start hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.3)] duration-150">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-start items-center gap-5">
                    <div className="text-sm">
                        By <span className="font-bold">{author}</span>
                    </div>
                    <div className="rounded-full w-fit bg-slate-600 text-white py-1 smallMobile:px-0 mobile:px-2 tablet:px-2 laptop:px-3 desktop:px-4 largeDesktop:px-5 text-sm italic">
                        {topic}
                    </div>
                </div>
                <div className="smallMobile:text-xs mobile:text-xs tablet:text-xs laptop:text-sm desktop:text-sm largeDesktop:text-sm font-extralight text-gray-500 pb-5">
                    {date}
                </div>
            </div>
            <Link
                href={"/idea/" + topic + link}
                className="flex flex-row justify-between items-center w-full gap-5"
            >
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="font-extrabold smallMobile:text-xs mobile:text-sm tablet:text-base laptop:text-lg desktop:text-xl largeDesktop:text-xl">{blogHead}</div>
                    <div
                        className={`font-extralight smallMobile:text-xs mobile:text-xs tablet:text-sm laptop:text-base desktop:text-base largeDesktop:text-lg ${
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
                        className="rounded-sm"
                    />
                </div>
            </Link>
        </div>
    );
}
