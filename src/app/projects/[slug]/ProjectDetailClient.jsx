"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";

const ProjectDetailClient = ({ project }) => {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-10 text-white relative overflow-x-hidden min-h-screen">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black via-[#020617] to-black" />

      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition mb-10"
        >
          <FaArrowLeft className="text-xs" /> Back to projects
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{project.title}</h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <FaExternalLinkAlt className="text-xs" /> View live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-sm font-semibold transition"
            >
              <FaGithub /> View code
            </a>
          </div>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full h-56 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/20 mt-10"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Role */}
        <p className="text-sm text-gray-500 mt-4">{project.role}</p>

        {/* Problem & Solution */}
        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/15 rounded-2xl p-6"
          >
            <h2 className="text-sm uppercase tracking-widest text-blue-400/80 font-semibold mb-3">
              The problem
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.problem}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="bg-white/5 border border-white/15 rounded-2xl p-6"
          >
            <h2 className="text-sm uppercase tracking-widest text-blue-400/80 font-semibold mb-3">
              The solution
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Key features */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaCheckCircle className="text-blue-400" /> Key features
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/6 border border-white/15 rounded-xl p-5"
              >
                <h3 className="font-semibold text-white/95 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architecture decisions */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaCogs className="text-blue-400" /> Architecture & technical decisions
          </h2>
          <ul className="space-y-4">
            {project.architecture.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-sm sm:text-base text-gray-300 leading-relaxed pl-4 border-l-2 border-blue-400/40"
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Challenges & learnings */}
        <div className="mt-16 mb-10">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaLightbulb className="text-blue-400" /> Challenges & what I&#39;d improve
          </h2>
          <ul className="space-y-4">
            {project.challenges.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-sm sm:text-base text-gray-300 leading-relaxed pl-4 border-l-2 border-purple-400/40"
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-white/10 pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition"
          >
            <FaArrowLeft className="text-xs" /> Back to all projects
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-sm font-semibold transition"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailClient;