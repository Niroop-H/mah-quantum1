import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu, Factory, FlaskConical, Users, Mail, User } from "lucide-react";
import { useTheme, ThemeMode } from "@/hooks/useTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/mah-quantum-logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Architecture", to: "/architecture" },
  { label: "Industries", to: "/industries" },
  { label: "Labs", to: "/labs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const dropdownLinks = [
  { label: "Architecture", to: "/architecture", icon: Cpu },
  { label: "Industries", to: "/industries", icon: Factory },
  { label: "Labs", to: "/labs", icon: FlaskConical },
  { label: "About", to: "/about", icon: Users },
  { label: "Contact", to: "/contact", icon: Mail },
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

        {/* Right side: theme toggle + profile dropdown */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme toggle */}
          <div className="flex items-center gap-1 glass rounded-full px-1 py-1">
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

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="h-9 w-9 rounded-full glass border border-border/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95">
                <User size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-52 glass-strong border-border/20 rounded-xl p-1.5 shadow-xl animate-in fade-in-0 slide-in-from-top-2 duration-200"
            >
              <div className="px-3 py-2 mb-1">
                <p className="text-xs font-semibold text-foreground">Navigate</p>
                <p className="text-[11px] text-muted-foreground">Quick access</p>
              </div>
              <DropdownMenuSeparator className="bg-border/20" />
              {dropdownLinks.map((item) => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link
                    to={item.to}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors duration-150 ${
                      location.pathname === item.to
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <item.icon size={16} />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
