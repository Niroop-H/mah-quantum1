import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Eye, Database, Cpu, Map, RefreshCw, Circle } from "lucide-react";

const layers = [
  {
    icon: Eye,
    title: "Perception Layer",
    desc: "Real-time interpretation of visual, textual, and sensory data. Processes multi-modal inputs to build a coherent understanding of the environment.",
    color: "blue" as const,
  },
  {
    icon: Database,
    title: "Memory Layer",
    desc: "Short-term context retention for ongoing tasks combined with long-term knowledge storage. Enables contextual awareness and historical pattern recognition.",
    color: "purple" as const,
  },
  {
    icon: Cpu,
    title: "Reasoning Engine",
    desc: "Multi-step decision making and logic processing. Connects observations to conclusions through structured inference chains.",
    color: "blue" as const,
  },
  {
    icon: Map,
    title: "Planning Module",
    desc: "Converts intelligence into actionable strategies. Generates, evaluates, and optimizes multi-step action plans in real time.",
    color: "pink" as const,
  },
  {
    icon: RefreshCw,
    title: "Learning Loop",
    desc: "Continuous adaptation and improvement through feedback integration. The system refines its models with every interaction.",
    color: "purple" as const,
  },
  {
    icon: Circle,
    title: "Zero-State Core [-0-]",
    desc: "Domain-agnostic intelligence layer enabling cross-industry deployment. Provides a blank-slate cognitive foundation that adapts to any vertical.",
    color: "multi" as const,
  },
];

const benchmarks = [
  { label: "D25 — Depth of Reasoning", value: 25, max: 30, desc: "Multi-layer logical inference depth" },
  { label: "Composite Intelligence Score", value: 1007, max: 1200, desc: "Aggregate performance across benchmarks" },
  { label: "Adaptation Speed", value: 94, max: 100, desc: "% efficiency gain after first deployment cycle" },
  { label: "Cross-Domain Transfer", value: 89, max: 100, desc: "% knowledge retention across verticals" },
];

export default function Architecture() {
  const [active, setActive] = useState(0);

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden animated-gradient-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="orb orb-blue w-[500px] h-[500px] top-[-20%] left-[40%] animate-orb-drift" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
            Quantum <span className="text-primary glow-text">[-0-]</span> Brain
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A modular, scalable AI framework integrating multiple intelligence layers into one unified system capable of perception, reasoning, and autonomous action.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 neon-line" />
      </section>

      {/* Interactive Layers */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-center mb-14">Intelligence Layers</h2>
          <div className="grid lg:grid-cols-[280px_1fr] gap-6 max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {layers.map((l, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 text-left ${
                    active === i
                      ? "bg-primary text-primary-foreground shadow-[0_0_24px_hsl(var(--neon-blue)/0.25)]"
                      : "glass text-muted-foreground hover:text-foreground card-hover"
                  }`}
                >
                  <l.icon size={18} />
                  {l.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <GlassCard glow glowColor={layers[active].color} className="min-h-[220px] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = layers[active].icon;
                  return (
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  );
                })()}
                <h3 className="font-display font-bold text-xl">{layers[active].title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">{layers[active].desc}</p>
            </GlassCard>
          </div>
        </div>
      </Section>

      <div className="neon-line mx-auto max-w-4xl" />

      {/* D25@1007 Benchmark */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-center mb-4">
            <span className="text-primary glow-text">D25@1007</span> Benchmark
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Our proprietary benchmark measuring reasoning depth and composite intelligence across all operational dimensions.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {benchmarks.map((b, i) => (
              <GlassCard key={i} glow glowColor={i % 2 === 0 ? "blue" : "purple"}>
                <div className="flex items-end justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">{b.label}</span>
                  <span className="font-display font-bold text-xl text-primary tabular-nums">
                    {b.value}
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-muted/60 overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000"
                    style={{ width: `${(b.value / b.max) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
