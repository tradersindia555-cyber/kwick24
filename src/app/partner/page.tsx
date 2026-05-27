"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/ui/PageTransition";
import { Briefcase, TrendingUp, Shield, Users } from "lucide-react";

const benefits = [
  { icon: Briefcase, title: "Flexible Work", desc: "Choose your hours and service areas" },
  { icon: TrendingUp, title: "Earn More", desc: "Competitive payouts with weekly settlements" },
  { icon: Shield, title: "Insurance Cover", desc: "Coverage for on-job incidents" },
  { icon: Users, title: "Steady Customers", desc: "Access to thousands of bookings daily" },
];

export default function PartnerPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
  };

  return (
    <PageTransition>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Become a Partner"
            subtitle="Join India's premium service network and grow your business"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <GlassCard key={b.title} className="p-6 text-center">
                  <Icon className="text-gold mx-auto mb-3" size={32} />
                  <h3 className="font-semibold text-white mb-1">{b.title}</h3>
                  <p className="text-sm text-zinc-500">{b.desc}</p>
                </GlassCard>
              );
            })}
          </div>

          <GlassCard className="max-w-xl mx-auto p-8">
            <h3 className="font-display text-xl font-bold text-gold mb-6">
              Partner Application
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none"
              />
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white focus:border-gold focus:outline-none"
              >
                <option value="">Select Service Type</option>
                <option value="cleaning">Home Cleaning</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="automotive">Automotive</option>
                <option value="other">Other</option>
              </select>
              <Button type="submit" className="w-full" size="lg" glow disabled={loading}>
                {loading ? "Submitting..." : "Apply Now"}
              </Button>
            </form>
          </GlassCard>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
