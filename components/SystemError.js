import Link from "next/link";
import React from "react";

export default function SystemError() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 h-screen font-bold">
            <h1 className="text-2xl">Oops! Looks like some problem on out end.</h1>
            <p className="text-xl">Please try again later.</p>
            <Link
                className="flex flex-row justify-center items-center border-solid border-[1px] border-[#350078] py-3 px-10 rounded-[8px]"
                href={"/"}
            >
                {" "}
                Return home{" "}
            </Link>
        </div>
    );
}
