import Hero from "@/components/homepage/Hero";
import Contacts from "@/components/main/Contacts";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}
