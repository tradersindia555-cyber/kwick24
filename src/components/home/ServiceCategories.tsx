"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Bike,
  Home,
  Zap,
  Droplets,
  Wind,
  Paintbrush,
  Hammer,
  Truck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { serviceCategories } from "@/lib/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  car: Car,
  bike: Bike,
  home: Home,
  zap: Zap,
  droplets: Droplets,
  wind: Wind,
  paintbrush: Paintbrush,
  hammer: Hammer,
  truck: Truck,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServiceCategories() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <SectionHeading
          title="Our Services"
          subtitle="Premium home and automotive services delivered by verified professionals"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {serviceCategories.map((service) => {
            const Icon = iconMap[service.icon] ?? Home;
            return (
              <motion.div key={service.slug} variants={item}>
                <Link href={`/services/${service.slug}`}>
                  <GlassCard className="p-6 md:p-8 text-center group cursor-pointer h-full">
                    <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center group-hover:shadow-gold-glow group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-gold" size={28} />
                    </div>
                    <h3 className="font-medium text-white text-sm md:text-base group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
