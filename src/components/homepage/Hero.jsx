"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter, FaPlay } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-10 text-white overflow-hidden pt-20">

      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-black via-[#0f172a] to-[#020617]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🧠 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-2">Hello, I&#39;m</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Emon </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              Hossain
            </span>
          </h1>

          {/* ✨ Typing Animation */}
          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
            <TypeAnimation
              sequence={[
                "React Developer",
                1500,
                "Next.js Developer",
                1500,
                "Full Stack Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h2>

          <p className="mt-4 text-gray-300 max-w-md">
            I build modern, fast and scalable web applications with clean UI/UX and high performance.
          </p>

          {/* 🔘 Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 hover:scale-105 transition">
              View My Work
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition">
              Contact Me
            </button>
          </div>

          {/* 🌐 Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <Link href={'https://github.com/emon-101'} target="_blank">
              <FaGithub className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
            <Link href={'https://www.linkedin.com/in/emon101/'} target="_blank">
              <FaLinkedin className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
            <Link href={'https://x.com/EmonHossain26'} target="_blank">
              <FaTwitter className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
          </div>
        </motion.div>

        {/* 🎥 RIGHT SIDE */}
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
              src="/profile_img.jpeg" // put your image in /public
              alt="Emon Hossain"
              fill
              className="object-cover rounded-2xl border border-white/20"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
    );
};

export default Hero;