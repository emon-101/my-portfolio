"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">Emon.dev</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Projects</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-lg">
            <Link href={"https://github.com/emon-101"} target="_blank">
              <FaGithub className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
            <Link href={"https://www.linkedin.com/in/emon101/"} target="_blank">
              <FaLinkedin className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
            <Link href={"https://x.com/EmonHossain26"} target="_blank">
              <FaTwitter className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden text-2xl cursor-pointer">
            {isOpen ? (
              <HiX onClick={() => setIsOpen(false)} />
            ) : (
              <HiMenu onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Slide Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 right-0 w-64 h-full bg-white/10 backdrop-blur-xl border-l border-white/20 p-6"
              >
                <ul className="flex flex-col gap-6 text-lg mt-10">
                  <li
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:text-gray-300"
                  >
                    About
                  </li>
                  <li
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:text-gray-300"
                  >
                    Projects
                  </li>
                  <li
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:text-gray-300"
                  >
                    Contact
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-6 mt-10 text-2xl">
                  <FaGithub className="hover:scale-110 transition cursor-pointer" />
                  <FaLinkedin className="hover:scale-110 transition cursor-pointer" />
                  <FaTwitter className="hover:scale-110 transition cursor-pointer" />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
