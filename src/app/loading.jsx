"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-white overflow-hidden">
      {/* Background — matches Hero */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-black via-[#0f172a] to-[#020617]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full" />

      <div className="flex flex-col items-center gap-6">
        {/* Spinner ring with brand initials */}
        <div className="relative w-20 h-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-white/10 border-t-blue-400 border-r-purple-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              EH
            </span>
          </div>
        </div>

        {/* Loading label with animated dots */}
        <div className="flex items-center gap-1 font-mono text-sm text-gray-400">
          <span>Loading</span>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              .
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;