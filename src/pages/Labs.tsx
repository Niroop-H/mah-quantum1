import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Beaker, Wrench, Trophy, Lightbulb } from "lucide-react";

const sections = [
  {
    icon: Lightbulb,
    title: "What We Do",
    points: [
      "Build next-generation AI systems through hands-on R&D",
      "Tackle real-world problems with rapid prototyping",
      "Every project starts with a concrete challenge, ends with a deployed solution",
    ],
    glow: "blue" as const,
  },
  {
    icon: Wrench,
    title: "How It Works",
    points: [
      "Engineering-first process — identify operational bottlenecks",
      "Design modular AI components using Quantum [-0-] Brain framework",
      "Validate through simulation, deploy into live environments with continuous monitoring",
    ],
    glow: "purple" as const,
  },
  {
    icon: Trophy,
    title: "Outcomes",
    points: [
      "Predictive maintenance systems in manufacturing plants",
      "Intelligent scheduling engines in healthcare",
      "Measurable efficiency gains and cost reductions for every partner",
    ],
    glow: "pink" as const,
  },
];

export default function Labs() {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32 overflow-hidden animated-gradient-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="orb orb-pink w-[400px] h-[400px] top-[20%] left-[-10%] animate-orb-drift" />
        <div className="orb orb-blue w-[300px] h-[300px] bottom-[10%] right-[-5%] animate-orb-drift-reverse" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary border border-primary/20">
            <Beaker size={14} /> Research & Development
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
            MAH Quantum <span className="gradient-text">Labs</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hands-on AI system development. Real-world problem solving. An innovation-driven environment where engineering meets intelligence.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 neon-line" />
      </section>

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <GlassCard key={i} glow glowColor={s.glow}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-lg">{s.title}</h2>
                </div>
                <ul className="space-y-3">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
