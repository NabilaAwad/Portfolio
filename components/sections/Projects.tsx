"use client";

import { MdDateRange } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="Projects" className="scroll-mt-40 mt-20 md:mt-40 px-4 md:px-6">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="text-center text-3xl md:text-4xl font-bold mb-10 md:mb-12"
      >
        Featured Projects
      </motion.h1>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl mx-auto border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-8 shadow-md hover:shadow-lg transition bg-white dark:bg-slate-950"
      >

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

          <div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs md:text-sm">
              Graduation Project
            </span>

            <h2 className="text-xl md:text-2xl font-bold mt-3 md:mt-4 text-slate-900 dark:text-slate-100">
              Bet-AlMukhtar Restaurant Chain Management System
            </h2>

            <p className="text-slate-500 mt-1 md:mt-2 text-sm md:text-base">
              University of Damascus
            </p>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm md:text-base">
            <MdDateRange />
            <span>2024 - 2025</span>
          </div>

        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 md:gap-3 mt-5 md:mt-6">
          {["React.js", "REST APIs", "Scrum"].map((tech, i) => (
            <span
              key={i}
              className="bg-blue-50 dark:bg-slate-800 px-3 py-1 rounded-full text-xs md:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <ul className="mt-5 md:mt-6 space-y-2 md:space-y-3 text-slate-700 dark:text-slate-300 list-disc pl-5 text-sm md:text-base">
          <li>
            Developed a web-based restaurant management system using React.js.
          </li>
          <li>
            Designed responsive dashboards for multiple roles (manager, cashier, etc.).
          </li>
          <li>
            Worked in a 5-member Scrum team on frontend architecture.
          </li>
          <li>
            Achieved a grade of <strong>93/100</strong>.
          </li>
        </ul>

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 md:mt-8 gap-4">

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full w-fit text-sm">
            Grade: 93/100
          </span>

          <a
            href="https://github.com/NabilaAwad/restaurant-management-system"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:scale-105 transition w-full md:w-auto"
          >
            <FaGithub />
            View Code
          </a>

        </div>

        {/* Demos */}
        <div className="mt-6 md:mt-8 border-t pt-5 md:pt-6">
          <h3 className="font-semibold text-base md:text-lg mb-4">
            Available Dashboards
          </h3>

          <div className="space-y-3">

            {[
              ["Manager Dashboard", "https://youtu.be/ehwETrzOZV4"],
              ["Branch Manager Dashboard", "https://youtu.be/-vjfHChljgE"],
              ["Cashier Dashboard", "https://youtu.be/wG2jkUPn43s"],
              ["Warehouse Dashboard", "https://youtu.be/GHF35_tBXgY"],
              ["Accountant Dashboard", "https://youtu.be/SLu3fxTn7-k"],
            ].map(([title, link], i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
              >
                <span className="text-sm md:text-base">{title}</span>

                <a
                  href={link}
                  target="_blank"
                  className="text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition text-center text-sm md:text-base"
                >
                  View Demo
                </a>
              </div>
            ))}

          </div>
        </div>

      </motion.div>
    </section>
  );
}