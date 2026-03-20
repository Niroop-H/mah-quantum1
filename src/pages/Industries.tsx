import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Factory, Truck, HeartPulse, Store, Zap, Users } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    items: [
      { problem: "Undetected defects lead to costly recalls", solution: "AI-powered visual defect detection", impact: "40% reduction in quality losses" },
      { problem: "Unplanned downtime from equipment failure", solution: "Predictive maintenance via sensor analysis", impact: "30% decrease in unplanned downtime" },
      { problem: "Workplace safety incidents", solution: "Real-time worker safety monitoring", impact: "25% fewer safety incidents" },
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    items: [
      { problem: "Inefficient routing wastes fuel and time", solution: "Intelligent routing optimization", impact: "15-20% reduction in delivery costs" },
      { problem: "Fleet visibility gaps", solution: "Real-time fleet monitoring", impact: "Complete operational transparency" },
      { problem: "Warehouse inefficiency", solution: "AI-driven warehouse optimization", impact: "35% improvement in throughput" },
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare Operations",
    items: [
      { problem: "Scheduling conflicts and delays", solution: "Intelligent scheduling optimization", impact: "20% improvement in throughput" },
      { problem: "Resource misallocation", solution: "Dynamic resource allocation", impact: "Better utilization across depts" },
      { problem: "Administrative burden", solution: "Automated admin workflows", impact: "50% reduction in manual tasks" },
    ],
  },
  {
    icon: Store,
    title: "SMEs",
    items: [
      { problem: "Customer data scattered across tools", solution: "Unified CRM automation", impact: "360° customer view" },
      { problem: "Low engagement and retention", solution: "AI-driven customer engagement", impact: "25% increase in repeat business" },
      { problem: "Inventory mismatch", solution: "Predictive inventory management", impact: "30% reduced stockouts" },
    ],
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    items: [
      { problem: "Lack of real-time energy visibility", solution: "Continuous energy monitoring", impact: "Granular consumption insights" },
      { problem: "Wasteful consumption patterns", solution: "AI-optimized energy distribution", impact: "15% reduction in energy costs" },
      { problem: "Unexpected infrastructure failures", solution: "Predictive fault detection", impact: "Proactive maintenance" },
    ],
  },
  {
    icon: Users,
    title: "HR & Workforce Intelligence",
    items: [
      { problem: "Slow, biased hiring processes", solution: "AI-powered candidate evaluation", impact: "40% faster hiring" },
      { problem: "Suboptimal workforce allocation", solution: "Data-driven hiring optimization", impact: "Right people, right roles" },
      { problem: "Limited performance visibility", solution: "Continuous performance analytics", impact: "Actionable growth insights" },
    ],
  },
];

export default function Industries() {
  return (
    <Layout>
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <p className="mono-label">Deployment Verticals</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-foreground">
            Industry Applications
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Quantum [-0-] Brain deploys across verticals, solving real operational challenges with adaptive intelligence.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 tech-divider" />
      </section>

      {industries.map((ind, idx) => (
        <Section key={idx} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-md bg-muted">
                <ind.icon className="h-5 w-5 text-foreground" />
              </div>
              <h2 className="font-display font-semibold text-lg text-foreground">{ind.title}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              {ind.items.map((item, i) => (
                <GlassCard key={i}>
                  <div className="space-y-3">
                    <div>
                      <span className="mono-label text-muted-foreground">Problem</span>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <span className="mono-label text-foreground">Solution</span>
                      <p className="text-xs text-foreground mt-1 leading-relaxed">{item.solution}</p>
                    </div>
                    <div>
                      <span className="mono-label text-foreground">Impact</span>
                      <p className="text-xs font-medium text-foreground mt-1">{item.impact}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
          {idx < industries.length - 1 && <div className="tech-divider mx-auto max-w-4xl mt-16" />}
        </Section>
      ))}
    </Layout>
  );
}
