"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="relative mt-20 text-white">
        {/* 🌌 Background Glow */}
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black via-[#020617] to-transparent" />
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-purple-500 opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-60 h-60 bg-blue-500 opacity-20 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* TOP SECTION */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* 🧑‍💻 Brand */}
            <div>
              <h2 className="text-2xl font-bold">
                Emon <span className="text-blue-400">Hossain</span>
              </h2>
              <p className="mt-3 text-gray-400">
                React & Next.js Developer building modern and scalable web
                applications.
              </p>
            </div>

            {/* 🔗 Links */}
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition">
                  About
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Projects
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Contact
                </li>
              </ul>
            </div>

            {/* 📩 Contact */}
            <div>
              <h3 className="font-semibold mb-3">Get In Touch</h3>
              <p className="text-gray-400 flex items-center gap-2">
                <FaEnvelope /> emon26.ugv@gmail.com
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4 text-xl">
                <Link href={"https://github.com/emon-101"} target="_blank">
                  <FaGithub className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/emon101/"}
                  target="_blank"
                >
                  <FaLinkedin className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
                </Link>
                <Link href={"https://x.com/EmonHossain26"} target="_blank">
                  <FaTwitter className="cursor-pointer hover:scale-110 hover:text-gray-300 transition" />
                </Link>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10 my-8" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Emon Hossain. All rights reserved.
            </p>

            <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
