import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Phone, Mail, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative py-24 lg:py-32 overflow-hidden animated-gradient-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="orb orb-blue w-[400px] h-[400px] bottom-[-20%] left-[10%] animate-orb-drift" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
            <span className="gradient-text">Contact</span> Us
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get in touch to explore how MAH Quantum can transform your operations.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 neon-line" />
      </section>

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">
            {/* Info */}
            <div className="space-y-4">
              <GlassCard glow glowColor="blue">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <a href="tel:+917259382794" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      +91 7259382794
                    </a>
                  </div>
                </div>
              </GlassCard>
              <GlassCard glow glowColor="purple">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href="mailto:nirooph1@gmail.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      nirooph1@gmail.com
                    </a>
                  </div>
                </div>
              </GlassCard>
              <GlassCard glow glowColor="pink">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">India</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Form */}
            <GlassCard glow glowColor="multi">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                    placeholder="your@email.com"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all resize-none"
                    placeholder="How can we help?"
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.35)] transition-all active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
