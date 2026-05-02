"use client";
import { motion } from "framer-motion";

const skills = ["Next.js", "React", "MongoDB", "Tailwind"];

const Skills = () => {
  return (
    <div>
      <section className="py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
