import React from "react";
import SkillCard from "../SkillCard";
import { motion } from "framer-motion";

function Skills({ skills }) {
    return (
        <section id="skills">
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
                    My Powers
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
                    className="h-[2px] mobile:w-[60%] tablet:w-[80%] laptop:w-[70%] desktop:w-[70%] inline-block bg-[#350078]"
                ></motion.div>
            </div>
            <div className="flex flex-col justify-center items-start mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem] gap-6">
                {skills?.map((skill, i) => (
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
                            duration: 0.5
                        }}
                        className="w-full"
                        key={i}
                    >
                        <SkillCard 
                        title={skill.title}
                        skills={skill.skills}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
