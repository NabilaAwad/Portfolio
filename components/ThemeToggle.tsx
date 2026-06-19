"use client";

import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
     onClick={() =>
  setTheme(resolvedTheme === "dark" ? "light" : "dark")
}
      className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-black dark:text-white"
    >
      {theme === "dark" ? <BiMoon /> : <BiSun />}
    </button>
  );
}