import Hero from "@/components/homepage/Hero";
import AboutMe from "@/components/main/AboutMe";
import Contacts from "@/components/main/Contacts";
import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="about">
        <AboutMe />
      </section>
      <Education />
      <Skills />
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contacts />
      </section>
    </div>
  );
}
