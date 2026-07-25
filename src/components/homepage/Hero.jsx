"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-10 text-white overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-black via-[#0f172a] to-[#020617]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-400/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-green-400">
              Open to internships & junior roles
            </span>
          </div>

          <p className="text-gray-400 mb-2">Hello, I&#39;m</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Emon </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              Hossain
            </span>
          </h1>

          {/* Typing Animation */}
          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1500,
                "MERN Stack Developer",
                1500,
                "Next.js Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h2>

          <p className="mt-4 text-gray-300 max-w-md mx-auto md:mx-0">
            Computer Science student building full-stack apps with React,
            Next.js, Node.js, and MongoDB — from database schema to deployed
            UI. Based in Bangladesh.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1dp9A2U24BGzpqFfg-p78bNjJL1PtXevM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
            >
              View resume
            </a>

            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
            >
              Contact me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl justify-center md:justify-start">
            <Link href={"https://github.com/emon-101"} target="_blank" aria-label="GitHub">
              <FaGithub className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
            <Link href={"https://www.linkedin.com/in/emon101/"} target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
            <Link href={"https://x.com/EmonHossain26"} target="_blank" aria-label="Twitter / X">
              <FaTwitter className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500 opacity-30 blur-2xl rounded-2xl" />

            {/* Image */}
            <Image
              src="/portfolio_profile.jpeg"
              alt="Emon Hossain"
              fill
              className="object-cover rounded-2xl border border-white/20"
              priority
            />

            {/* Floating proof card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-5 -left-5 sm:-left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="text-lg font-bold text-blue-400 leading-none">10+</p>
              <p className="text-xs text-gray-300 mt-1">Projects shipped</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;