"use client";

import { FaGraduationCap, FaAward } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="Education" className="scroll-mt-32 mt-70 px-6">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="text-center text-4xl font-bold mb-12"
      >
        Education & Certifications
      </motion.h1>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl mx-auto border border-slate-200 rounded-2xl p-8 shadow-md"
      >
        <div className="flex items-center gap-4">
          <FaGraduationCap className="text-3xl text-blue-600" />
          <h2 className="text-xl font-bold">Damascus University</h2>
        </div>

        <div className="mt-4">
          <p className="text-xl">
            Bachelor of Information Technology Engineering
          </p>
          <p className="text-xl mt-2">
            Specializing in Software Engineering
          </p>

          <div className="flex items-center gap-3 mt-5 text-slate-600">
            <MdDateRange className="text-xl" />
            <p>2019 - 2025</p>
          </div>
        </div>
      </motion.div>

      {/* Certificates */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-10">

        {/* Prokoders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-start gap-4">
            <FaAward className="text-3xl text-orange-600" />
            <h3 className="text-lg font-bold">
              Flutter Internship Certificate, Prokoders (2024)
            </h3>
          </div>

          <a
            href="https://drive.google.com/file/d/1RCvtXEk-Fb7hq2Ipyd_nhGts5v0q-pUH/view?usp=sharing"
            target="_blank"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            View Certificate
          </a>
        </motion.div>

        {/* DCPC */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-start gap-4">
            <FaAward className="text-3xl text-orange-600" />
            <h3 className="text-lg font-bold">
              DCPC Programming Competition Certificate (2021)
            </h3>
          </div>

          <a
            href="https://drive.google.com/file/d/1aJxuvigKxYlXijZYGIHUn_A4F0GyAddF/view?usp=sharing"
            target="_blank"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            View Certificate
          </a>
        </motion.div>

      </div>
    </section>
  );
}