"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const education = [
    {
      year: "2025 - Present",
      degree: "B.Sc in Computer Science & Engineering",
      institution: "University Of Global Village",
      current: true,
    },
    {
      year: "2021",
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Babuganj Degree College",
    },
    {
      year: "2019",
      degree: "Secondary School Certificate (SSC)",
      institution: "Kedarpur Sonar Bangla High School and College",
    },
  ];
  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 md:px-10 text-white relative"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        My <span className="text-blue-400">Education</span>
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* 🔥 Animated Line */}
        <motion.div
          style={{ scaleY }}
          className="absolute origin-top left-4 md:left-[45%] top-0 w-0.5 h-full bg-linear-to-b from-blue-500 to-purple-500"
        />

        <div className="space-y-12">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start"
            >
              {/* 🔵 Dot */}
              <div className="absolute left-2 md:left-[45%] w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />

              {/* 📦 Card */}
              <div className="ml-10 md:ml-auto md:w-1/2 md:pl-10 w-full">
                <div
                  className={`bg-white/10 backdrop-blur-lg border rounded-xl p-5 md:p-6 
                  hover:-translate-y-2 transition duration-300
                  ${
                    item.current
                      ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                      : "border-white/20"
                  }`}
                >
                  {/* Badge */}
                  {item.current && (
                    <span className="inline-block text-xs px-3 py-1 mb-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400">
                      Present
                    </span>
                  )}

                  <h3 className="text-blue-400 font-bold text-sm md:text-base">
                    {item.year}
                  </h3>

                  <h4 className="text-base md:text-lg font-semibold mt-1">
                    {item.degree}
                  </h4>

                  <p className="text-gray-400 mt-2 text-sm md:text-base">
                    {item.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
