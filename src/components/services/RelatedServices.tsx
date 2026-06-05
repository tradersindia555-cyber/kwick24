"use client";

import Link from "next/link";
import { ServiseCard } from "@/components/ui/ServicesCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSerializableServiceCategories } from "@/lib/data/services";

interface RelatedServicesProps {
  slugs: string[];
}

export function RelatedServices({ slugs }: RelatedServicesProps) {
  if (slugs.length === 0) return null;

  const allServices = getSerializableServiceCategories();
  const cards = slugs
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter((s): s is (typeof allServices)[number] => Boolean(s));

  if (cards.length === 0) return null;

  return (
    <section className="mt-16 border-t border-gold/10 pt-16">
      <SectionHeading
        title="Related Services"
        subtitle="Explore more services in the same category"
        align="left"
        className="mb-8 md:mb-10"
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        {cards.map((service) => (
          <ServiseCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/services"
          className="text-sm text-gold/80 transition-colors hover:text-gold"
        >
          View all services →
        </Link>
      </div>
    </section>
  );
}
