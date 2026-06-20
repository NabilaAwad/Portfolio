"use client";

import { BsBagDashFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="Experience" className="scroll-mt-50 mt-70">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="text-center text-4xl font-bold mb-12"
      >
        Work Experience
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="border border-slate-200 rounded-2xl md:p-8 shadow-md max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-4">
          <BsBagDashFill className="text-3xl text-amber-950" />
          <h2 className="text-lg md:text-xl font-bold">Flutter Developer Intern</h2>
        </div>

        <div className="mt-4">
          <p className="text-xl font-medium">Prokoders</p>

          <div className="flex items-center gap-3 mt-3 text-slate-600">
            <MdDateRange className="text-xl" />
            <p>Aug 2024 - Nov 2024</p>
          </div>

          <ul className="mt-5 space-y-2 text-slate-700 list-disc pl-5">
            <li>Developed mobile applications using Flutter.</li>
            <li>Implemented GetX state management.</li>
            <li>Integrated RESTful APIs.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}