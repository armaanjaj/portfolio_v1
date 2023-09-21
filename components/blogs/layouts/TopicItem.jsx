import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";

export default function TopicItem({ selected, topic, onDeselect }) {
    return (
        <div
            className={`flex flex-row justify-between items-center pr-5 text-sm rounded-full w-fit ${
                selected
                    ? "bg-slate-600 text-white hover:bg-slate-700"
                    : "bg-slate-100 text-black hover:bg-slate-300"
            } duration-150 cursor-pointer`}
        >
            <Link href={"?topic=" + topic} className="py-3 px-5">{topic}</Link>
            <div onClick={onDeselect}>
                {selected && <CloseRoundedIcon className="scale-75 ml-2" />}
            </div>
        </div>
    );
}
