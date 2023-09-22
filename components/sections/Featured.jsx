import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Idea from "../Logo/Idea";
import Link from "next/link";

function Featured() {
    return (
        <section id="featured">
            <div className="smallMobile:px-3 mobile:px-8 tablet:px-12 laptop:px-16 desktop:px-20 largeDesktop:px-20 bg-white rounded-2xl text-black h-40 flex flex-row justify-between items-center gap-10 mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem]">
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
                    className="font-extrabold text-xl"
                >
                    <span className="smallMobile:hidden mobile:hidden tablet:flex laptop:flex desktop:flex largeDesktop:flex flex-row justify-start items-center gap-3 flex-wrap">
                        Checkout <Idea /> to read my latest blogs!
                    </span>
                    <span className="smallMobile:flex mobile:flex tablet:hidden laptop:hidden desktop:hidden largeDesktop:hidden">Read my latest blogs!</span>
                </motion.p>
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
                    className="pr-10"
                >
                    <Link href={"/idea"}>
                        <Idea className="smallMobile:scale-105 mobile:scale-105 tablet:scale-110 laptop:scale-150 desktop:scale-[190%] largeDesktop:scale-[200%]" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Featured;
