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
        {/* Glass panel */}
        <div
          className={`relative rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl p-10 sm:p-14 flex flex-col items-center gap-6 shadow-[0_8px_60px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-[1200ms] ease-out ${
            loaded
              ? "opacity-100 translate-y-0 blur-0 scale-100"
              : "opacity-0 translate-y-8 blur-md scale-95"
          }`}
        >
          {/* Inner glow accent */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 bg-red-600/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-red-600/8 blur-[60px] rounded-full" />
          </div>

          {/* Heading */}
          <h1
            className="relative font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-[0.08em] uppercase"
            style={{
              lineHeight: 1.05,
              textShadow: "0 0 60px rgba(220,40,40,0.3), 0 0 120px rgba(220,40,40,0.1)",
            }}
          >
            MAH Quantum
          </h1>

          {/* Subheading */}
          <p className="relative text-white/45 text-sm sm:text-base tracking-[0.25em] uppercase font-medium">
            Unified Intelligence Systems
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
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/[0.1] bg-white/[0.06] backdrop-blur-xl text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/[0.1] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.15),inset_0_1px_0_0_rgba(255,255,255,0.1)] active:scale-[0.97]"
            >
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
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 w-56 rounded-xl border border-red-900/30 bg-black/80 backdrop-blur-xl p-2 shadow-[0_8px_40px_rgba(0,0,0,0.6)] animate-in fade-in-0 slide-in-from-top-3 duration-200">
                {menuItems.map((item, i) => (
                  <button
                    key={item.to}
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(item.to);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm text-white/50 hover:text-white hover:bg-red-950/40 transition-colors duration-150"
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
