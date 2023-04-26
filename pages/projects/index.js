import React, { useEffect, useState } from "react";
import styles from "@/styles/index.module.css";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import allProjects from "@/data/projectData/index.json";
import HomeOutlinedIcon from "@mui/icons-material/HomeRounded";
import Link from "next/link";
import Meta from "@/components/Meta";
import useAxios from "@/hooks/useAxios";

function Home() {
    const [projects, setProjects] = useState([]);

    const projectData = useAxios({
        method: 'get',
        url: '/api/getProjects',
        headers: JSON.stringify({ accept: '*/*' }),
    });

    useEffect(() => {
        if (projectData.response !== null) setProjects(projectData.response);
        setTitle();
    }, [projectData]);

    const setTitle = () =>{
        document.title = "Projects | armaancodes.com"
    }
    
    // ----------------- IF READING PROJECTS FROM FILE --------------------------
    
    // const getAllProjects = () => {
    //     setProjects(allProjects.map((project) => project));
    // };
    
    // ----------------- IF READING PROJECTS FROM FILE --------------------------
    

    return (
        <>
        <Meta
         title={"Projects | armaancodes.com"}
         seoTitle={"Projects | armaancodes.com"}
         seoURL={"https://www.armaancodes.com/projects"}
        />
        <div className="mt-[60px]">
            <div className={styles.container}>
                <div className="flex flex-row justify-between items-center gap-10">
                    <div className="text-[3rem] font-semibold">Projects</div>
                    <div>
                        <Link href={"/"}>
                            <HomeOutlinedIcon className="text-[2rem]" />
                        </Link>
                    </div>
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
                                delay: i / 11,
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
                <div className="flex flex-row justify-center items-center mt-8">
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
                            className="flex flex-row justify-center items-center border-solid border-[1px] border-[#350078] py-3 px-10 rounded-[8px] font-bold w-fit"
                            href={"/"}
                        >
                            {" "}
                            Return to home{" "}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
