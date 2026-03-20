import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Brain, Globe, RefreshCw, Layers, ArrowRight } from "lucide-react";

const highlights = [
  { icon: Brain, title: "Unified AI Architecture", desc: "Integrated perception, memory, reasoning, planning, and learning in one system." },
  { icon: Globe, title: "Real-World Integration", desc: "Designed for deployment in complex, dynamic operational environments." },
  { icon: RefreshCw, title: "Continuous Learning Systems", desc: "Self-improving intelligence that adapts and evolves with new data." },
  { icon: Layers, title: "Cross-Industry Deployment", desc: "Domain-agnostic core enabling rapid deployment across sectors." },
];

const industries = ["Manufacturing", "Logistics", "Healthcare", "SMEs"];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-foreground" style={{ textWrap: "balance" as any }}>
              Building the Infrastructure for{" "}
              <span className="gradient-text">Intelligent Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl" style={{ textWrap: "pretty" as any }}>
              MAH Quantum develops unified, adaptive AI systems that integrate perception, memory, reasoning, planning, and learning into a single intelligence layer.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
              >
                Request Demo
              </Link>
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass font-medium text-sm text-foreground transition-all duration-200 hover:bg-muted/50 active:scale-[0.97]"
              >
                Explore Architecture <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-center mb-12">
            Why <span className="gradient-text">MAH Quantum</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <GlassCard key={i} glow>
                <h.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-base mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Architecture Preview */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass rounded-2xl p-8 lg:p-12 glow-blue max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-display font-bold text-2xl sm:text-3xl">
              Quantum <span className="text-primary">[-0-]</span> Brain
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our modular, scalable AI framework integrates multiple intelligence layers — perception, memory, reasoning, planning, and learning — into a single adaptive system capable of cross-domain deployment.
            </p>
            <Link
              to="/architecture"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-[0.97]"
            >
              View Full Architecture <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Industries Preview */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-10">
          <h2 className="font-display font-bold text-2xl sm:text-3xl">
            Deployed Across <span className="gradient-text">Industries</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <div key={ind} className="glass rounded-xl p-5 text-center font-display font-medium text-sm hover:glow-blue transition-all duration-300">
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
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass rounded-2xl p-8 lg:p-12 text-center space-y-6 gradient-border">
            <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ textWrap: "balance" as any }}>
              Transform your operations with intelligent systems
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-[0.97]"
              >
                Request Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass font-medium text-sm text-foreground hover:bg-muted/50 transition-all active:scale-[0.97]"
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
