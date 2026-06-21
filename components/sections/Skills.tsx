"use client";

import { FiCode, FiTool } from "react-icons/fi";
import { SiCodeforces, SiFramework } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="Skills" className="scroll-mt-32 mt-70 px-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="text-center text-4xl font-bold mb-12"
      >
        Skills & Technologies
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="
            border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900
            rounded-2xl p-6 shadow-md
          "
        >
          <div className="flex items-center gap-3 mb-4">
            <FiCode className="text-3xl text-blue-600" />
            <h2 className="text-xl font-bold">
              Frontend & Mobile Development
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Flutter",
              "Dart",
              "JavaScript (ES6+)",
              "REST APIs",
              "GetX",
              "Tailwind CSS",
            ].map((skill, i) => (
              <span
                key={i}
                className="
                  bg-blue-50 text-blue-700
                  dark:bg-blue-500/15 dark:text-blue-300
                  dark:border dark:border-blue-500/20
                  px-3 py-1 rounded-full text-sm
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="
            border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900
            rounded-2xl p-6 shadow-md
          "
        >
          <div className="flex items-center gap-3 mb-4">
            <SiCodeforces className="text-3xl text-green-500" />
            <h2 className="text-xl font-bold">
              Programming Languages
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["C++", "SQL", "Java"].map((lang, i) => (
              <span
                key={i}
                className="
                  bg-emerald-50 text-emerald-700
                  dark:bg-emerald-500/15 dark:text-emerald-300
                  dark:border dark:border-emerald-500/20
                  px-3 py-1 rounded-full text-sm
                "
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="
            border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900
            rounded-2xl p-6 shadow-md
          "
        >
          <div className="flex items-center gap-3 mb-4">
            <SiFramework className="text-3xl text-violet-500" />
            <h2 className="text-xl font-bold">
              Frameworks & Concepts
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["MVC", "Agile", "Scrum"].map((item, i) => (
              <span
                key={i}
                className="
                  bg-violet-50 text-violet-700
                  dark:bg-violet-500/15 dark:text-violet-300
                  dark:border dark:border-violet-500/20
                  px-3 py-1 rounded-full text-sm
                "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2 }}
          className="
            border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900
            rounded-2xl p-6 shadow-md
            md:col-span-2 lg:col-span-1
          "
        >
          <div className="flex items-center gap-3 mb-4">
            <FiTool className="text-3xl text-orange-500" />
            <h2 className="text-xl font-bold">
              Tools & Collaboration
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Git",
              "GitHub",
              "Firebase",
              "VS Code",
              "Android Studio",
              "Postman",
              "Problem Solving",
            ].map((tool, i) => (
              <span
                key={i}
                className="
                  bg-orange-50 text-orange-700
                  dark:bg-orange-500/15 dark:text-orange-300
                  dark:border dark:border-orange-500/20
                  px-3 py-1 rounded-full text-sm
                "
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}