"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-xl font-bold tracking-wide text-white">
            Emon<span className="text-blue-400">.dev</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm text-white/90">
            {["About", "Projects", "Contact"].map((item, i) => (
              <li
                key={i}
                className="relative cursor-pointer group text-white/90 hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Desktop Social */}
          <div className="hidden md:flex items-center gap-4 text-lg">
            <Link href="https://github.com/emon-101" target="_blank">
              <FaGithub className="hover:scale-110 transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/emon101/" target="_blank">
              <FaLinkedin className="hover:scale-110 transition" />
            </Link>
            <Link href="https://x.com/EmonHossain26" target="_blank">
              <FaTwitter className="hover:scale-110 transition" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div
            className="md:hidden text-2xl cursor-pointer z-15"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* 🌑 Overlay (FIXED) */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
              onClick={() => setIsOpen(false)}
            />

            {/* 📱 Slide Panel */}
            <motion.div
              initial={{ x: "100%", scale: 0.95, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              exit={{ x: "100%", scale: 0.95, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
              }}
              className="fixed top-0 right-0 w-72 h-full bg-black/90 backdrop-blur-xl border-l border-white/10 z-50 p-6 flex flex-col"
            >
              {/* Menu */}
              <ul className="flex flex-col gap-8 text-lg mt-20 text-white">
                {["About", "Projects", "Contact"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="cursor-pointer text-white/90 hover:text-blue-400 transition"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-10" />

              {/* Social */}
              <div className="flex gap-6 text-2xl text-white/80">
                <FaGithub className="hover:scale-110 hover:text-white transition" />
                <FaLinkedin className="hover:scale-110 hover:text-white transition" />
                <FaTwitter className="hover:scale-110 hover:text-white transition" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
