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
  },
  {
    icon: Database,
    title: "Memory Layer",
    desc: "Short-term context retention for ongoing tasks combined with long-term knowledge storage. Enables contextual awareness and historical pattern recognition.",
  },
  {
    icon: Cpu,
    title: "Reasoning Engine",
    desc: "Multi-step decision making and logic processing. Connects observations to conclusions through structured inference chains.",
  },
  {
    icon: Map,
    title: "Planning Module",
    desc: "Converts intelligence into actionable strategies. Generates, evaluates, and optimizes multi-step action plans in real time.",
  },
  {
    icon: RefreshCw,
    title: "Learning Loop",
    desc: "Continuous adaptation and improvement through feedback integration. The system refines its models with every interaction.",
  },
  {
    icon: Circle,
    title: "Zero-State Core [-0-]",
    desc: "Domain-agnostic intelligence layer enabling cross-industry deployment. Provides a blank-slate cognitive foundation that adapts to any vertical.",
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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl">
            Quantum <span className="text-primary">[-0-]</span> Brain
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A modular, scalable AI framework integrating multiple intelligence layers into one unified system capable of perception, reasoning, and autonomous action.
          </p>
        </div>
      </section>

      {/* Interactive Layers */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-center mb-12">Intelligence Layers</h2>
          <div className="grid lg:grid-cols-[280px_1fr] gap-6 max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {layers.map((l, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 text-left ${
                    active === i
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <l.icon size={18} />
                  {l.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <GlassCard glow className="min-h-[200px] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = layers[active].icon;
                  return <Icon className="h-8 w-8 text-primary" />;
                })()}
                <h3 className="font-display font-bold text-xl">{layers[active].title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{layers[active].desc}</p>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* D25@1007 Benchmark */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-center mb-4">
            <span className="text-primary">D25@1007</span> Benchmark
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Our proprietary benchmark measuring reasoning depth and composite intelligence across all operational dimensions.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {benchmarks.map((b, i) => (
              <GlassCard key={i}>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{b.label}</span>
                  <span className="font-display font-bold text-lg text-primary tabular-nums">
                    {b.value}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
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
