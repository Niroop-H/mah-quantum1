import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Factory, Truck, HeartPulse, Store, Zap, Users } from "lucide-react";

const glowColors = ["blue", "purple", "pink", "multi", "blue", "purple"] as const;

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    items: [
      { problem: "Undetected defects lead to costly recalls", solution: "AI-powered visual defect detection in real time", impact: "Up to 40% reduction in quality-related losses" },
      { problem: "Unplanned downtime from equipment failure", solution: "Predictive maintenance through sensor analysis", impact: "30% decrease in unplanned downtime" },
      { problem: "Workplace safety incidents", solution: "Real-time worker safety monitoring", impact: "Safer environments with 25% fewer incidents" },
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    items: [
      { problem: "Inefficient routing wastes fuel and time", solution: "Intelligent routing optimization", impact: "15-20% reduction in delivery costs" },
      { problem: "Fleet visibility gaps", solution: "Real-time fleet monitoring and analytics", impact: "Complete operational transparency" },
      { problem: "Warehouse inefficiency", solution: "AI-driven warehouse optimization", impact: "35% improvement in throughput" },
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare Operations",
    items: [
      { problem: "Scheduling conflicts and delays", solution: "Intelligent scheduling optimization", impact: "20% improvement in patient throughput" },
      { problem: "Resource misallocation", solution: "Dynamic resource allocation", impact: "Better utilization across departments" },
      { problem: "Administrative burden", solution: "Automated administrative workflows", impact: "50% reduction in manual admin tasks" },
    ],
  },
  {
    icon: Store,
    title: "SMEs",
    items: [
      { problem: "Customer data scattered across tools", solution: "Unified CRM automation", impact: "360° customer view with zero manual entry" },
      { problem: "Low engagement and retention", solution: "AI-driven customer engagement", impact: "25% increase in repeat business" },
      { problem: "Inventory mismatch", solution: "Predictive inventory management", impact: "Reduced stockouts by 30%" },
    ],
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    items: [
      { problem: "Lack of real-time energy visibility", solution: "Continuous energy monitoring", impact: "Granular consumption insights" },
      { problem: "Wasteful consumption patterns", solution: "AI-optimized energy distribution", impact: "15% reduction in energy costs" },
      { problem: "Unexpected infrastructure failures", solution: "Predictive fault detection", impact: "Proactive maintenance, fewer outages" },
    ],
  },
  {
    icon: Users,
    title: "HR & Workforce Intelligence",
    items: [
      { problem: "Slow, biased hiring processes", solution: "AI-powered candidate evaluation", impact: "40% faster hiring with better matches" },
      { problem: "Suboptimal workforce allocation", solution: "Data-driven hiring optimization", impact: "Right people, right roles" },
      { problem: "Limited performance visibility", solution: "Continuous performance analytics", impact: "Actionable insights for team growth" },
    ],
  },
];

export default function Industries() {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32 overflow-hidden animated-gradient-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="orb orb-purple w-[400px] h-[400px] top-[10%] right-[-10%] animate-orb-drift" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
            Industry <span className="gradient-text">Applications</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quantum [-0-] Brain deploys across verticals, solving real operational challenges with adaptive intelligence.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 neon-line" />
      </section>

      {industries.map((ind, idx) => (
        <Section key={idx} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-xl glass glow-blue">
                <ind.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl">{ind.title}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {ind.items.map((item, i) => (
                <GlassCard key={i} glow glowColor={glowColors[idx]}>
                  <div className="space-y-4">
                    <div>
                      <span className="inline-block text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-2 py-0.5 rounded-md">Problem</span>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <span className="inline-block text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-md">Solution</span>
                      <p className="text-sm text-foreground mt-1.5 leading-relaxed">{item.solution}</p>
                    </div>
                    <div>
                      <span className="inline-block text-[10px] font-bold text-neon-cyan uppercase tracking-widest bg-neon-cyan/10 px-2 py-0.5 rounded-md">Impact</span>
                      <p className="text-sm font-medium text-foreground mt-1.5">{item.impact}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </Layout>
  );
}
