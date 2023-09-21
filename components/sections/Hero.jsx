import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

function Hero() {
    return (
        // This is the parent container
        <section className="h-full">
            <div className="flex flex-col justify-between items-start mobile:mt-0 tablet:mt-0 laptop:mt-[2rem] desktop:mt-[2rem] mobile:mx-auto tablet:mx-auto laptop:mx-[50px] desktop:mx-[50px]">
                {/* This is the container inside the parent, which includes text on the left and photo */}
                <div className="flex flex-row justify-center items-center mobile:block tablet:block laptop:flex desktop:flex">
                    {/* This div is the container encapsulating text on the left side */}
                    <div className="flex flex-col mobile:justify-center tablet:justify-center laptop:justify-start desktop:justify-start mobile:h-[100vh] tablet:h-[100vh] laptop:h-auto desktop:h-auto mobile:items-center tablet:items-center laptop:items-start desktop:items-start mobile:w-[100vw] tablet:w-[100vw] laptop:w-[50vw] desktop:w-[50vw]">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                type: "spring",
                            }}
                            className="flex flex-row justify-center items-center text-[2.5rem] font-extrabold"
                        >
                            Hello World!
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                type: "spring",
                            }}
                            className="flex flex-row justify-center items-center text-[#EBB700] text-[1.5rem] font-extrabold"
                        >
                            My Name is
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                type: "spring",
                            }}
                            className="flex flex-row justify-center items-center text-[#EBB700] text-[3rem] font-extrabold text-center"
                        >
                            Armaan Singh Jaj
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.4,
                                type: "spring",
                            }}
                            className="flex flex-row justify-center items-center text-[2rem] font-extrabold text-center"
                        >
                            I&apos;m a Full Stack Developer
                        </motion.div>

                        {/* Div containing 'Get in touch' button and socials */}
                        <div className="flex justify-start pt-[1.5rem] mobile:flex-col mobile:gap-5 mobile:items-center tablet:flex-col tablet:gap-5 tablet:items-start laptop:flex-row laptop:gap-0 laptop:items-center desktop:flex-row desktop:gap-0 desktop:items-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
                                    type: "spring",
                                }}
                                className="flex flex-row justify-center items-center w-full px-[1rem] py-[0.50rem] bg-[#EBB700] rounded-[8px] font-bold hover:cursor-pointer"
                            >
                                <Link href={"mailto:armaan.jaj@gmail.com"}>
                                    Contact me
                                </Link>
                            </motion.div>

                            {/* Divider */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.6,
                                    type: "spring",
                                }}
                                className="w-[2px] h-[50px] bg-white mx-[3rem] mobile:hidden tablet:hidden laptop:block desktop:block"
                            ></motion.div>

                            {/* Links */}
                            <div className="flex flex-row justify-evenly items-center mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] gap-5">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.7,
                                        type: "spring",
                                    }}
                                    className="flex flex-row justify-center items-center mobile:w-[3rem] mobile:h-[3rem] tablet:w-[3rem] tablet:h-[3rem] laptop:w-[2.5rem] laptop:h-[2.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] rounded-[17px] bg-white"
                                >
                                    <Link
                                        href={
                                            "https://linkedin.com/in/connectarmaan"
                                        }
                                        target={"_blank"}
                                        // className="text-[#0a66c2]"
                                        className="text-[#350078]"
                                    >
                                        <LinkedInIcon className="scale-[150%]" />
                                    </Link>
                                </motion.div>

                                {/* <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.9,
                                    type: "spring",
                                }}
                                className="flex flex-row justify-center items-center mobile:w-[3rem] mobile:h-[3rem] tablet:w-[3rem] tablet:h-[3rem] laptop:w-[2.5rem] laptop:h-[2.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] rounded-[17px] bg-white"
                            >
                                <Link
                                    href={"https://twitter.com/iamArmaan__"}
                                    target={"_blank"}
                                    // className="text-[#0a66c2]"
                                    className="text-[#350078]"
                                >
                                    <TwitterIcon className="scale-[150%]" />
                                </Link>
                            </motion.div> */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 1,
                                        type: "spring",
                                    }}
                                    className="flex flex-row justify-center items-center mobile:w-[3rem] mobile:h-[3rem] tablet:w-[3rem] tablet:h-[3rem] laptop:w-[2.5rem] laptop:h-[2.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] rounded-[17px] bg-white"
                                >
                                    <Link
                                        href={
                                            "https://instagram.com/armaan_jaj"
                                        }
                                        target={"_blank"}
                                        className="text-[#350078]"
                                    >
                                        <InstagramIcon className="scale-[150%]" />
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 1.2,
                                        type: "spring",
                                    }}
                                    className="flex flex-row justify-center items-center mobile:w-[3rem] mobile:h-[3rem] tablet:w-[3rem] tablet:h-[3rem] laptop:w-[2.5rem] laptop:h-[2.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] rounded-[17px] bg-white"
                                >
                                    <Link
                                        className="text-[#350078]"
                                        target={"_blank"}
                                        href={"https://github.com/armaanjaj"}
                                    >
                                        <GitHubIcon className="scale-[150%]" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>

                        {/* 'Download Resume' */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 1.4,
                                type: "spring",
                            }}
                            className="flex flex-row justify-start items-center mt-[3rem]"
                        >
                            <Link
                                className="px-[0.75rem] py-[0.50rem] border-[1px] border-solid border-[#350078] font-bold rounded-[8px] hover:cursor-pointer animate-glow"
                                target={"_blank"}
                                href={"/Resume - Armaan Jaj.pdf"}
                                // download={"/Resume.pdf"}
                            >
                                Download Resume
                            </Link>
                        </motion.div>
                    </div>

                    {/* This div is the container encapsulating image on the right side */}
                    <div className="flex flex-col justify-center items-center w-[50vw]  mobile:hidden tablet:hidden laptop:block desktop:block">
                        {/* <Image
                        src="/Hero-filler.png"
                        alt="Image in the hero section"
                        width={500}
                        height={600}
                        priority
                        className="w-[100%]"
                    /> */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -50,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.2,
                                type: "spring",
                            }}
                            className="w-0 h-0 right-0 top-0 absolute border-solid border-t-[384px] border-t-[#350078] border-r-[384px] border-r-transparent border-l-[384px] border-l-transparent border-b-[384px] border-b-transparent"
                        ></motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.8,
                        type: "spring",
                    }}
                    className="w-[100%] flex-row justify-center items-center mt-[3rem] mobile:hidden tablet:hidden laptop:flex desktop:flex"
                >
                    <a href="#aboutme">Scroll Down</a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
