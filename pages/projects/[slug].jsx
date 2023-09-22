import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/index.module.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import Link from "next/link";
import Meta from "@/components/Meta";
import HomeOutlinedIcon from "@mui/icons-material/HomeRounded";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import useAxios from "@/hooks/useAxios";
import LoaderFS from "@/components/Loaders/Loader-FS";
import Idea from "@/components/Logo/Idea";

function SlugPage() {
    const router = useRouter();
    const [projectDetails, setProjectDetails] = useState([]);
    const [slug, setSlug] = useState("");
    const [loading, setLoading] = useState(false);

    const projectData = useAxios({
        method: "get",
        url: `/api/getProject?slug=${slug}`,
        headers: JSON.stringify({ accept: "*/*" }),
    });

    useEffect(() => {
        if (!router.isReady) return;

        setLoading(true);
        setSlug(router.query.slug);

        if (projectData.response !== null) {
            setProjectDetails(projectData.response);
            setLoading(false);
        }
    }, [router.isReady, router.query, projectData]);

    return (
        <>
            <Meta
                title={
                    projectDetails?.title
                        ? projectDetails.title + " | Projects"
                        : "Projects"
                }
                seoTitle={
                    projectDetails?.title
                        ? projectDetails.title + " | Projects"
                        : "Projects"
                }
                description="Check out all web or mobile application projects on armaancodes.com."
                seoDescription="Check out all web or mobile application projects on armaancodes.com."
                seoURL={
                    "https://www.armaancodes.com/projects" +
                    `/${projectDetails.title}`
                }
            />
            <div className="bg-[#08001A] min-h-screen pt-10">
                <div className={styles.container}>
                    <div className="flex flex-col justify-center items-start gap-10">
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="text-[3rem] font-semibold">
                                    {projectDetails?.title}
                                </div>
                                {(projectDetails.links?.hosted ?? false) && (
                                    <Link
                                        target="_blank"
                                        href={projectDetails.links.hosted}
                                    >
                                        <LinkIcon />
                                    </Link>
                                )}
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="mobile:hidden tablet:hidden laptop:block desktop:block">
                                    <Link href={"/"}>
                                        <HomeOutlinedIcon className="text-[2rem]" />
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className="flex flex-row justify-center items-center flex-nowrap border-solid border-[1px] border-[#350078] rounded-[8px] mobile:text-[0.85rem] tablet:text-[1rem] laptop:text-[1rem] desktop:text-[1rem] mobile:py-1 mobile:px-4 tablet:py-3 tablet:px-10 laptop:py-3 laptop:px-10 desktop:py-3 desktop:px-10"
                                        href={"/projects"}
                                    >
                                        {" "}
                                        <span>All</span>
                                        <span>&nbsp;Projects</span>
                                    </Link>
                                </div>
                            </div>
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
                                className="h-[2px] mobile:w-[70%] tablet:w-[70%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#350078]"
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
                            {projectDetails?.overview}{" "}
                            <Link
                                target="_blank"
                                className="underline"
                                href={projectDetails?.links?.readmore || "#"}
                            >
                                <OpenInNewIcon /> <span>Read more</span>
                            </Link>
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
                        <div className="flex flex-row items-start gap-5 flex-wrap mobile:justify-start tablet:justify-start laptop:justify-center desktop:justify-center">
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
                                <div className="text-[1rem] font-semibold">
                                    Type
                                </div>
                                <div>{projectDetails?.type}</div>
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
                                <div className="text-[1rem] font-semibold">
                                    Timeline
                                </div>
                                <div>
                                    <div className="flex flex-row justify-evenly items-center gap-1">
                                        <div>Start date: </div>
                                        <div>
                                            {projectDetails.timeline?.startDate}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-evenly items-center gap-1">
                                        <div>End date: </div>
                                        <div>
                                            {projectDetails.timeline?.endDate
                                                ? projectDetails.timeline
                                                      .endDate
                                                : "Present"}
                                        </div>
                                    </div>
                                </div>
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
                                <div className="text-[1rem] font-semibold">
                                    Associated
                                </div>
                                <div className="flex flex-row justify-evenly items-center">
                                    {projectDetails.associated?.name}
                                </div>
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
                                <div className="text-[1rem] font-semibold">
                                    Links
                                </div>
                                <div className="flex flex-row justify-evenly items-center flex-wrap gap-5">
                                    {projectDetails.links?.github && (
                                        <Link
                                            target="_blank"
                                            href={projectDetails.links.github}
                                        >
                                            <GitHubIcon />
                                        </Link>
                                    )}
                                    {(projectDetails.links?.hosted ??
                                        false) && (
                                        <Link
                                            target="_blank"
                                            href={projectDetails.links.hosted}
                                        >
                                            <LinkIcon />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {projectDetails.images && (
                            <>
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
                                            delay: 0.5,
                                        }}
                                        className="inline"
                                    >
                                        Gallery
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
                                        className="h-[2px] mobile:w-[70%] tablet:w-[70%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#350078]"
                                    ></motion.div>
                                </div>
                                <div className="flex flex-row justify-start items-center flex-wrap gap-5">
                                    {projectDetails.images?.map((image, i) => (
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
                                            key={i}
                                        >
                                            <Image
                                                src={image.path}
                                                alt={image.alt}
                                                width={400}
                                                height={600}
                                                priority
                                                className="w-[100%] border-[2px] mt-5 border-solid border-[#350078] rounded-[5px] p-3"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="w-full h-full flex flex-row justify-center items-center pb-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold">Read all my latest blogs at</div>
                        <Link href={"/idea"}>
                            <Idea />
                        </Link>
                    </div>
                </div>
            </div>

            {loading && <LoaderFS />}
        </>
    );
}

export default SlugPage;
