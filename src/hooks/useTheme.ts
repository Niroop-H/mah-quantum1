import { useState, useEffect, useCallback } from "react";

export type ThemeMode = "dark-neon" | "black-neon" | "light";

const THEME_KEY = "mah-quantum-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem(THEME_KEY) as ThemeMode) || "dark-neon";
    }
    return "dark-neon";
  });

  const setTheme = useCallback((t: ThemeMode) => {
    setThemeState(t);
    localStorage.setItem(THEME_KEY, t);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-black-neon", "theme-light");
    if (theme === "black-neon") root.classList.add("theme-black-neon");
    else if (theme === "light") root.classList.add("theme-light");
  }, [theme]);

  return { theme, setTheme };
}
