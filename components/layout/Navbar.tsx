"use client";

import { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Experience", href: "#Experience" },
    { name: "Projects", href: "#Projects" },
    { name: "Education", href: "#Education" },
    { name: "Skills", href: "#Skills" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      
      {/* Desktop */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        
        {/* Logo */}
        <h1 className="text-blue-900 dark:text-blue-400 font-serif font-bold text-xl">
          Nabila AL Awad
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-slate-900 dark:text-slate-100">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}

          <ThemeToggle />
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-slate-900 dark:text-slate-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col gap-5 text-slate-900 dark:text-slate-100">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <div className="pt-4">
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}