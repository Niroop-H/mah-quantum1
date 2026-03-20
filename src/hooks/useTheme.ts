import { useState, useEffect, useCallback } from "react";

export type ThemeMode = "black-neon" | "light";

const THEME_KEY = "mah-quantum-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "light") return "light";
    }
    return "black-neon";
  });

  const setTheme = useCallback((t: ThemeMode) => {
    setThemeState(t);
    localStorage.setItem(THEME_KEY, t);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-light");
    if (theme === "light") root.classList.add("theme-light");
  }, [theme]);

  return { theme, setTheme };
}
