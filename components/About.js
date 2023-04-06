import Image from "next/image";
import React from "react";

function About() {
    return (
        <div id="aboutSection">
            <div className="flex flex-row justify-between items-center mt-[7rem] text-[44px] font-bold w-[100%]">
                <div className="inline">About me</div>
                <div className="h-[2px] w-[80%] inline-block bg-[#350078]"></div>
            </div>
            <div className="flex flex-row justify-between items-start">
                <div className="w-[50%] text-[20px]">
                    <p>
                        As a recent graduate with a strong foundation in a
                        variety of programming languages and frameworks, I
                        <span className="text-[#EBB700]"> specialize</span> in full stack development and have experience
                        working with languages such as <span className="text-[#EBB700]">JavaScript</span>, <span className="text-[#EBB700]">TypeScript</span>,
                        <span className="text-[#EBB700]">Java</span>, <span className="text-[#EBB700]">Python</span>, <span className="text-[#EBB700]">Kotlin</span>, <span className="text-[#EBB700]">PL/SQL</span>, <span className="text-[#EBB700]">PHP</span> and <span className="text-[#EBB700]">Language 'C'</span>.
                    </p>
                    <p>
                        Additionally, I have expertise in JavaScript frameworks
                        such as <span className="text-[#EBB700]">React.js</span> and <span className="text-[#EBB700]">Node.js</span>.
                    </p>
                    <p>
                        In addition to <span className="text-[#EBB700] font-bold">full stack development</span>, I have a strong
                        grasp of important concepts such as <span className="text-[#EBB700]">object-oriented
                        programming</span>, <span className="text-[#EBB700]">data structures and algorithms</span>, and <span className="text-[#EBB700]">user
                        experience design</span>.
                    </p>
                </div>
                <div>
                    <Image
                        src="/About-me.jpg"
                        alt="Image in the about section"
                        width={400}
                        height={600}
                        priority
                        className="w-[50%] border-[2px] border-solid border-white rounded-[5px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
