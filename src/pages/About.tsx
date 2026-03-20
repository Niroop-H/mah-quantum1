import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Target, Eye, Rocket } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32 overflow-hidden animated-gradient-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="orb orb-blue w-[450px] h-[450px] top-[-15%] right-[20%] animate-orb-drift" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
            About <span className="gradient-text">MAH Quantum</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are building the foundational infrastructure for intelligent systems — unified, adaptive, and ready for the real world.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 neon-line" />
      </section>

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard glow glowColor="blue">
              <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base mb-3">Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build unified intelligence systems that integrate perception, memory, reasoning, planning, and learning into deployable solutions.
              </p>
            </GlassCard>
            <GlassCard glow glowColor="purple">
              <div className="p-2.5 rounded-xl bg-secondary/10 w-fit mb-4">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-base mb-3">Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Move toward generalized adaptive intelligence — systems that understand, learn, and act autonomously across any domain.
              </p>
            </GlassCard>
            <GlassCard glow glowColor="pink">
              <div className="p-2.5 rounded-xl bg-accent/10 w-fit mb-4">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-base mb-3">Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-world deployment first. Scalable architecture. Continuous learning. Every system we build is designed to operate, not just demonstrate.
              </p>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <GlassCard glow glowColor="multi" className="text-center space-y-5">
            <div className="w-18 h-18 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px] mx-auto w-[72px] h-[72px]">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="font-display font-bold text-xl gradient-text">NH</span>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Niroop H</h3>
              <p className="text-sm text-muted-foreground">Founder, MAH Quantum</p>
            </div>
            <div className="neon-line max-w-[200px] mx-auto" />
            <blockquote className="text-muted-foreground italic leading-relaxed max-w-lg mx-auto text-sm">
              "Not everything we value is meant to stay — some experiences exist to refine our direction and strengthen our commitment to what we're building."
            </blockquote>
          </GlassCard>
        </div>
      </Section>
    </Layout>
  );
}
