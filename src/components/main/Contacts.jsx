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
    <section className="py-24 px-4 sm:px-6 md:px-10 text-white relative">

      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black via-[#020617] to-black" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 🔹 LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let’s <span className="text-blue-400">Connect</span>
          </h2>

          <p className="text-gray-400">
            Have a project idea or want to collaborate? Feel free to send me a message.
            I’ll get back to you as soon as possible.
          </p>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400" />
            <span className="text-gray-300">emon26.ugv@gmail.com</span>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-2xl mt-4">
            <a href="https://github.com/emon-101" target="_blank">
              <FaGithub className="hover:scale-110 hover:text-blue-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/emon101/" target="_blank">
              <FaLinkedin className="hover:scale-110 hover:text-blue-400 transition" />
            </a>
            <a href="https://x.com/EmonHossain26" target="_blank">
              <FaTwitter className="hover:scale-110 hover:text-blue-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* 🔹 RIGHT: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 font-semibold"
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
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 text-center shadow-[0_0_40px_rgba(59,130,246,0.3)]"
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

              <h3 className="text-xl font-semibold mt-4">
                Message Sent!
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                Thanks for reaching out. I’ll reply soon
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contacts;