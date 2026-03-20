import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Eye, Database, Cpu, Map, RefreshCw, Circle } from "lucide-react";

const layers = [
  { icon: Eye, title: "Perception Layer", desc: "Real-time interpretation of visual, textual, and sensory data. Processes multi-modal inputs to build a coherent understanding of the environment." },
  { icon: Database, title: "Memory Layer", desc: "Short-term context retention for ongoing tasks combined with long-term knowledge storage. Enables contextual awareness and historical pattern recognition." },
  { icon: Cpu, title: "Reasoning Engine", desc: "Multi-step decision making and logic processing. Connects observations to conclusions through structured inference chains." },
  { icon: Map, title: "Planning Module", desc: "Converts intelligence into actionable strategies. Generates, evaluates, and optimizes multi-step action plans in real time." },
  { icon: RefreshCw, title: "Learning Loop", desc: "Continuous adaptation and improvement through feedback integration. The system refines its models with every interaction." },
  { icon: Circle, title: "Zero-State Core [-0-]", desc: "Domain-agnostic intelligence layer enabling cross-industry deployment. Provides a blank-slate cognitive foundation that adapts to any vertical." },
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
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-foreground/[0.02] blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <p className="mono-label">Core Framework</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-foreground">
            Quantum [-0-] Brain D25@1007
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A modular, scalable AI framework integrating multiple intelligence layers into one unified system capable of perception, reasoning, and autonomous action.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 tech-divider" />
      </section>

      {/* Interactive Layers */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <p className="mono-label">Modules</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">Intelligence Layers</h2>
          </div>
          <div className="grid lg:grid-cols-[260px_1fr] gap-4 max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {layers.map((l, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-3.5 py-3 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-200 text-left ${
                    active === i
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <l.icon size={15} />
                  {l.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <GlassCard className="min-h-[200px] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = layers[active].icon;
                    return (
                      <div className="p-2 rounded-md bg-muted">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                    );
                  })()}
                  <h3 className="font-display font-semibold text-lg text-foreground">{layers[active].title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{layers[active].desc}</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      <div className="tech-divider mx-auto max-w-4xl" />

      {/* D25@1007 Benchmark */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12 space-y-2">
            <p className="mono-label">Performance</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              D25@1007 Benchmark
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              Proprietary benchmark measuring reasoning depth and composite intelligence across all operational dimensions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benchmarks.map((b, i) => (
              <GlassCard key={i}>
                <div className="flex items-end justify-between mb-3">
                  <span className="text-xs font-medium text-foreground">{b.label}</span>
                  <span className="font-mono font-semibold text-lg text-foreground tabular-nums">
                    {b.value}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-foreground/60 transition-all duration-1000"
                    style={{ width: `${(b.value / b.max) * 100}%` }}
                  />
                </div>
                <p className="text-[11px] text-muted-foreground">{b.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
