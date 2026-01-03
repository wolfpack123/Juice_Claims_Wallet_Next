'use client';

import React from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  // Sync initial state
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light");
    setIsDark(root.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark"); 
      setIsDark(false);
    } else {
      root.classList.add("dark"); 
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-8 h-8 flex items-center justify-center"
    >
      <Sun
        className={`
          absolute h-5 w-5 transition-all duration-300
          ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
        `}
      />
      <Moon
        className={`
          absolute h-5 w-5 transition-all duration-300
          ${isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}
        `}
      />
    </button>
  );
}
