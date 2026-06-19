"use client";

import { MdDateRange } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="Projects" className="scroll-mt-40 mt-40 px-6">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="text-center text-4xl font-bold mb-12"
      >
        Featured Projects
      </motion.h1>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl mx-auto border border-slate-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition"
      >

        {/* Header */}
        <div className="flex justify-between items-start flex-wrap gap-4">

          <div>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              Graduation Project
            </span>

            <h2 className="text-2xl font-bold mt-4 text-slate-900">
              Bet-AlMukhtar Restaurant Chain Management System
            </h2>

            <p className="text-slate-500 mt-2">University of Damascus</p>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <MdDateRange />
            <span>2024 - 2025</span>
          </div>

        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mt-6">
          {["React.js", "REST APIs", "Scrum"].map((tech, i) => (
            <span
              key={i}
              className="bg-blue-50 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <ul className="mt-6 space-y-3 text-slate-700 list-disc pl-5">
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
        <div className="flex justify-between items-center mt-8 flex-wrap gap-4">

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Grade: 93/100
          </span>

          <a
            href="https://github.com/NabilaAwad/restaurant-management-system"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
          >
            <FaGithub />
            View Code
          </a>

        </div>

        {/* Demos */}
        <div className="mt-8 border-t pt-6">
          <h3 className="font-semibold text-lg mb-4">
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
                className="flex justify-between items-center flex-wrap gap-3"
              >
                <span>{title}</span>

                <a
                  href={link}
                  target="_blank"
                  className="text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition"
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