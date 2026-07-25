"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-10 text-white overflow-hidden">
      {/* Background — matches Hero */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-black via-[#0f172a] to-[#020617]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full text-center"
      >
        {/* Terminal-style card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          {/* Fake terminal top bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="ml-2 text-xs text-gray-500">route-resolver.js</span>
          </div>

          <div className="p-8 sm:p-10">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500"
            >
              404
            </motion.h1>

            <p className="mt-4 font-mono text-sm text-red-400/90">
              Error: route not found in this repository
            </p>

            <p className="mt-3 text-gray-400 text-sm sm:text-base">
              This page doesn&#39;t exist — maybe it got refactored out, or the
              link took a wrong turn somewhere.
            </p>

            {/* Blinking terminal line */}
            <div className="mt-6 flex items-center justify-center gap-1 font-mono text-xs text-gray-500">
              <span>$ cd</span>
              <span className="text-blue-400">~/home</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-1.5 h-3.5 bg-blue-400 ml-1"
              />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <FaHome className="text-xs" /> Back to home
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-sm font-semibold transition"
              >
                <FaFolderOpen className="text-xs" /> View projects
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-sm font-semibold transition"
              >
                <FaEnvelope className="text-xs" /> Contact me
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-600">
          If you followed a link to get here, feel free to let me know — it
          might be a bug worth fixing.
        </p>
      </motion.div>
    </section>
  );
};

export default NotFound;