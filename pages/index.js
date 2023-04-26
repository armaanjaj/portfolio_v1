import styles from "@/styles/index.module.css";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";
import useAxios from "@/hooks/useAxios";

// UNCOMMENT IF READING FILES LOCALLY
// import allProjects from "../data/projectData/index.json";
// import allSkills from "../data/skillData/index.json";

export default function Home() {

    // STATES
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    // -------------- CODE TO GET DATA OVER API ----------------- START
    
    const projectData = useAxios({
        method: 'get',
        url: '/api/getProjects',
        headers: JSON.stringify({ accept: '*/*' }),
    });
    const skillData = useAxios({
        method: 'get',
        url: '/api/getSkills',
        headers: JSON.stringify({ accept: '*/*' }),
    });
    
    
    useEffect(() => {
        if (projectData.response !== null) setProjects(projectData.response);
        if(projectData.error) console.log(projectData.error)
        if (skillData.response !== null) setSkills(skillData.response);
        if(skillData.error) console.log(skillData.error)
    }, [projectData, skillData]);

    // ----------------------------------------------------------- END


    // -------------- CODE TO READ FILES LOCALLY ----------------- START

    // useEffect(() => {
    //     getAllProjects();
    //     getAllSkills();
    // }, []);
    
    // const getAllProjects = () => {
    //     setProjects(allProjects.map((project) => project));
    // };
    // const getAllSkills = () => {
    //     setSkills(allSkills.sort((a, b) => a.index - b.index).map((skill) => skill));
    // };

    // ----------------------------------------------------------- END

    return (
        <main>
            <Meta />
            <Navigation />
            <Hero />
            <div className={styles.container}>
                <About />
                <Projects projects={projects} />
                <Skills skills={skills} />
                <Contact />
            </div>
        </main>
    );
}
