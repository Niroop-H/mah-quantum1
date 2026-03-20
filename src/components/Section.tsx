import { forwardRef, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className = "" }, _ref) => {
  const scrollRef = useScrollReveal<HTMLElement>();
  return (
    <section ref={scrollRef} className={`section-reveal ${className}`}>
      {children}
    </section>
  );
});

Section.displayName = "Section";
export default Section;
