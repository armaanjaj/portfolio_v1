import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";
import allProjects from "../data/projectData/index.json";
import allSkills from "../data/skillData/index.json"

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getAllProjects();
        getAllSkills();
    }, []);

    const getAllProjects = () => {
        setProjects(allProjects.map((project) => project));
    };

    const getAllSkills = () => {
        setSkills(allSkills.map((skill) => skill));
    };

    return (
        <>
            <Meta />
            <Navigation />
            <Hero />
            <div className={styles.container}>
                <About />
                <Projects projects={projects} />
                <Skills skills={skills} />
                <Contact />
            </div>
        </>
    );
}
