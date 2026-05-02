"use client";
import { motion } from "framer-motion";
import GlassCard from "../shared/GlassCard";

const projects = [
  { name: "Skill Sphere", desc: "Learning platform" },
  { name: "DigiTools", desc: "Developer tools app" },
];

const Projects = () => {
  return (
    <div>
      <section className="py-20 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <GlassCard>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-gray-300 mt-2">{p.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
