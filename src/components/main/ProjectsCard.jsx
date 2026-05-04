"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid md:grid-cols-2 gap-6 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition"
    >

      {/* 📸 Image (FIXED SIZE) */}
      <div className="relative w-full h-55 sm:h-65 md:h-full overflow-hidden">
        <motion.div whileHover={{ scale: 1.08 }} className="w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* 🔥 Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
      </div>

      {/* 📄 Content */}
      <div className="p-5 md:p-8 flex flex-col justify-center">

        <h3 className="text-xl md:text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3 text-sm md:text-base line-clamp-3">
          {project.description}
        </p>

        {/* 🏷 Tech */}
        <div className="flex flex-wrap gap-2 mt-4">
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
        <div className="flex gap-6 mt-6 text-sm md:text-base">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;