"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div id="Home" className="flex flex-col items-center gap-4 scroll-mt-55 mt-50">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-bold text-4xl md:text-5xl text-blue-600 text-center px-4"
      >
        Hi, I am Nabila Al Awad
      </motion.h1>
     
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl text-slate-600 text-center px-4"
      >
        Software Engineer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mt-5 w-full sm:w-auto px-6"
      >
        <a
  href="/NABILA ALAWAD (7).pdf"
  download
  className="bg-blue-600 flex items-center justify-center text-white px-7 py-3 gap-2 rounded-xl w-full sm:w-auto"
>
  Download CV
</a>

       <a
  href="#Contact"
  className="bg-blue-600 flex items-center justify-center text-white px-7 py-3 gap-2 rounded-xl w-full sm:w-auto"
>
  Get In Touch <FaArrowRight />
</a>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-8 text-4xl mt-5"
      >
        <a href="https://www.linkedin.com/in/nabila-awad2001">
          <FaLinkedin className="text-blue-600" />
        </a>

        <a href="https://github.com/NabilaAwad">
          <FaGithub className="text-gray-700" />
        </a>

        <a href="mailto:nabila.awad2001@gmail.com">
          <MdEmail className="text-blue-600" />
        </a>

        <a href="https://t.me/Nabila_Awad">
          <FaTelegram className="text-blue-600" />
        </a>
      </motion.ul>

    </div>
  );
}