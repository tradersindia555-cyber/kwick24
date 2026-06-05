"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { resolveServiceIcon } from "@/lib/service-icons";

interface ServiceCardData {
  name: string;
  slug: string;
  description?: string;
  icon?: LucideIcon;
  iconKey?: string;
}

interface ServiseCardProps {
  varient?: "left" | "center" | "menu";
  className?: string;
  service: ServiceCardData;
  withDesc?: boolean;
}

export function ServiseCard({
  varient = "center",
  className,
  service,
  withDesc = false,
}: ServiseCardProps) {
  const Icon = resolveServiceIcon(service.icon, service.iconKey);

  return (
    <Link href={`/services/${service.slug}`} aria-label={service.name}>
      <GlassCard
        className={`p-6 md:p-8 ${varient != "left" ? "text-center" : ""} group h-full cursor-pointer ${className ?? ""}`}
      >
        <div
          className={`mb-4 h-14 w-14 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/20 to-gold/5 md:h-16 md:w-16 ${varient != "left" ? "mx-auto" : ""} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-gold-glow`}
        >
          <Icon className="text-gold" size={28} />
        </div>
        <h3 className="text-sm font-medium text-white transition-colors group-hover:text-gold md:text-base">
          {service.name}
        </h3>
        {withDesc && service.description && (
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            {service.description}
          </p>
        )}
      </GlassCard>
    </Link>
  );
}
