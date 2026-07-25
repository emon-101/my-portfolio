"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Core stack: the technologies you actually build production apps with.
// Each one carries a one-line proof of real usage — recruiters remember
// evidence, not logos.
const coreStack = [
  {
    name: "React",
    src: "/skills/react.svg",
    proof: "Responsive, animated UIs across every project shipped so far.",
  },
  {
    name: "Next.js",
    src: "/skills/next.svg",
    proof: "App router, server components, and API routes for full-stack apps.",
  },
  {
    name: "TypeScript",
    src: "/skills/typescript.svg",
    proof: "Migrating projects to typed, production-grade code.",
  },
  {
    name: "Node.js & Express",
    src: "/skills/node.svg",
    proof: "REST APIs with JWT auth, role-based access, and centralized error handling.",
  },
  {
    name: "MongoDB",
    src: "/skills/mongo.svg",
    proof: "Schema design, aggregation pipelines, and analytics queries.",
  },
  {
    name: "Auth & security",
    src: "/skills/auth.svg",
    proof: "Better Auth and JWT/JWKS-based verification across role-based dashboards.",
  },
];

// Secondary toolkit — grouped, compact, visually quieter than the core stack
// so the hierarchy (specialty vs. familiar-with) is immediately clear.
const secondaryGroups = [
  {
    label: "UI & styling",
    items: [
      { name: "Tailwind CSS", src: "/skills/tailwindcss.svg" },
      { name: "Hero UI", src: "/skills/hero.svg" },
      { name: "HTML5 / CSS3", src: "/skills/html5.svg" },
      { name: "Framer Motion", src: "/skills/framer.svg" },
    ],
  },
  {
    label: "Tooling & deployment",
    items: [
      { name: "GitHub", src: "/skills/github.svg" },
      { name: "Vercel", src: "/skills/vercel.svg" },
      { name: "Netlify", src: "/skills/netlify.svg" },
      { name: "Render", src: "/skills/render.svg" },
    ],
  },
];

const stats = [
  { value: "10+", label: "Projects" },
  { value: "1+", label: "Years learning" },
  { value: "MERN", label: "+ TypeScript" },
];

const CoreCard = ({ skill, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.06 }}
    className="group relative bg-white/6 backdrop-blur-lg border border-white/15 rounded-2xl p-6
      hover:border-blue-400/40 hover:bg-white/9 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
        <Image src={skill.src} alt="" width={22} height={22} />
      </div>
      <h4 className="font-semibold text-white/95">{skill.name}</h4>
    </div>
    <p className="text-sm text-gray-400 leading-relaxed">{skill.proof}</p>

    {/* Accent line — the one deliberate flourish, appears on hover */}
    <div className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-blue-400/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-10 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black via-[#020617] to-black" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-blue-400/80 font-semibold mb-3">
            What I bring to the table
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            A full-stack TypeScript developer building production-ready apps
            with the MERN stack and Next.js.
          </p>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-8 sm:gap-12 mb-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Core stack */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-white/80 mb-5 pl-1">
            Core stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreStack.map((skill, i) => (
              <CoreCard key={skill.name} skill={skill} i={i} />
            ))}
          </div>
        </div>

        {/* Secondary toolkit */}
        <div className="space-y-8">
          <h3 className="text-sm font-semibold text-white/80 pl-1">
            Also working with
          </h3>
          {secondaryGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
            >
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 pl-1">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-white/4 border border-white/10 px-3.5 py-2 rounded-lg
                      hover:border-white/25 transition text-sm text-gray-300"
                  >
                    <Image src={skill.src} alt="" width={16} height={16} className="opacity-80" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;