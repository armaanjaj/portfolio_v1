import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard() {
    return (
        <div className="rounded-[5px] bg-[#110036] w-[20rem] h-[16rem] p-[30px]">
            <div className="text-[25px] font-bold">WeDD.ca</div>
            <div className="py-5">
                Lead and developed a taxi booking service for we-dd.ca as the
                deliverable for capstone academic project.
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="text-[12px] text-[#a4a4a4]">React.js Node.js MySQL</div>
                <div>
                    <GitHubIcon />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
