import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Factory, FlaskConical, Users, Mail, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const menuItems = [
  { label: "Architecture", to: "/architecture", icon: Cpu },
  { label: "Industries", to: "/industries", icon: Factory },
  { label: "Labs", to: "/labs", icon: FlaskConical },
  { label: "About", to: "/about", icon: Users },
  { label: "Contact", to: "/contact", icon: Mail },
];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const counterRef = useRef(0);

  const createParticle = useCallback((w: number, h: number): Particle => {
    counterRef.current += 1;
    const maxLife = 300 + Math.random() * 400;
    return {
      id: counterRef.current,
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 0.5,
      opacity: 0,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.15,
      life: 0,
      maxLife,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Seed particles
    for (let i = 0; i < 80; i++) {
      const p = createParticle(canvas.width, canvas.height);
      p.life = Math.random() * p.maxLife;
      particlesRef.current.push(p);
    }

    const loop = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Maintain count
      while (particlesRef.current.length < 80) {
        particlesRef.current.push(createParticle(w, h));
      }

      particlesRef.current = particlesRef.current.filter((p) => {
        p.life += 1;
        if (p.life > p.maxLife) return false;

        p.x += p.vx;
        p.y += p.vy;

        // Fade in/out
        const fadeIn = Math.min(p.life / 60, 1);
        const fadeOut = Math.min((p.maxLife - p.life) / 60, 1);
        p.opacity = fadeIn * fadeOut * 0.6;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 40, 40, ${p.opacity})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 40, 40, ${p.opacity * 0.15})`;
        ctx.fill();

        return true;
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50 z-[1]" />

      {/* Particles */}
      <ParticleField />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-6 px-6 text-center">
        {/* Glass panel with animated neon red border */}
        <div
          className={`group relative rounded-3xl p-10 sm:p-14 flex flex-col items-center gap-6 max-w-2xl transition-all duration-[1200ms] ease-out ${
            loaded
              ? "opacity-100 translate-y-0 blur-0 scale-100"
              : "opacity-0 translate-y-8 blur-md scale-95"
          }`}
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(40px) saturate(1.4)",
            WebkitBackdropFilter: "blur(40px) saturate(1.4)",
            boxShadow: "0 8px 60px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.04), 0 0 80px rgba(220,38,38,0.06)",
            transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease-out, filter 1.2s ease-out, scale 1.2s ease-out",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.transform = "translateY(-4px)";
            el.style.boxShadow = "0 12px 60px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 100px rgba(220,38,38,0.12), 0 12px 40px rgba(220,38,38,0.08)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 8px 60px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.04), 0 0 80px rgba(220,38,38,0.06)";
          }}
        >
          {/* Radial highlight on hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(600px circle at 50% 0%, rgba(220,38,38,0.08), transparent 60%)",
            }}
          />
          {/* Edge shimmer on hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(220,38,38,0.05), transparent 40%, rgba(220,38,38,0.03), transparent 70%)",
            }}
          />

          {/* Animated neon red border */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              padding: "1px",
              background: "linear-gradient(135deg, rgba(220,38,38,0.5), rgba(220,38,38,0.05) 30%, rgba(220,38,38,0.0) 50%, rgba(220,38,38,0.05) 70%, rgba(220,38,38,0.5))",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              animation: "borderGlow 4s ease-in-out infinite alternate",
            }}
          />

          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none overflow-hidden rounded-tl-3xl">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-red-500/80 to-transparent animate-pulse-glow" />
            <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-red-500/80 to-transparent animate-pulse-glow" />
          </div>
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden rounded-tr-3xl">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-red-500/80 to-transparent animate-pulse-glow" />
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-red-500/80 to-transparent animate-pulse-glow" />
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none overflow-hidden rounded-bl-3xl">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-red-500/80 to-transparent animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-red-500/80 to-transparent animate-pulse-glow" />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none overflow-hidden rounded-br-3xl">
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-red-500/80 to-transparent animate-pulse-glow" />
            <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-red-500/80 to-transparent animate-pulse-glow" />
          </div>

          {/* Inner glow accent */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 bg-red-600/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-red-600/[0.06] blur-[60px] rounded-full" />
          </div>

          {/* Heading */}
          <h1
            className="relative font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[0.08em] uppercase"
            style={{
              lineHeight: 1.1,
              textShadow: "0 0 60px rgba(220,40,40,0.3), 0 0 120px rgba(220,40,40,0.1)",
            }}
          >
            MAH Quantum
          </h1>

          {/* Subheading */}
          <p className="relative text-white/40 text-xs sm:text-sm leading-relaxed max-w-md tracking-wide">
            At MAH Quantum, we engineer unified intelligence systems that transform operational complexity into measurable, scalable outcomes.
          </p>

          {/* Red neon line */}
          <div
            className={`w-48 h-px transition-all duration-[1400ms] delay-500 ease-out ${
              loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{
              background: "linear-gradient(90deg, transparent, #dc2626, transparent)",
              boxShadow: "0 0 12px rgba(220,38,38,0.6), 0 0 40px rgba(220,38,38,0.2)",
            }}
          />

          {/* Button */}
          <div className="relative mt-2">
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] active:scale-[0.97] overflow-hidden"
              style={{
                border: "1px solid rgba(220,38,38,0.25)",
                boxShadow: "0 0 20px rgba(220,38,38,0.08), inset 0 1px 0 0 rgba(255,255,255,0.05)",
              }}
            >
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 20px rgba(220,38,38,0.1)" }} />
              Enter System
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          {/* Dropdown */}
          {menuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 w-56 rounded-xl border border-white/[0.08] bg-black/70 backdrop-blur-2xl p-2 shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.05)] animate-in fade-in-0 slide-in-from-top-3 duration-200">
                {menuItems.map((item, i) => (
                  <button
                    key={item.to}
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(item.to);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors duration-150"
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
      </div>

      {/* Bottom neon line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-20"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.4), transparent)",
          boxShadow: "0 0 20px rgba(220,38,38,0.3)",
        }}
      />
    </div>
  );
}
