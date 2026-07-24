import ProjectCard from "@/components/main/ProjectsCard";

const allProjects = [
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

const ProjectsPage = () => {
    return (
        <section className="py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12">
          All Projects
        </h2>

        <div className="space-y-12">
          {allProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
    );
};

export default ProjectsPage;