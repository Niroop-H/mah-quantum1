import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Target, Eye, Rocket } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl">
            About <span className="gradient-text">MAH Quantum</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are building the foundational infrastructure for intelligent systems — unified, adaptive, and ready for the real world.
          </p>
        </div>
      </section>

      <Section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-5">
            <GlassCard glow>
              <Target className="h-7 w-7 text-primary mb-4" />
              <h3 className="font-display font-semibold text-base mb-2">Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build unified intelligence systems that integrate perception, memory, reasoning, planning, and learning into deployable solutions.
              </p>
            </GlassCard>
            <GlassCard>
              <Eye className="h-7 w-7 text-primary mb-4" />
              <h3 className="font-display font-semibold text-base mb-2">Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Move toward generalized adaptive intelligence — systems that understand, learn, and act autonomously across any domain.
              </p>
            </GlassCard>
            <GlassCard>
              <Rocket className="h-7 w-7 text-primary mb-4" />
              <h3 className="font-display font-semibold text-base mb-2">Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-world deployment first. Scalable architecture. Continuous learning. Every system we build is designed to operate, not just demonstrate.
              </p>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <GlassCard glow className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <span className="font-display font-bold text-xl text-primary">NH</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Niroop H</h3>
              <p className="text-sm text-muted-foreground">Founder, MAH Quantum</p>
            </div>
            <blockquote className="text-muted-foreground italic leading-relaxed max-w-lg mx-auto text-sm">
              "Not everything we value is meant to stay — some experiences exist to refine our direction and strengthen our commitment to what we're building."
            </blockquote>
          </GlassCard>
        </div>
      </Section>
    </Layout>
  );
}
