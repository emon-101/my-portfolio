"use client";

import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-999 origin-left bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
      style={{ scaleX: scrollYProgress }}
    />
    );
};

export default ScrollProgress;