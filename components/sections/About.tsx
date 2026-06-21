"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="About" className="scroll-mt-55 mt-70">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.6 }}
        className="text-center text-4xl font-bold mb-12"
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
        <Image
          src="/images/mypic3.jpg"
          alt="Nabila Al Awad"
          width={250}
          height={250}
          className="rounded-full w-48 h-48 md:w-[250px] md:h-[250px]"
        />

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.6 }}
          className="max-w-2xl text-base md:text-lg text-slate-500 leading-8 text-center md:text-left"
        >
          I’m a Software Engineering graduate with a strong focus on Frontend
          Development using React.js and Next.js. I enjoy building modern,
          responsive, and user-friendly web applications with clean and
          maintainable code.
          <br />
          <br />
          During my graduation project, I contributed to developing a restaurant
          chain management system using React.js, working on UI development,
          feature implementation, and frontend architecture. I also gained
          mobile development experience through a Flutter internship, where I
          worked with GetX state management and REST APIs.
        </motion.p>
      </div>
    </section>
  );
}
