import Hero from "@/components/homepage/Hero";
import AboutMe from "@/components/main/AboutMe";
import Contacts from "@/components/main/Contacts";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}
