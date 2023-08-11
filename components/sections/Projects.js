import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import Link from "next/link";

function Projects({ projects }) {

    // for the sake of fratured projects, only show 3 of them
    const visibleProjects = projects.slice(0, 3);

    return (
        <section id="projects">
            <div className="flex flex-col justify-center items-center gap-10">
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
                        {/* Projects I&apos;ve worked on */}
                        Featured projects
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
                        className="h-[2px] mobile:w-[25%] tablet:w-[30%] laptop:w-[50%] desktop:w-[50%] inline-block bg-[#350078]"
                    ></motion.div>
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap gap-4 mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem]">
                    {visibleProjects?.map((project, i) => (
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
                                delay: i / 10,
                            }}
                            key={i}
                        >
                            <ProjectCard
                                title={project.title}
                                slug={project.repo_name}
                                stack={project.stack}
                                overview={project.overview}
                                links={project.links}
                                key={i}
                            />
                        </motion.div>
                    ))}
                </div>
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
                        delay: 0.6,
                    }}
                >
                    <Link
                        className="flex flex-row justify-center items-center border-solid border-[1px] border-[#350078] py-3 px-10 rounded-[8px]"
                        href={"/projects"}
                    >
                        {" "}
                        See all{" "}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
