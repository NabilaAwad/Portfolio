"use client";

import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="Contact" className="scroll-mt-32 mt-40 px-6">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="text-center text-4xl font-bold mb-6"
      >
        Get In Touch
      </motion.h1>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >

        <p className="text-xl text-slate-600">
          Let’s connect and build something great together. I’m open to
          collaborations, internships, and exciting opportunities.
        </p>

        <p className="mt-4 text-green-600 font-medium">
          ● Available for freelance & internships
        </p>

        {/* Icons */}
        <div className="flex gap-6 text-3xl mt-8">

          <a
            href="mailto:nabila.awad2001@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <MdEmail />
          </a>

          <a
            href="https://www.linkedin.com/in/nabila-awad2001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://t.me/Nabila_Awad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTelegram />
          </a>

          {/* WhatsApp fix */}
          <a
            href="https://wa.me/963937721389"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>

        </div>

        {/* CTA Button */}
        <a
          href="mailto:nabila.awad2001@gmail.com"
          className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition"
        >
          Send Me a Message
        </a>

      </motion.div>

    </section>
  );
}