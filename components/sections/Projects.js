import React from "react";
import ProjectCard from "../ProjectCard";

function Projects() {
    return (
        <div>
            <div className="flex flex-row justify-between items-center mt-[7rem] text-[44px] font-bold w-[100%]">
                <div className="inline">Projects I've worked on</div>
                <div className="h-[2px] w-[55%] inline-block bg-[#350078]"></div>
            </div>
            <div className="flex flex-row justify-start items-center flex-wrap gap-5 mt-[5rem]">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
            </div>
        </div>
    );
}

export default Projects;
