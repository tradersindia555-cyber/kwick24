import type { Service } from "@/types";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getSerializableServiceCategories } from "@/lib/data/services";

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/services")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildServiceCatalogSchema() {
  const items = getSerializableServiceCategories();

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kwick24 Home Services Catalog",
    description:
      "Complete catalog of professional home and automotive services offered by Kwick24.",
    numberOfItems: items.length,
    itemListElement: items.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(`/services/${service.slug}`),
        provider: {
          "@type": "LocalBusiness",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+91${siteConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.location,
      addressCountry: "IN",
    },
    areaServed: siteConfig.location,
    description: siteConfig.description,
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    image: service.image,
    serviceType: service.category,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: `+91${siteConfig.phone}`,
      address: {
        "@type": "PostalAddress",
        addressRegion: siteConfig.location,
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^\d.]/g, "") || "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
}
