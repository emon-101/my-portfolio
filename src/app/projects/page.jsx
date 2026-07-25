import ProjectCard from "@/components/main/ProjectsCard";

const allProjects = [
  {
    slug: "pulselink",
    title: "PulseLink",
    description:
      "PulseLink is a full-stack blood donation platform that connects donors with people who need them most — built end-to-end with the MERN stack and Next.js, from authentication and role-based dashboards to real-time donation request tracking and JWT-secured APIs.",
    image: "/projects/pulselink.png",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/emon-101/pulselink-client",
    live: "https://pulselink-client.vercel.app/",
    featured: true,
  },
  {
    slug: "ideavault",
    title: "IdeaVault",
    description:
      "IdeaVault is an open platform built for founders, builders, and dreamers — a place where startup ideas don't die in notebooks, but instead get shared, challenged, and refined by a community that cares, surfaced through a trending algorithm rather than raw chronological order.",
    image: "/projects/ideavault.png",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/emon-101/ideavault",
    live: "https://ideavault-fcaq.vercel.app/",
  },
  {
    slug: "skill-sphere",
    title: "Skill Sphere",
    description:
      "A modern online learning platform with authenticated course enrollment, structured lesson content, and a fully responsive interface — an earlier project that laid the groundwork for the auth and API patterns used in later builds.",
    image: "/projects/skill-sphere.png",
    tech: ["Next.js", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/emon-101/skill-sphere",
    live: "https://skill-sphere-eh.vercel.app/",
  },
  {
    slug: "digitools",
    title: "DigiTools",
    description:
      "A curated collection of everyday developer utilities — unit converters, formatters, and quick-reference tools — brought together in one fast, clean interface so common tasks don't need ten different browser tabs.",
    image: "/projects/digitools.png",
    tech: ["React", "Tailwind", "Netlify"],
    github: "https://github.com/emon-101/DigiTools",
    live: "https://digitools-eh.netlify.app/",
  },
  {
    slug: "keen-keeper",
    title: "Keen Keeper",
    description:
      "A task management app focused on staying out of the user's way — real-time task updates, a distraction-free layout, and authentication to keep each user's task list private.",
    image: "/projects/keenkeeper.png",
    tech: ["Next.js", "MongoDB", "Auth"],
    github: "https://github.com/emon-101/keen-keeper",
    live: "https://keen-keeper-eh.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-10 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">All projects</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mb-16">
          Every project I&#39;ve shipped, from full-stack platforms to smaller
          focused tools — each one taught me something the last one didn&#39;t.
        </p>

        <div className="space-y-10 sm:space-y-12">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;