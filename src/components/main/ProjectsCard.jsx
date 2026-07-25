"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 items-stretch
        bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-shadow"
    >
      {/* Image */}
      <div
        className={`relative w-full h-56 sm:h-64 md:h-full min-h-70
          ${isReverse ? "md:order-2" : "md:order-1"}`}
      >
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-blue-500/90 text-white font-medium shadow-lg">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-center gap-4 items-start text-left
          ${isReverse ? "md:order-1 md:text-right md:items-end" : "md:order-2"}`}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech */}
        <div className={`flex flex-wrap gap-2 ${isReverse ? "md:justify-end" : ""}`}>
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Primary CTA — View details */}
        <Link
          href={`/projects/${project.slug}`}
          className="group inline-flex items-center gap-2 mt-1 px-5 py-2.5 rounded-lg
            bg-linear-to-r from-blue-500 to-purple-500 text-sm font-semibold text-white
            hover:opacity-90 transition-opacity"
        >
          View details
          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
        </Link>

        {/* Secondary links — GitHub / Live */}
        <div className={`flex gap-6 text-sm ${isReverse ? "md:justify-end" : ""}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;