import React from "react";
import SkillCard from "../SkillCard";

function Skills() {
    return (
        <div>
            <div className="flex flex-row justify-between items-center mt-[7rem] text-[44px] font-bold w-[100%]">
                <div className="inline">My Powers</div>
                <div className="h-[2px] w-[78%] inline-block bg-[#350078]"></div>
            </div>
            <div className="flex flex-col justify-center items-start mt-[5rem] gap-6">
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
            </div>
        </div>
    );
}

export default Skills;
