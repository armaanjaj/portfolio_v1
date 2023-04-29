import styles from "@/styles/index.module.css";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Meta from "@/components/Meta";
import useAxios from "@/hooks/useAxios";

// UNCOMMENT IF READING FILES LOCALLY
// import allProjects from "../data/projectData/index.json";
// import allSkills from "../data/skillData/index.json";

export default function Home({ projects, skills }) {

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

export async function getServerSideProps() {
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
    const [projects, skills] = await Promise.all([projectData, skillData]);
    return {
        props: {
            projects: projects.response,
            skills: skills.response
        }
    };
}