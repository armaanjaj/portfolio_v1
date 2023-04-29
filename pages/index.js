import styles from "@/styles/index.module.css";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Meta from "@/components/Meta";
import axios from "axios";

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
  try {
    const [projectRes, skillRes] = await Promise.all([
      axios.get("https://your-api.com/projects"),
      axios.get("https://your-api.com/skills"),
    ]);

    const projects = projectRes.data;
    const skills = skillRes.data;

    return {
      props: {
        projects,
        skills,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        projects: [],
        skills: [],
      },
    };
  }
}