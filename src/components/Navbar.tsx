import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTheme, ThemeMode } from "@/hooks/useTheme";
import logo from "@/assets/mah-quantum-logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Architecture", to: "/architecture" },
  { label: "Industries", to: "/industries" },
  { label: "Labs", to: "/labs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const themes: { value: ThemeMode; label: string }[] = [
  { value: "black-neon", label: "Black Neon" },
  { value: "light", label: "Light" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="MAH Quantum" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-display font-bold text-lg gradient-text">MAH Quantum</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === l.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Theme toggle */}
        <div className="hidden lg:flex items-center gap-1 glass rounded-full px-1 py-1">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => setTheme(t.value)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                theme === t.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-strong border-t border-border/30 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-1 mt-3 glass rounded-full px-1 py-1 w-fit">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  theme === t.value
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
