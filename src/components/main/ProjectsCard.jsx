"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}         // ✅ FIXED: was x: ±80 — caused horizontal scroll on mobile
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 items-stretch
        bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-shadow"
    >
      {/* 🖼 Image */}
      <div
        className={`relative w-full h-56 sm:h-64 md:h-full min-h-[280px]
          ${isReverse ? "md:order-2" : "md:order-1"}`}
          // ✅ FIXED: h-55/h-65 are invalid Tailwind classes → use h-56, h-64
          // ✅ FIXED: min-h-[280px] ensures image has height on md when in grid
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

        {/* ✅ FIXED: was bg-linear-to-t — invalid, correct is bg-gradient-to-t */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* 📄 Content */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-center gap-4 items-start text-left
          ${isReverse ? "md:order-1 md:text-right md:items-end" : "md:order-2"}`}
          // ✅ FIXED: base is always left/start (mobile), md: applies reverse alignment only on desktop
      >
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* 🏷 Tech */}
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

        {/* 🔗 Links */}
        <div className={`flex gap-6 text-sm md:text-base ${isReverse ? "md:justify-end" : ""}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;