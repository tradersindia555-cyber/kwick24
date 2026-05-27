"use client";

import { motion } from "framer-motion";
import { GoldDivider } from "./GoldDivider";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <GoldDivider className="mb-6 max-w-xs mx-auto" />
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-zinc-400 text-lg max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
