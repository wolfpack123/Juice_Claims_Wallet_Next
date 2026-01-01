import React from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  // Sync initial theme from DOM
  React.useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Apply theme
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-8 h-8 flex items-center justify-center"
    >
      <Sun
        className="
          absolute h-5 w-5 transition-all duration-300
          rotate-0 scale-100 opacity-100
          dark:-rotate-90 dark:scale-0 dark:opacity-0
        "
      />
      <Moon
        className="
          absolute h-5 w-5 transition-all duration-300
          rotate-90 scale-0 opacity-0
          dark:rotate-0 dark:scale-100 dark:opacity-100
        "
      />
    </button>
  );
}
