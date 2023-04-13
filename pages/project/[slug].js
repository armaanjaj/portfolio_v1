import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/index.module.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function slug() {
    const router = useRouter();

    const [projectDetails, setProjectDetails] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;

        const { slug } = router.query;
        getProjectDetails(slug);
    }, [router.isReady]);

    const getProjectDetails = (slug) => {
        fetch(`/api/getProject?slug=${slug}`, {
            credentials: "same-origin",
            mode: "cors",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((projects) => projects.json())
            .then((projects) => {
                if (projects) setProjectDetails(projects);
            });
    };

    return (
        <div className={styles.container}>
            <div className="flex flex-col justify-center items-start gap-5">
                <div className="text-[3rem] font-semibold">
                    {projectDetails.title}
                </div>
                <div className="flex flex-row justify-between items-center mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[2rem] desktop:text-[2rem] font-bold w-[100%]">
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
                        className="inline"
                    >
                        Overview
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
                            delay: 0.5,
                        }}
                        className="h-[2px] mobile:w-[60%] tablet:w-[60%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#350078]"
                    ></motion.div>
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
                        delay: 0.2,
                    }}
                >
                    {projectDetails.overview}
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
                        delay: 0.6,
                    }}
                    className="h-[2px] w-full inline-block bg-[#350078]"
                ></motion.div>
                <div className="flex flex-row justify-center items-start gap-5">
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
                            delay: 0.3,
                        }}
                        className="flex flex-col justify-center items-start gap-5 rounded-[5px] border-solid border-[2px] border-[#350078] p-4"
                    >
                        <div className="text-[1rem] font-semibold">
                            Technologies
                        </div>
                        {projectDetails.stack?.map((item, i) => (
                            <div
                                className="flex flex-row justify-center items-center gap-2"
                                key={i}
                            >
                                <CircleOutlinedIcon />
                                {item}
                            </div>
                        ))}
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
                            delay: 0.3,
                        }}
                        className="flex flex-col justify-center items-center gap-5 rounded-[5px] border-solid border-[2px] border-[#350078] p-4"
                    >
                        <div className="text-[1rem] font-semibold">Type</div>
                        <div>{projectDetails.type}</div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default slug;
