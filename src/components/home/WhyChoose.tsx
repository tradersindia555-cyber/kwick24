"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Wallet,
  Headphones,
  MapPin,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { whyChooseFeatures } from "@/lib/data/testimonials";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  "shield-check": ShieldCheck,
  clock: Clock,
  wallet: Wallet,
  headphones: Headphones,
  "map-pin": MapPin,
  users: Users,
};

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-[#080808]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Why Choose Kwick24"
          subtitle="Experience the difference of premium, trusted on-demand services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-6 md:p-8 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-4 group-hover:shadow-gold-glow transition-shadow">
                    <Icon className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
