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
  },
  {
    icon: Wrench,
    title: "How It Works",
    points: [
      "Engineering-first — identify operational bottlenecks",
      "Design modular AI components using Quantum [-0-] Brain",
      "Validate through simulation, deploy into live environments",
    ],
  },
  {
    icon: Trophy,
    title: "Outcomes",
    points: [
      "Predictive maintenance systems in manufacturing",
      "Intelligent scheduling engines in healthcare",
      "Measurable efficiency gains for every partner",
    ],
  },
];

export default function Labs() {
  return (
    <Layout>
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            <Beaker size={12} /> R&D Division
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-foreground">
            MAH Quantum Labs
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hands-on AI system development. Real-world problem solving. An innovation-driven environment where engineering meets intelligence.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 tech-divider" />
      </section>

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            {sections.map((s, i) => (
              <GlassCard key={i}>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="p-2 rounded-md bg-muted">
                    <s.icon className="h-4 w-4 text-foreground" />
                  </div>
                  <h2 className="font-display font-semibold text-sm text-foreground">{s.title}</h2>
                </div>
                <ul className="space-y-3">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="pulse-dot mt-1.5 shrink-0" />
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
