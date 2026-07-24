"use client";

import Link from "next/link";
import ProjectCard from "./ProjectsCard";

const projects = [
  {
    title: "PulseLink",
    description:
      "PulseLink is a full-stack blood donation platform that connects donors with people who need them most — built end-to-end with the MERN stack and Next.js, from authentication and role-based dashboards to real-time donation request tracking and JWT-secured APIs.",
    image: "/projects/pulselink.png",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/emon-101/pulselink-client",
    live: "https://pulselink-client.vercel.app/",
  },
  {
    title: "IdeaVault",
    description:
      "IdeaVault is an open platform built for founders, builders, and dreamers — a place where startup ideas don't die in notebooks, but instead get shared, challenged, and refined by a community that cares.",
    image: "/projects/ideavault.png",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/emon-101/ideavault",
    live: "https://ideavault-fcaq.vercel.app/",
  },
  {
    title: "Skill Sphere",
    description:
      "Modern online learning platform with authentication, course system, and responsive UI.",
    image: "/projects/skill-sphere.png",
    tech: ["Next.js", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/emon-101/skill-sphere",
    live: "https://skill-sphere-eh.vercel.app/",
  }
];

const Projects = () => {
  return (
    // ✅ ADDED: overflow-x-hidden on section to guard against any animation bleed
    <section className="py-24 px-4 sm:px-6 md:px-10 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">

        {/* 🎯 Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>

        {/* 📦 Cards */}
        <div className="space-y-10 sm:space-y-12">
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