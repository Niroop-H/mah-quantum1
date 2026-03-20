import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Target, Eye, Rocket } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <p className="mono-label">About</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-foreground">
            About MAH Quantum
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building the foundational infrastructure for intelligent systems — unified, adaptive, and ready for the real world.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 tech-divider" />
      </section>

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-4">
            <GlassCard>
              <div className="p-2 rounded-md bg-muted w-fit mb-4">
                <Target className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 text-foreground">Mission</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Build unified intelligence systems that integrate perception, memory, reasoning, planning, and learning into deployable solutions.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="p-2 rounded-md bg-muted w-fit mb-4">
                <Eye className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 text-foreground">Vision</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Move toward generalized adaptive intelligence — systems that understand, learn, and act autonomously across any domain.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="p-2 rounded-md bg-muted w-fit mb-4">
                <Rocket className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 text-foreground">Approach</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Real-world deployment first. Scalable architecture. Continuous learning. Every system we build is designed to operate, not just demonstrate.
              </p>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <GlassCard className="text-center space-y-5">
            <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center mx-auto">
              <span className="font-display font-bold text-lg text-foreground">NH</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm text-foreground">Niroop H</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5">Founder, MAH Quantum</p>
            </div>
            <div className="tech-divider max-w-[140px] mx-auto" />
            <blockquote className="text-xs text-muted-foreground italic leading-relaxed max-w-md mx-auto">
              "Not everything we value is meant to stay — some experiences exist to refine our direction and strengthen our commitment to what we're building."
            </blockquote>
          </GlassCard>
        </div>
      </Section>
    </Layout>
  );
}
