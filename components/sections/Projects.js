import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

function Projects({ projects }) {
    return (
        <div id="projects">
            <div className="flex flex-row justify-between items-center mt-[7rem] mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[3rem] desktop:text-[3rem] font-bold w-[100%]">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1,
                    }}
                    className="inline"
                >
                    Projects I&apos;ve worked on
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                    }}
                    className="h-[2px] mobile:w-[60%] tablet:w-[60%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#350078]"
                ></motion.div>
            </div>
            <div className="flex flex-row justify-center items-center flex-wrap gap-5 mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem]">
                {projects?.map((project, i) => (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay:i/10
                        }}
                        key={i}
                    >
                        <ProjectCard
                            title={project.title}
                            slug={project.slug}
                            stack={project.stack}
                            overview={project.overview}
                            links={project.links}
                            key={i}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
