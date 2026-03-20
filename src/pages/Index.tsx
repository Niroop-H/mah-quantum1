import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import NeuralBackground from "@/components/NeuralBackground";
import { Brain, Globe, RefreshCw, Layers, ArrowRight, Sparkles } from "lucide-react";

const highlights = [
  { icon: Brain, title: "Unified AI Architecture", desc: "Integrated perception, memory, reasoning, planning, and learning in one system.", glow: "blue" as const },
  { icon: Globe, title: "Real-World Integration", desc: "Designed for deployment in complex, dynamic operational environments.", glow: "purple" as const },
  { icon: RefreshCw, title: "Continuous Learning", desc: "Self-improving intelligence that adapts and evolves with new data.", glow: "pink" as const },
  { icon: Layers, title: "Cross-Industry Deploy", desc: "Domain-agnostic core enabling rapid deployment across sectors.", glow: "multi" as const },
];

const industries = ["Manufacturing", "Logistics", "Healthcare", "SMEs"];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden animated-gradient-bg">
        <NeuralBackground className="opacity-70" nodeCount={65} connectionDistance={160} />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* Animated orbs */}
        <div className="orb orb-blue w-[500px] h-[500px] top-[10%] -left-40 animate-orb-drift" />
        <div className="orb orb-purple w-[400px] h-[400px] bottom-[15%] right-[-10%] animate-orb-drift-reverse" />
        <div className="orb orb-pink w-[300px] h-[300px] top-[60%] left-[30%] animate-pulse-glow" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary border border-primary/20">
              <Sparkles size={14} className="animate-pulse" />
              Next-Generation AI Infrastructure
            </div>

            <h1
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-foreground"
              style={{ textWrap: "balance" as any }}
            >
              Building the Infrastructure for{" "}
              <span className="gradient-text glow-text">Intelligent Systems</span>
            </h1>

            <p
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              style={{ textWrap: "pretty" as any }}
            >
              MAH Quantum develops unified, adaptive AI systems that integrate perception, memory, reasoning, planning, and learning into a single intelligence layer.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.35)] active:scale-[0.97]"
              >
                Request Demo
              </Link>
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass font-semibold text-sm text-foreground transition-all duration-300 hover:glow-blue active:scale-[0.97] gradient-border"
              >
                Explore Architecture <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom neon separator */}
        <div className="absolute bottom-0 left-0 right-0 neon-line" />
      </section>

      {/* Highlights */}
      <Section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <h2 className="font-display font-bold text-3xl sm:text-4xl">
              Why <span className="gradient-text">MAH Quantum</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              A new class of AI infrastructure — built for complexity, designed for deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <GlassCard key={i} glow glowColor={h.glow}>
                <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-4">
                  <h.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <div className="neon-line mx-auto max-w-4xl" />

      {/* Architecture Preview */}
      <Section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass rounded-3xl p-10 lg:p-16 glow-multi max-w-4xl mx-auto text-center space-y-6 relative overflow-hidden">
            <div className="orb orb-blue w-[300px] h-[300px] top-[-20%] right-[-10%] animate-pulse-glow" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl relative z-10">
              Quantum <span className="text-primary glow-text">[-0-]</span> Brain
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed relative z-10">
              Our modular, scalable AI framework integrates multiple intelligence layers — perception, memory, reasoning, planning, and learning — into a single adaptive system capable of cross-domain deployment.
            </p>
            <Link
              to="/architecture"
              className="relative z-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.35)] transition-all active:scale-[0.97]"
            >
              View Full Architecture <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Industries Preview */}
      <Section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Deployed Across <span className="gradient-text">Industries</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <div
                key={ind}
                className="glass rounded-2xl p-6 text-center font-display font-medium text-sm card-hover hover:glow-blue transition-all duration-300"
              >
                {ind}
              </div>
            ))}
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
          >
            Explore Industries <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass rounded-3xl p-10 lg:p-16 text-center space-y-8 gradient-border relative overflow-hidden">
            <div className="orb orb-purple w-[350px] h-[350px] top-[-30%] left-[-10%] animate-orb-drift" />
            <div className="orb orb-pink w-[250px] h-[250px] bottom-[-20%] right-[-5%] animate-orb-drift-reverse" />
            <h2
              className="font-display font-bold text-3xl sm:text-4xl relative z-10"
              style={{ textWrap: "balance" as any }}
            >
              Transform your operations with intelligent systems
            </h2>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.35)] transition-all active:scale-[0.97]"
              >
                Request Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass font-semibold text-sm text-foreground hover:glow-purple transition-all active:scale-[0.97]"
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
