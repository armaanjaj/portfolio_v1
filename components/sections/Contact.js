import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div id="getintouch">
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
                        delay: 0.4,
                    }}
                    className="h-[2px] w-[30%] inline-block bg-[#350078]"
                ></motion.div>
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
                    Get in touch
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
                    className="h-[2px] w-[30%] inline-block bg-[#350078]"
                ></motion.div>
            </div>
            <div className="flex flex-col justify-center items-center mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem] gap-10">
                <div className="mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] text-[1.5rem]">
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
                        I would like to listen from you. I am open to new
                        opportunities or for any project collaboration. Ping me
                        if you have any question or if you just want to say hi,
                        I’ll try to my best to get back to you.
                    </motion.p>
                </div>
                <div className="flex flex-col justify-center items-start rounded-[5px] flex-wrap relative bg-[#110036] w-full p-5 mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[1rem] desktop:text-[1rem]">
                    <div className="w-full">
                        <div className="flex flex-row justify-start items-center flex-wrap">
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
                                className="flex flex-col justify-center items-start relative my-2 w-full"
                            >
                                <label
                                    htmlFor="name"
                                    className="uppercase mobile:text-[0.9rem] tablet:text-[1.5rem] laptop:text-[1rem] desktop:text-[1rem]"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full rounded-[5px] text-black focus:border-none p-3"
                                    onChange={(e) => setName(e.target.value)}
                                />
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
                                className="flex flex-col justify-center items-start relative my-2 w-full"
                            >
                                <label
                                    htmlFor="email"
                                    className="uppercase mobile:text-[0.9rem] tablet:text-[1.5rem] laptop:text-[1rem] desktop:text-[1rem]"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full rounded-[5px] text-black focus:border-none p-3"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </motion.div>
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
                                delay: 0.9,
                            }}
                            className="flex flex-col justify-center items-start relative my-2"
                        >
                            <label
                                htmlFor="message"
                                className="uppercase mobile:text-[0.9rem] tablet:text-[1.5rem] laptop:text-[1rem] desktop:text-[1rem]"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                cols={10}
                                rows={10}
                                className="w-full rounded-[5px] text-black focus:border-none p-3"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
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
                            className="flex flex-col justify-center items-center relative my-2"
                        >
                            <input
                                className="px-[0.75rem] py-[0.50rem] w-[30%] bg-[#EBB700] rounded-[8px] font-bold hover:cursor-pointer my-2 text-center"
                                type="submit"
                                value="Send"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
