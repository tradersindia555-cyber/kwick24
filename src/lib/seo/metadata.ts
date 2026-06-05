import type { Metadata } from "next";
import type { Service } from "@/types";
import { absoluteUrl, siteConfig } from "@/lib/site";

const defaultKeywords = [
  "home services",
  "car wash",
  "electrician",
  "plumber",
  "AC repair",
  "home cleaning",
  "on-demand services",
  "Kwick24",
  "Punjab",
];

export function buildServicesHubMetadata(): Metadata {
  const title = "All Home Services";
  const description =
    "Browse all available home services including repair, maintenance, installation, cleaning, and more.";
  const canonical = absoluteUrl("/services");

  return {
    title,
    description,
    keywords: [
      ...defaultKeywords,
      "all services",
      "service catalog",
      "book home services",
    ],
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export function buildServiceMetadata(service: Service): Metadata {
  const title = service.name;
  const description = service.description;
  const canonical = absoluteUrl(`/services/${service.slug}`);
  const keywords = [
    service.name,
    service.category,
    service.slug.replace(/-/g, " "),
    ...defaultKeywords,
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      type: "website",
      siteName: siteConfig.name,
      images: [{ url: service.image, alt: service.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [service.image],
    },
  };
}
