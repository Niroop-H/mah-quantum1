import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlassCard({ children, className = "", glow }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden ${
        glow ? "glow-blue" : ""
      } ${className}`}
    >
      {/* Subtle radial highlight for frosted depth */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(400px circle at 50% 0%, hsl(var(--neon-blue) / 0.06), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
