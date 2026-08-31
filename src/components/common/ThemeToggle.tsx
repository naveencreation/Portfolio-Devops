"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-anim");
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTimeout(() => {
      document.documentElement.classList.remove("theme-anim");
    }, 400);
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      data-cursor="theme"
      style={{
        position: "relative",
        width: "42px",
        height: "42px",
        flexShrink: 0,
        borderRadius: "12px",
        border: "1px solid var(--line)",
        background: "var(--surface-2)",
        display: "grid",
        placeItems: "center",
        color: "var(--ink-soft)",
        transition:
          "border-color var(--dur-2) var(--ease-out), background var(--dur-2) var(--ease-out), color var(--dur-2) var(--ease-out)",
      }}
    >
      <Sun
        className="tt-sun"
        style={{
          position: "absolute",
          width: "18px",
          height: "18px",
          opacity: theme === "light" ? 0 : 1,
          transform: theme === "light" ? "rotate(90deg) scale(0.5)" : "none",
          transition: "opacity var(--dur-3) var(--ease-out), transform 0.5s var(--ease-spring)",
        }}
      />
      <Moon
        className="tt-moon"
        style={{
          position: "absolute",
          width: "18px",
          height: "18px",
          opacity: theme === "light" ? 1 : 0,
          transform: theme === "light" ? "none" : "rotate(-90deg) scale(0.5)",
          transition: "opacity var(--dur-3) var(--ease-out), transform 0.5s var(--ease-spring)",
        }}
      />
    </button>
  );
}
