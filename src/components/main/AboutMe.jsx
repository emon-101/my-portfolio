"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Started Web Development",
    desc: "Began learning HTML, CSS, and JavaScript fundamentals.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    desc: "Focused on React and built multiple responsive projects.",
  },
  {
    year: "2025",
    title: "Next.js & Full Stack",
    desc: "Started building full-stack apps with Next.js and MongoDB.",
  },
];

const AboutMe = () => {
  return (
    <section className="py-24 px-6 md:px-10 text-white relative">
      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-[#020617] to-black" />

      <div className="max-w-6xl mx-auto">
        {/* 🔥 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* 🧊 About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-gray-300 max-w-3xl mx-auto text-center"
        >
          <p>
            I&#39;m{" "}
            <span className="text-white font-semibold">Emon Hossain</span>, a
            React & Next.js developer focused on building modern and scalable
            web applications.
          </p>

          <p className="mt-4">
            I specialize in performance, clean UI, and user-focused design. I
            enjoy solving problems and continuously improving my skills.
          </p>
        </motion.div>

        {/* ⚡ Skills */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {["React", "Next.js", "Tailwind", "MongoDB"].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:scale-105 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* 🕒 Timeline */}
        <div className="mt-20 relative px-6 sm:px-8 md:px-10">
          {/* 🔵 Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-white/20" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* 🔵 Dot */}
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />

                {/* 📦 Content */}
                <div
                  className={`
            ml-10 md:ml-0 md:w-1/2 p-4
            ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}
          `}
                >
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:-translate-y-2 transition duration-300">
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
            ))}
          </div>
        </div>

        {/* 📊 Stats */}
        <div className="mt-20 flex justify-center gap-10 text-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">10+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-400">1+</h3>
            <p className="text-gray-400">Years Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
