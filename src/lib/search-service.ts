import {
  serviceCategories,
  services,
} from "@/lib/data/services";
import type { SerializableServiceCategory } from "@/lib/data/services";

export type ServiceSearchResult =
  | { type: "slug"; slug: string }
  | { type: "search"; query: string };

const SERVICE_ALIASES: Record<string, string> = {
  ac: "ac-repair",
  "ac repair": "ac-repair",
  "ac service": "ac-repair",
  "ac services": "ac-repair",
  "air conditioner": "ac-repair",
  "air conditioning": "ac-repair",
  "air conditioner repair": "ac-repair",
  plumber: "plumber",
  plumbing: "plumber",
  electrician: "electrician",
  electrical: "electrician",
  "electrical service": "electrician",
  cleaning: "home-cleaning",
  "home cleaning": "home-cleaning",
  "deep cleaning": "home-cleaning",
  "cleaning service": "home-cleaning",
  "car wash": "car-wash",
  carwash: "car-wash",
  "puncture repair": "puncture-repair",
  puncture: "puncture-repair",
  "bike service": "bike-service",
  "bike repair": "bike-service",
  painter: "painter",
  painting: "painter",
  carpenter: "carpenter",
  carpentry: "carpenter",
  "movers and packers": "movers-packers",
  "movers & packers": "movers-packers",
  movers: "movers-packers",
  packing: "movers-packers",
};

function registerAlias(alias: string, slug: string) {
  SERVICE_ALIASES[normalizeSearchQuery(alias)] = slug;
}

for (const category of serviceCategories) {
  registerAlias(category.name, category.slug);
  registerAlias(category.slug, category.slug);
  registerAlias(category.slug.replace(/-/g, " "), category.slug);
}

for (const service of services) {
  registerAlias(service.name, service.slug);
}

export function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase().replace(/\s+/g, " ");
}

function resolveSlugFromAliases(query: string): string | undefined {
  const normalized = normalizeSearchQuery(query);
  if (!normalized) return undefined;

  if (SERVICE_ALIASES[normalized]) {
    return SERVICE_ALIASES[normalized];
  }

  const slugCandidate = normalized.replace(/\s+/g, "-");
  if (serviceCategories.some((s) => s.slug === slugCandidate)) {
    return slugCandidate;
  }

  return undefined;
}

function fuzzyMatchSlug(query: string): string | undefined {
  const normalized = normalizeSearchQuery(query);
  if (!normalized) return undefined;

  const exactName = serviceCategories.find(
    (s) => normalizeSearchQuery(s.name) === normalized,
  );
  if (exactName) return exactName.slug;

  const partial = serviceCategories.find((s) => {
    const name = normalizeSearchQuery(s.name);
    return name.includes(normalized) || normalized.includes(name);
  });
  if (partial) return partial.slug;

  const servicePartial = services.find((s) => {
    const name = normalizeSearchQuery(s.name);
    return name.includes(normalized) || normalized.includes(name);
  });
  return servicePartial?.slug;
}

export function resolveServiceSearch(query: string): ServiceSearchResult {
  const normalized = normalizeSearchQuery(query);

  if (!normalized) {
    return { type: "search", query: "" };
  }

  const aliasSlug = resolveSlugFromAliases(normalized);
  if (aliasSlug) {
    return { type: "slug", slug: aliasSlug };
  }

  const fuzzySlug = fuzzyMatchSlug(normalized);
  if (fuzzySlug) {
    return { type: "slug", slug: fuzzySlug };
  }

  return { type: "search", query: normalized };
}

export function getServiceSearchPath(query: string): string {
  const result = resolveServiceSearch(query);

  if (result.type === "slug") {
    return `/services/${result.slug}`;
  }

  if (!result.query) {
    return "/services";
  }

  return `/services?q=${encodeURIComponent(result.query)}`;
}

export function filterServiceCategories(
  items: SerializableServiceCategory[],
  query: string,
  categoryFilter: string | null,
): SerializableServiceCategory[] {
  const normalized = normalizeSearchQuery(query);

  return items.filter((item) => {
    const matchesCategory =
      !categoryFilter || categoryFilter === "all" || item.category === categoryFilter;

    if (!normalized) return matchesCategory;

    const haystack = normalizeSearchQuery(
      `${item.name} ${item.description} ${item.slug.replace(/-/g, " ")} ${item.category}`,
    );

    return matchesCategory && haystack.includes(normalized);
  });
}
