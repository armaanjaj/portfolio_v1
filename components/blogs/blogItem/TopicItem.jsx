import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function TopicItem({ selected, topic, onSelect, onDeselect }) {
    const handleClick = () => {
        if (selected) {
            onDeselect();
        } else {
            onSelect();
        }
    };

    return (
        <div className={`py-3 px-5 text-sm rounded-full w-fit ${selected ? 'bg-slate-600 text-white hover:bg-slate-700' : 'bg-slate-100 text-black hover:bg-slate-300'} duration-150 cursor-pointer`} onClick={handleClick}>
            {topic}
            {selected && <CloseRoundedIcon className="scale-75 ml-2" />}
        </div>
    );
}
