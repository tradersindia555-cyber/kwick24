"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorksSteps } from "@/lib/data/testimonials";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  search: Search,
  "calendar-check": CalendarCheck,
  "user-check": UserCheck,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#080808] relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <SectionHeading
          title="How It Works"
          subtitle="Book your service in three simple steps"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {howItWorksSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Search;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/5 border-2 border-gold/50 flex items-center justify-center shadow-gold-glow">
                    <Icon className="text-gold" size={32} />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-black font-bold text-sm flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
