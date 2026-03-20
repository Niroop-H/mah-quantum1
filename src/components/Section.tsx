import { forwardRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className = "", stagger }, _ref) => {
  const scrollRef = useScrollReveal<HTMLElement>();
  return (
    <section ref={scrollRef} className={`section-reveal ${stagger ? "stagger-children" : ""} ${className}`}>
      {children}
    </section>
  );
});

Section.displayName = "Section";
export default Section;
