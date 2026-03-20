import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import logo from "@/assets/mah-quantum-logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Architecture", to: "/architecture" },
  { label: "Industries", to: "/industries" },
  { label: "Labs", to: "/labs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="MAH Quantum" className="h-8 w-8 rounded-md object-cover" />
          <span className="font-display font-semibold text-sm text-foreground tracking-tight">MAH Quantum</span>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors duration-200 ${
                location.pathname === l.to
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <button
            onClick={() => setTheme(theme === "black-neon" ? "light" : "black-neon")}
            className="p-2 rounded text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border/50 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "black-neon" ? "light" : "black-neon")}
            className="mt-3 px-3 py-2 rounded text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
