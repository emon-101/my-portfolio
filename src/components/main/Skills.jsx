"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const skills = [
  { name: "HTML", src: "/skills/html5.svg" },
  { name: "CSS", src: "/skills/css.svg" },
  { name: "Tailwind", src: "/skills/tailwindcss.svg" },
  { name: "JavaScript", src: "/skills/js.svg" },
  { name: "ES6", src: "/skills/es6.svg" },
  { name: "GitHub", src: "/skills/github.svg" },
  { name: "React", src: "/skills/react.svg" },
  { name: "Next.js", src: "/skills/next.svg" },
  { name: "Hero UI", src: "/skills/hero.svg" },
  { name: "MongoDB", src: "/skills/mongo.svg" },
  { name: "Better Auth", src: "/skills/auth.svg" },
  { name: "JWT", src: "/skills/jwt.svg" },
  { name: "Netlify", src: "/skills/netlify.svg" },
  { name: "Vercel", src: "/skills/vercel.svg" },
  { name: "Render", src: "/skills/render.svg" },
];

const SkillCard = ({ skill }) => (
  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-3 rounded-xl mx-3 min-w-fit hover:scale-105 transition">
    <Image src={skill.src} alt={skill.name} width={24} height={24} />
    <span className="text-sm text-white/90">{skill.name}</span>
  </div>
);

const Skills = () => {
  return (
      <section className="py-24 text-white relative overflow-hidden">
        {/* 🌌 Background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black via-[#020617] to-black" />

        <div className="w-full">
          {/* 🎯 Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            My <span className="text-blue-400">Skills</span>
          </h2>

          {/* 🔥 Row 1 */}
          <Marquee speed={50} gradient={false}>
            {skills.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </Marquee>

          {/* 🔥 Row 2 (Reverse) */}
          <Marquee
            speed={50}
            direction="right"
            gradient={false}
            className="my-6"
          >
            {skills.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </Marquee>
          {/* 🔥 Row 3 */}
          <Marquee speed={50} gradient={false}>
            {skills.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </Marquee>
        </div>
      </section>
  );
};

export default Skills;
