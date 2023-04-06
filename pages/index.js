import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Hamburger from "@/components/Hamburger";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div className={styles.container}>
            <Hamburger/>
            <Hero/>
            <About/>
            <Projects/>
        </div>
    );
}
