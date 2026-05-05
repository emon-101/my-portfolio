"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v80dg79",
        "template_c4hiy6p",
        form.current,
        "zoGXqKRsjdCdJqGnR"
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => {
        alert("Something went wrong ❌");
      });
  };

  return (
    // ✅ FIXED: Added overflow-x-hidden to prevent any animation bleed causing horizontal scroll
    <section className="py-24 px-4 sm:px-6 md:px-10 text-white relative overflow-x-hidden">

      {/* 🌌 Background — ✅ FIXED: bg-linear-to-b → bg-gradient-to-b (invalid Tailwind class) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#020617] to-black" />

      {/* ✅ FIXED: Added grid-cols-1 base so columns stack on mobile, gap-6 on mobile */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

        {/* 🔹 LEFT: Contact Info */}
        {/* ✅ FIXED: x: -40 → y: 30 — horizontal x animation caused overflow scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let&#39;s <span className="text-blue-400">Connect</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            Have a project idea or want to collaborate? Feel free to send me a message.
            I&#39;ll get back to you as soon as possible.
          </p>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 shrink-0" />
            <span className="text-gray-300 text-sm sm:text-base break-all">
              emon26.ugv@gmail.com
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/emon-101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:scale-110 hover:text-blue-400 transition-all" />
            </a>
            <a
              href="https://www.linkedin.com/in/emon101/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:scale-110 hover:text-blue-400 transition-all" />
            </a>
            <a
              href="https://x.com/EmonHossain26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
            >
              <FaTwitter className="hover:scale-110 hover:text-blue-400 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* 🔹 RIGHT: Form */}
        {/* ✅ FIXED: x: 40 → y: 30 — same horizontal overflow issue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20
                focus:border-blue-400 outline-none text-sm sm:text-base placeholder-gray-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20
                focus:border-blue-400 outline-none text-sm sm:text-base placeholder-gray-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20
                focus:border-blue-400 outline-none resize-none text-sm sm:text-base placeholder-gray-500"
            />

            {/* ✅ FIXED: bg-linear-to-r → bg-gradient-to-r (invalid Tailwind class) */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500
                font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>

      {/* ✅ Success Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20
                rounded-2xl p-8 sm:p-10 text-center shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              {/* ✔ Checkmark */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mx-auto text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.svg>

              <h3 className="text-xl font-semibold mt-4">Message Sent!</h3>

              <p className="text-gray-400 mt-2 text-sm">
                Thanks for reaching out. I&39;ll reply soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contacts;