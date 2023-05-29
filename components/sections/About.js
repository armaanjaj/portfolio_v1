import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <section id="aboutme">
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
                <div className="mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] text-[1rem]">
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
                            delay: 0.6,
                        }}
                    >
                        Greetings! I am Armaan, and I am passionate about
                        creating things. My love for creation began at an early
                        age, where I would often be found sketching and drawing.
                        Though I haven&apos;t had much time for sketching in the past
                        two years due to my studies in software development, I
                        have found that my passion for design has transformed
                        into a digital form.{" "}
                    </motion.p>
                    <br />
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
                            delay: 0.6,
                        }}
                    >
                        My interest in web development began when I discovered
                        my love for designing websites and creating intuitive
                        user experiences. Since then, I have been developing
                        modern and clean websites using frameworks such as{" "}
                        <span className="text-[#EBB700] font-bold">Next.js</span>,{" "}
                        <span className="text-[#EBB700] font-bold">React.js</span> and{" "}
                        <span className="text-[#EBB700] font-bold">Node.js</span>. I am
                        also well-versed in{" "}
                        <span className="text-[#EBB700] font-bold">
                            object-oriented programming
                        </span>
                        ,{" "}
                        <span className="text-[#EBB700] font-bold">
                            data structures and alogrithms
                        </span>
                        , and continuously strive to improve my knowledge in the
                        field of{" "}
                        <span className="text-[#EBB700] font-bold">
                            user experience design
                        </span>
                        .
                    </motion.p>
                    <br />
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
                            delay: 0.7,
                        }}
                    >
                        As a recent graduate, I specialize in full stack
                        development, with expertise in languages such as{" "}
                        <span className="text-[#EBB700] font-bold">JavaScript</span>,{" "}
                        <span className="text-[#EBB700] font-bold">TypeScript</span>,{" "}
                        <span className="text-[#EBB700] font-bold">Java</span>,{" "}
                        <span className="text-[#EBB700] font-bold">Python</span>,{" "}
                        <span className="text-[#EBB700] font-bold">Kotlin</span>,{" "}
                        <span className="text-[#EBB700] font-bold">PL/SQL</span>,{" "}
                        <span className="text-[#EBB700] font-bold">PHP</span>, and{" "}
                        <span className="text-[#EBB700] font-bold">Language &lsquo;C.&rsquo;</span> I
                        have a strong foundation in creating websites and focus
                        on providing the best user experience through intuitive
                        design.{" "}
                    </motion.p>
                    <br />
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
                            delay: 0.7,
                        }}
                    >
                        Thank you for taking the time to get to know me a little
                        better. If you have any questions or are interested in
                        working together, please don&apos;t hesitate to reach out.
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
                        delay: 0.8,
                    }}
                >
                    {/* <Image
                        src="/About-me.jpg"
                        alt="Image in the about section"
                        width={400}
                        height={600}
                        priority
                        className="w-[50%] border-[2px] border-solid border-white rounded-[5px] mobile:hidden tablet:hidden laptop:block desktop:block"
                    /> */}
                    <Image
                        src="/About-me-mobile.jpeg"
                        alt="Image in the about section"
                        width={400}
                        height={600}
                        priority
                        className="w-[100%] border-[2px] mt-5 border-solid border-white rounded-[5px]"
                        // className="w-[100%] border-[2px] mt-5 border-solid border-white rounded-[5px] mobile:block tablet:block laptop:hidden desktop:hidden"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default About;
