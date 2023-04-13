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

export default function Home() {

    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        getAllProjects();
    },[])

    const getAllProjects = ()=>{
        fetch('/api/getProjects', {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(projects => projects.json())
        .then(projects => {
            if(projects) setProjects(projects)
        })
    }

    return (
        <>
            <Navigation />
            <Hero />
            <div className={styles.container}>
                <About />
                <Projects projects={projects}/>
                <Skills />
                <Contact />
            </div>
        </>
    );
}
