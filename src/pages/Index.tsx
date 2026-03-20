import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cpu, Factory, FlaskConical, Users, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/mah-quantum-logo.jpeg";

const menuItems = [
  { label: "Architecture", to: "/architecture", icon: Cpu },
  { label: "Industries", to: "/industries", icon: Factory },
  { label: "Labs", to: "/labs", icon: FlaskConical },
  { label: "About", to: "/about", icon: Users },
  { label: "Contact", to: "/contact", icon: Mail },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-[hsl(220,15%,4%)] text-white flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(210,100%,50%)] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-[hsl(270,80%,55%)] opacity-[0.03] blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210,20%,30%) 1px, transparent 1px), linear-gradient(90deg, hsl(210,20%,30%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        {/* Logo */}
        <img
          src={logo}
          alt="MAH Quantum"
          className="h-16 w-16 rounded-2xl object-cover shadow-[0_0_40px_hsl(210,100%,50%,0.15)]"
        />

        {/* Heading */}
        <div className="text-center space-y-3">
          <h1
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight"
            style={{ lineHeight: 1.05 }}
          >
            MAH Quantum
          </h1>
          <p className="text-[hsl(210,15%,55%)] text-base sm:text-lg tracking-[0.15em] uppercase font-medium">
            Unified Intelligence Systems
          </p>
        </div>

        {/* Enter button */}
        <div className="relative mt-4">
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-[hsl(210,30%,20%)] bg-[hsl(220,15%,8%)] text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:border-[hsl(210,80%,50%,0.4)] hover:shadow-[0_0_40px_hsl(210,100%,55%,0.12)] active:scale-[0.97]"
          >
            Explore Platform
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* Dropdown menu */}
          {menuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setMenuOpen(false)}
              />
              {/* Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 w-56 rounded-2xl border border-[hsl(210,20%,16%)] bg-[hsl(220,15%,7%,0.92)] backdrop-blur-xl p-2 shadow-2xl animate-in fade-in-0 slide-in-from-top-3 duration-200">
                {menuItems.map((item, i) => (
                  <button
                    key={item.to}
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(item.to);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm text-[hsl(210,15%,65%)] hover:text-white hover:bg-[hsl(210,30%,15%,0.5)] transition-colors duration-150"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    <item.icon size={16} className="shrink-0" />
                    {item.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(210,80%,50%,0.2)] to-transparent" />
    </div>
  );
}
