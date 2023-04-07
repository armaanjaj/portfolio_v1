import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/sections/Hero";
import Hamburger from "@/components/Hamburger";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <div className={styles.container}>
            <Hamburger/>
            <Hero/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    );
}
