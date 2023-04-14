import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <div id="aboutme">
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
                        delay: 0.8,
                    }}
                    className="inline"
                >
                    About me
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
                        delay: 0.9,
                    }}
                    className="h-[2px] mobile:w-[60%] tablet:w-[80%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#350078]"
                ></motion.div>
            </div>
            <div className="flex justify-between items-start mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem] mobile:flex-col tablet:flex-col laptop:flex-row desktop:flex-row">
                <div className="mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] mobile:text-[1.5rem] tablet:text-[1rem] laptop:text-[1.3rem] desktop:text-[1.3rem]">
                    <motion.p
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
                    >
                        As a recent graduate with a strong foundation in a
                        variety of programming languages and frameworks, I
                        <span className="text-[#EBB700]"> specialize</span> in
                        full stack development and have experience working with
                        languages such as{" "}
                        <span className="text-[#EBB700]">JavaScript</span>,{" "}
                        <span className="text-[#EBB700]">TypeScript</span>,
                        <span className="text-[#EBB700]">Java</span>,{" "}
                        <span className="text-[#EBB700]">Python</span>,{" "}
                        <span className="text-[#EBB700]">Kotlin</span>,{" "}
                        <span className="text-[#EBB700]">PL/SQL</span>,{" "}
                        <span className="text-[#EBB700]">PHP</span> and{" "}
                        <span className="text-[#EBB700]">Language &lsquo;C&rsquo;</span>.
                    </motion.p>
                    <motion.p
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
                    >
                        Additionally, I have expertise in JavaScript frameworks
                        such as <span className="text-[#EBB700]">React.js</span>{" "}
                        and <span className="text-[#EBB700]">Node.js</span>.
                    </motion.p>
                    <motion.p
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
                    >
                        In addition to{" "}
                        <span className="text-[#EBB700] font-bold">
                            full stack development
                        </span>
                        , I have a strong grasp of important concepts such as{" "}
                        <span className="text-[#EBB700]">
                            object-oriented programming
                        </span>
                        ,{" "}
                        <span className="text-[#EBB700]">
                            data structures and algorithms
                        </span>
                        , and{" "}
                        <span className="text-[#EBB700]">
                            user experience design
                        </span>
                        .
                    </motion.p>
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
                        delay: 0.1,
                    }}
                >
                    <Image
                        src="/About-me.jpg"
                        alt="Image in the about section"
                        width={400}
                        height={600}
                        priority
                        className="w-[50%] border-[2px] border-solid border-white rounded-[5px] mobile:hidden tablet:hidden laptop:block desktop:block"
                    />
                    <Image
                        src="/About-me-mobile.jpeg"
                        alt="Image in the about section"
                        width={400}
                        height={600}
                        priority
                        className="w-[100%] border-[2px] mt-5 border-solid border-white rounded-[5px] mobile:block tablet:block laptop:hidden desktop:hidden"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default About;
