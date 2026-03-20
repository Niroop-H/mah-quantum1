import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`tech-card rounded-lg p-6 ${hover ? "" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
