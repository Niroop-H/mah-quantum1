import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className={`section-reveal ${className}`}>
      {children}
    </section>
  );
}
