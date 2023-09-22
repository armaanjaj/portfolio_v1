import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import styles from "@/styles/index.module.css";
import Link from "next/link";

function Hamburger() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    if (typeof window !== "undefined") {
        window.onscroll = () => {
            if (scrollY < window.innerHeight) setIsMenuOpen(false);
        };
    }

    const menuVariants = {
        open: {
            height: "100vh",
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
                mass: 0.8,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        closed: {
            height: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 40,
                mass: 0.8,
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    };

    const menuItemVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: -20, opacity: 0 },
    };

    return (
        <>
            <motion.div
                className={`flex flex-col justify-start items-start absolute w-full top-0 left-0 z-50 overflow-hidden bg-[#08001ae0] backdrop-blur-lg ${
                    isMenuOpen ? "h-screen" : "h-0"
                }`}
                variants={menuVariants}
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
            >
                <div className={styles.container}>
                    <div className="text-[#8f33ff] smallMobile:mt-[60px] mobile:mt-[60px] tablet:mt-[60px] laptop:mt-0 desktop:mt-0 largeDesktop:mt-0 hover:cursor-pointer w-fit h-fit" onClick={toggleMenu}>
                        <CloseIcon className="scale-[150%]" />
                    </div>
                </div>
                <div className={styles.container}>
                    <motion.div className={`flex flex-col justify-start items-start w-screen smallMobile:h-full mobile:h-full tablet:h-full laptop:h-[90%] desktop:h-[90%] largeDesktop:h-[100%] gap-3 ${isMenuOpen ? "flex-wrap" : "flex-nowrap"}`}>
                        <motion.div
                            className="text-center"
                            variants={menuItemVariants}
                        >
                            <Link
                                className="text-[3rem] font-bold"
                                href="#aboutme"
                            >
                                About me
                            </Link>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            variants={menuItemVariants}
                        >
                            <Link
                                className="text-[3rem] font-bold"
                                href="/projects"
                            >
                                Projects
                            </Link>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            variants={menuItemVariants}
                        >
                            <Link
                                className="text-[3rem] font-bold"
                                href="#skills"
                            >
                                Skills
                            </Link>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            variants={menuItemVariants}
                        >
                            <Link
                                className="text-[3rem] font-bold"
                                href="/idea"
                            >
                                Blogs
                            </Link>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            variants={menuItemVariants}
                        >
                            <Link
                                className="text-[3rem] font-bold"
                                href="#getintouch"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0.2,
                    y: -40,
                    color: "#350078",
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    color: "#8f33ff",
                }}
                transition={{
                    duration: 2,
                    delay: 0,
                    type: "spring",
                }}
            >
                <DehazeIcon
                    onClick={toggleMenu}
                    className={`mobile:scale-[200%] tablet:scale-[200%] laptop:scale-[150%] desktop:scale-[150%] rotate-90 mobile:absolute tablet:absolute laptop:static desktop:static mt-[60px] mobile:mx-[20px] tablet:mx-[40px] laptop:mx-[50px] desktop:mx-[50px] hover:cursor-pointer ${
                        isMenuOpen ? "hidden" : ""
                    }`}
                />
            </motion.div>
        </>
    );
}

export default Hamburger;
