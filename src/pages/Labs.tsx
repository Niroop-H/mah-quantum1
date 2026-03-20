import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Beaker, Wrench, Trophy, Lightbulb } from "lucide-react";

const sections = [
  {
    icon: Lightbulb,
    title: "What We Do",
    content:
      "MAH Quantum Labs is the research and development arm focused on building next-generation AI systems. We tackle real-world problems through hands-on experimentation, rapid prototyping, and iterative deployment. Every project starts with a concrete challenge and ends with a deployed solution.",
  },
  {
    icon: Wrench,
    title: "How It Works",
    content:
      "Our process is engineering-first. We identify operational bottlenecks, design modular AI components using the Quantum [-0-] Brain framework, validate through simulation and controlled testing, then deploy into live environments with continuous monitoring and adaptation loops.",
  },
  {
    icon: Trophy,
    title: "Outcomes",
    content:
      "From predictive maintenance systems in manufacturing plants to intelligent scheduling engines in healthcare — Labs delivers production-grade solutions. Our work has resulted in measurable efficiency gains, cost reductions, and operational clarity for every partner we work with.",
  },
];

export default function Labs() {
  return (
    <Layout>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[140px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-2">
            <Beaker size={14} /> Research & Development
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl">
            MAH Quantum <span className="gradient-text">Labs</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hands-on AI system development. Real-world problem solving. An innovation-driven environment where engineering meets intelligence.
          </p>
        </div>
      </section>

      {sections.map((s, i) => (
        <Section key={i} className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <GlassCard glow={i === 0}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display font-bold text-xl">{s.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </GlassCard>
          </div>
        </Section>
      ))}
    </Layout>
  );
}
