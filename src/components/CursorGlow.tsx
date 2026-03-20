import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const el = glowRef.current;
    if (!el) return;

    let x = -200;
    let y = -200;
    let targetX = -200;
    let targetY = -200;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    let raf: number;
    const animate = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9999]"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--neon-blue) / 0.06) 0%, hsl(var(--neon-purple) / 0.03) 40%, transparent 70%)",
        filter: "blur(2px)",
        willChange: "transform",
      }}
    />
  );
}
