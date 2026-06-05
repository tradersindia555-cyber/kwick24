"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { ServiseCard } from "@/components/ui/ServicesCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { useBooking } from "@/context/BookingContext";
import {
  filterServiceCategories,
  getServiceSearchPath,
  normalizeSearchQuery,
} from "@/lib/search-service";
import type { SerializableServiceCategory } from "@/lib/data/services";
import { cn } from "@/lib/utils";

interface ServicesHubContentProps {
  services: SerializableServiceCategory[];
  categories: string[];
  popularSlugs: string[];
}

export function ServicesHubContent({
  services,
  categories,
  popularSlugs,
}: ServicesHubContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { openBooking } = useBooking();

  const initialQuery = searchParams.get("q") ?? "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    setSearchQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const filteredServices = useMemo(
    () => filterServiceCategories(services, searchQuery, categoryFilter),
    [services, searchQuery, categoryFilter],
  );

  const popularServices = useMemo(
    () => services.filter((s) => popularSlugs.includes(s.slug)),
    [services, popularSlugs],
  );

  const syncUrl = useCallback(
    (query: string) => {
      const normalized = normalizeSearchQuery(query);
      const params = new URLSearchParams(searchParams.toString());

      if (normalized) {
        params.set("q", normalized);
      } else {
        params.delete("q");
      }

      const next = params.toString();
      router.replace(next ? `/services?${next}` : "/services", { scroll: false });
    },
    [router, searchParams],
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const path = getServiceSearchPath(searchQuery);

    if (path.startsWith("/services/") && !path.includes("?")) {
      router.push(path);
      return;
    }

    syncUrl(searchQuery);
  };

  const showPopular = !searchQuery && !categoryFilter;

  return (
    <>
      <section className="relative pb-12 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] via-transparent to-transparent pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="mt-4 text-lg text-zinc-400 md:text-xl">
              Choose from our professional home services.
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              {services.length} services available across{" "}
              {categories.length} categories
            </p>
          </div>

          <form
            onSubmit={handleSearchSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gold/20 bg-black/40 px-4 py-3 backdrop-blur-xl shadow-gold-glow">
              <Search className="shrink-0 text-gold" size={20} />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  syncUrl(e.target.value);
                }}
                placeholder="Search services — AC Repair, Plumber, Cleaning..."
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 md:text-base"
                aria-label="Search services"
              />
            </div>
            <Button type="submit" glow className="shrink-0">
              Search
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategoryFilter(null)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                !categoryFilter
                  ? "border-gold/40 bg-gold/10 text-gold"
                  : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-gold/25 hover:text-gold",
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setCategoryFilter((prev) =>
                    prev === category ? null : category,
                  )
                }
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  categoryFilter === category
                    ? "border-gold/40 bg-gold/10 text-gold"
                    : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-gold/25 hover:text-gold",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-xs uppercase tracking-widest text-zinc-500">
              Quick navigation:
            </span>
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400 transition-colors hover:border-gold/25 hover:text-gold"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {showPopular && (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Popular Services"
              subtitle="Most requested services from our customers"
              align="left"
              className="mb-8 md:mb-10"
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
              {popularServices.map((service) => (
                <ServiseCard key={service.slug} service={service} withDesc />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title={searchQuery || categoryFilter ? "Search Results" : "All Services"}
            subtitle={
              filteredServices.length > 0
                ? `${filteredServices.length} service${filteredServices.length === 1 ? "" : "s"} found`
                : "No services match your search. Try a different keyword or category."
            }
            align="left"
            className="mb-8 md:mb-10"
          />

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
              {filteredServices.map((service) => (
                <ServiseCard key={service.slug} service={service} withDesc />
              ))}
            </div>
          ) : (
            <GlassCard className="p-8 text-center">
              <p className="text-zinc-400">
                We couldn&apos;t find a match. Browse all services or contact us
                for custom requests.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter(null);
                    router.replace("/services", { scroll: false });
                  }}
                >
                  Clear filters
                </Button>
                <Link href="/contact-us">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </GlassCard>
          )}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <GlassCard className="relative overflow-hidden p-8 md:p-12" glow>
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative text-center md:text-left">
              <div className="md:flex md:items-end md:justify-between md:gap-8">
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                    Ready to Book a Service?
                  </h2>
                  <p className="mt-3 text-lg text-zinc-400">
                    Get verified professionals at your doorstep with transparent
                    pricing and premium support.
                  </p>
                </div>
                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row md:mt-0 md:w-auto md:shrink-0">
                  <Button
                    className="w-full sm:w-auto"
                    size="lg"
                    glow
                    onClick={() => openBooking()}
                  >
                    Book Now
                  </Button>
                  <Link href="/contact-us" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
