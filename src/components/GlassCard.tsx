import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlassCard({ children, className = "", glow }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px] ${
        glow ? "glow-blue" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
