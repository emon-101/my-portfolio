"use client";

import Link from "next/link";
import ProjectCard from "./ProjectsCard";


const projects = [
  {
    title: "Skill Sphere",
    description:
      "Modern online learning platform with authentication, course system, and responsive UI.",
    image: "/projects/skill-sphere.png",
    tech: ["Next.js", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/emon-101/skill-sphere",
    live: "https://skill-sphere-eh.vercel.app/",
  },
  {
    title: "DigiTools",
    description:
      "Collection of useful developer tools with clean UI and optimized performance.",
    image: "/projects/digitools.png",
    tech: ["React", "Tailwind", "Netlify"],
    github: "https://github.com/emon-101/DigiTools",
    live: "https://digitools-eh.netlify.app/",
  },
  {
    title: "Keen Keeper",
    description:
      "Task management app with real-time updates and clean user experience.",
    image: "/projects/keenkeeper.png",
    tech: ["Next.js", "MongoDB", "Auth"],
    github: "https://github.com/emon-101/keen-keeper",
    live: "https://keen-keeper-eh.vercel.app/",
  },
];

const Projects = () => {
  return (
     <section className="py-24 px-4 sm:px-6 md:px-10 text-white">

      <div className="max-w-6xl mx-auto">

        {/* 🎯 Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>

        {/* 📦 Cards */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* 🔗 View More */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;
