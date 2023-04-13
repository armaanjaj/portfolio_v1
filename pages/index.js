import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <div className={styles.container}>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </>
    );
}
