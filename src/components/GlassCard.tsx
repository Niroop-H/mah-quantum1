import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: "blue" | "purple" | "pink" | "multi";
  hover?: boolean;
}

const glowMap = {
  blue: "glow-blue",
  purple: "glow-purple",
  pink: "glow-pink",
  multi: "glow-multi",
};

export default function GlassCard({
  children,
  className = "",
  glow,
  glowColor = "blue",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 group relative overflow-hidden ${
        hover ? "card-hover" : ""
      } ${glow ? glowMap[glowColor] : ""} ${className}`}
    >
      {/* Radial highlight on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(500px circle at 50% 0%, hsl(var(--neon-blue) / 0.07), transparent 60%)",
        }}
      />
      {/* Subtle edge shimmer */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--neon-blue) / 0.04), transparent 40%, hsl(var(--neon-purple) / 0.03), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
