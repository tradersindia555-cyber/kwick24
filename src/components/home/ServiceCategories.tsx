"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { serviceCategories } from "@/lib/data/services";
import { ServiseCard } from "../ui/ServicesCard";

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
          {serviceCategories.map((service) =><ServiseCard service={service}/>
          )}
        </motion.div>
      </div>
    </section>
  );
}
