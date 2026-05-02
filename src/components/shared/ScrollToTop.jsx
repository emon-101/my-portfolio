"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShow(y > 300);
      setScrolled(y > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-999 w-14 h-14 rounded-full overflow-hidden border border-white/20 backdrop-blur-md"
        >
          {/* 🌈 Floating Gradient Layer */}
          <motion.div
            className="absolute inset-0"
            animate={
              scrolled
                ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
                : {}
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background:
                "linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
              backgroundSize: "400% 400%",
            }}
          />

          {/* 🧊 Glass overlay (only when not scrolled much) */}
          {!scrolled && (
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
          )}

          {/* 🔥 Glow Effect */}
          {scrolled && (
            <div className="absolute inset-0 blur-xl opacity-50 bg-linear-to-r from-blue-500 to-purple-500" />
          )}

          {/* ⬆️ Icon */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <FaArrowUp className="text-white" />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
