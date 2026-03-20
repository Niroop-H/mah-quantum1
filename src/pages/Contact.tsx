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
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-4">
          <p className="mono-label">Get in touch</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-foreground">
            Contact Us
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Explore how MAH Quantum can transform your operations.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 tech-divider" />
      </section>

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-4">
            <div className="space-y-3">
              <GlassCard>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-muted">
                    <Phone className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="mono-label">Phone</p>
                    <a href="tel:+917259382794" className="text-xs font-medium text-foreground hover:underline">
                      +91 7259382794
                    </a>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-muted">
                    <Mail className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="mono-label">Email</p>
                    <a href="mailto:nirooph1@gmail.com" className="text-xs font-medium text-foreground hover:underline">
                      nirooph1@gmail.com
                    </a>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-muted">
                    <MapPin className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="mono-label">Location</p>
                    <p className="text-xs font-medium text-foreground">India</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mono-label mb-1.5 block">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all"
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="mono-label mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all"
                    placeholder="your@email.com"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="mono-label mb-1.5 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-3.5 py-2.5 rounded-md bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all resize-none"
                    placeholder="How can we help?"
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-all active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
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
