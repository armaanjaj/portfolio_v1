import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";

function Hero() {
    const sayhi = () => {
        alert("Hi");
    };
    return (
        <div className="flex flex-col justify-between items-start mt-[2rem]">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <div className="text-[42px] font-bold">Hello World!</div>
                    <div className="text-[#EBB700] text-[21px] font-bold">
                        My Name is
                    </div>
                    <div className="text-[#EBB700] text-[44px] font-bold">
                        Armaan Singh Jaj
                    </div>
                    <div className="text-[41px] font-bold">
                        I'm a Full Stack Developer
                    </div>
                    <div className="flex flex-row justify-start items-center pt-[1.5rem]">
                        <input
                            className="px-[0.75rem] py-[0.50rem] bg-[#EBB700] rounded-[8px] font-bold hover:cursor-pointer"
                            type="button"
                            value="Get in touch"
                            onClick={sayhi}
                        />
                        <div className="w-[2px] h-[50px] bg-white mx-[3rem]"></div>
                        <div className="flex flex-row justify-between items-center w-[30%]">
                            <div className="flex flex-row justify-center items-center w-[3.5rem] h-[3.5rem] rounded-[17px] bg-white">
                                <Link
                                    href={
                                        "https://linkedin.com/in/connectarmaan"
                                    }
                                    target={"_blank"}
                                    className="text-[#0a66c2]"
                                >
                                    <LinkedInIcon className="scale-[200%]" />
                                </Link>
                            </div>
                            <div className="flex flex-row justify-center items-center w-[3.5rem] h-[3.5rem] rounded-[17px] bg-white">
                                <Link
                                    className="text-black"
                                    target={"_blank"}
                                    href={"https://github.com/armaanjaj"}
                                >
                                    <GitHubIcon className="scale-[200%]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center mt-[3rem]">
                        <input
                            className="px-[0.75rem] py-[0.50rem] border-[1px] border-solid border-[#350078] font-bold rounded-[8px] hover:cursor-pointer"
                            type="button"
                            value="Get Resume"
                            onClick={sayhi}
                        />
                    </div>
                </div>
                <div className="border-[2px] border-solid border-white w-[30rem] h-[20rem] rounded-[5px] overflow-hidden ml-[10rem]">
                    <Image
                        src="/Hero.jpeg"
                        alt="Image in the hero section"
                        width={500}
                        height={600}
                        priority
                        className="scale-[150%] w-[100%] h-[100%]"
                    />
                </div>
            </div>
            <div className="w-[100%] flex flex-row justify-center items-center bottom-0 mt-[3rem]">Scroll Down</div>
        </div>
    );
}

export default Hero;
