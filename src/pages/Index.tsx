import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Brain, Globe, RefreshCw, Layers, ArrowRight, Activity } from "lucide-react";

const highlights = [
  { icon: Brain, title: "Unified AI Architecture", desc: "Integrated perception, memory, reasoning, planning, and learning." },
  { icon: Globe, title: "Real-World Integration", desc: "Designed for complex, dynamic operational environments." },
  { icon: RefreshCw, title: "Continuous Learning", desc: "Self-improving intelligence that adapts with new data." },
  { icon: Layers, title: "Cross-Industry Deploy", desc: "Domain-agnostic core for rapid sector deployment." },
];

const industries = ["Manufacturing", "Logistics", "Healthcare", "SMEs"];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        {/* Soft center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-foreground/[0.02] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              <Activity size={12} />
              System Online
            </div>

            <h1
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-foreground"
              style={{ textWrap: "balance" as any }}
            >
              Building the Infrastructure for Intelligent Systems
            </h1>

            <p
              className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto"
              style={{ textWrap: "pretty" as any }}
            >
              MAH Quantum develops unified, adaptive AI systems that integrate perception, memory, reasoning, planning, and learning into a single intelligence layer.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium text-sm transition-all duration-200 hover:bg-foreground/90 active:scale-[0.97]"
              >
                Request Demo
              </Link>
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border font-medium text-sm text-foreground transition-all duration-200 hover:bg-muted active:scale-[0.97]"
              >
                Explore Architecture <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 tech-divider" />
      </section>

      {/* Highlights */}
      <Section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14 space-y-2">
            <p className="mono-label">Core capabilities</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              Why MAH Quantum
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <GlassCard key={i}>
                <div className="p-2 rounded-md bg-muted w-fit mb-4">
                  <h.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-2 text-foreground">{h.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <div className="tech-divider mx-auto max-w-4xl" />

      {/* Architecture Preview */}
      <Section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="tech-card rounded-lg p-10 lg:p-16 max-w-4xl mx-auto text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay-fine opacity-30 pointer-events-none" />
            <p className="mono-label relative z-10">Core Framework</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl relative z-10 text-foreground">
              Quantum [-0-] Brain D25@1007
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed relative z-10">
              Our modular, scalable AI framework integrates multiple intelligence layers — perception, memory, reasoning, planning, and learning — into a single adaptive system.
            </p>
            <Link
              to="/architecture"
              className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-all active:scale-[0.97]"
            >
              View Full Architecture <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Industries Preview */}
      <Section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-10">
          <div className="space-y-2">
            <p className="mono-label">Deployment</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              Deployed Across Industries
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <div
                key={ind}
                className="tech-card rounded-lg p-5 text-center font-display font-medium text-sm text-foreground"
              >
                {ind}
              </div>
            ))}
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-muted-foreground text-xs font-medium hover:text-foreground transition-colors"
          >
            Explore Industries <ArrowRight size={12} />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="tech-card rounded-lg p-10 lg:p-16 text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay-fine opacity-20 pointer-events-none" />
            <h2
              className="font-display font-bold text-2xl sm:text-3xl relative z-10 text-foreground"
              style={{ textWrap: "balance" as any }}
            >
              Transform your operations with intelligent systems
            </h2>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-all active:scale-[0.97]"
              >
                Request Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border font-medium text-sm text-foreground hover:bg-muted transition-all active:scale-[0.97]"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
