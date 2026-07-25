"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const timeline = [
  {
    year: "2023",
    title: "Started web development",
    desc: "Began learning HTML, CSS, and JavaScript fundamentals.",
  },
  {
    year: "2024",
    title: "Frontend development",
    desc: "Focused on React, building multiple responsive, animated interfaces.",
  },
  {
    year: "2025",
    title: "Full-stack development",
    desc: "Built PulseLink (blood donation platform) and IdeaVault (startup idea-sharing platform) with Next.js, MongoDB, and TypeScript.",
  },
  {
    year: "2026",
    title: "Shopigo — in progress",
    desc: "Building a multi-vendor e-commerce marketplace as a full-stack TypeScript portfolio project.",
    current: true,
  },
];

const quickFacts = [
  { label: "Based in", value: "Bangladesh" },
  { label: "Status", value: "CS student" },
  { label: "Focus", value: "MERN + Next.js" },
  { label: "Open to", value: "Internships & junior roles" },
];

const AboutMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={ref}
      className="py-24 px-6 md:px-10 text-white relative overflow-x-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-[#020617] to-black" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* Bio + Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto mb-10">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-gray-300"
          >
            <p>
              I&#39;m{" "}
              <span className="text-white font-semibold">Emon Hossain</span>,
              a full-stack developer specializing in the MERN stack and
              Next.js. I build production-ready, portfolio-grade applications
              with TypeScript, from database schema to deployed UI.
            </p>
            <p className="mt-4">
              Currently a Computer Science student, actively shipping
              full-stack projects and preparing for developer roles — with a
              focus on clean architecture, authentication, and real-world
              data modeling.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://github.com/emon-101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg transition"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/emon101/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40 text-blue-300 px-4 py-2 rounded-lg transition"
              >
                <FaFileDownload /> Resume
              </a>
            </div>
          </motion.div>

          {/* Quick facts panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-white/5 border border-white/15 rounded-2xl p-6 flex flex-col justify-center gap-4"
          >
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {fact.label}
                </p>
                <p className="text-sm text-white/90 font-medium mt-0.5">
                  {fact.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Center vertical line — desktop only */}
          <motion.div
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full origin-top bg-linear-to-b from-blue-500 to-purple-500"
          />

          {/* Left vertical line — mobile only */}
          <motion.div
            style={{ scaleY }}
            className="md:hidden absolute left-4 top-0 w-0.5 h-full origin-top bg-linear-to-b from-blue-500 to-purple-500"
          />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex items-center md:justify-center"
                >
                  {/* Dot: left line on mobile, center line on desktop */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />

                  {/* Card: full-width indented on mobile, alternating halves on desktop */}
                  <div
                    className={`
                      w-full pl-12
                      md:pl-0 md:w-1/2 md:px-10
                      ${
                        isLeft
                          ? "md:mr-auto md:text-right md:pr-10 md:pl-0"
                          : "md:ml-auto md:text-left md:pl-10 md:pr-0"
                      }
                    `}
                  >
                    <div
                      className={`bg-white/10 backdrop-blur-lg border rounded-xl p-6 hover:-translate-y-2 transition duration-300
                        ${
                          item.current
                            ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                            : "border-white/20"
                        }`}
                    >
                      {item.current && (
                        <span className="inline-block text-xs px-3 py-1 mb-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400">
                          In progress
                        </span>
                      )}
                      <h3 className="text-blue-400 font-bold text-sm md:text-base">
                        {item.year}
                      </h3>
                      <h4 className="text-base md:text-lg font-semibold mt-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 mt-2 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 flex justify-center gap-10 text-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">10+</h3>
            <p className="text-gray-400">Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400">1+</h3>
            <p className="text-gray-400">Years coding</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400">MERN</h3>
            <p className="text-gray-400">+ TypeScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;