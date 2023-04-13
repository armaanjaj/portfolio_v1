import React from "react";
import SkillCardBlock from "./SkillCardBlock";

function SkillCard({ title, skills }) {
    return (
        <div className="flex flex-col justify-center items-start gap-3 rounded-[5px] bg-[#110036] w-[100%] h-[10rem] p-[20px]">
            <div className="text-[25px] font-bold">{title}</div>
            <div className="flex flex-row justify-start items-center gap-5 flex-wrap">
                {skills?.map((skill, i) => (
                    <SkillCardBlock icon={skill.icon} name={skill.name} />
                ))}
            </div>
        </div>
    );
}

export default SkillCard;
