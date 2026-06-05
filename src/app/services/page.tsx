import { Suspense } from "react";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicesHubContent } from "@/components/services/ServicesHubContent";
import { buildServicesHubMetadata } from "@/lib/seo/metadata";
import {
  buildServiceCatalogSchema,
  buildWebsiteSchema,
} from "@/lib/seo/structured-data";
import {
  getSerializableServiceCategories,
  getUniqueServiceCategories,
  POPULAR_SERVICE_SLUGS,
} from "@/lib/data/services";

export const metadata: Metadata = buildServicesHubMetadata();

export const revalidate = 3600;

export default function ServicesPage() {
  const services = getSerializableServiceCategories();
  const categories = getUniqueServiceCategories();

  return (
    <>
      <JsonLd data={[buildWebsiteSchema(), buildServiceCatalogSchema()]} />

      <div className="pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />
        </div>

        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-20 text-zinc-400 md:px-6">
              Loading services...
            </div>
          }
        >
          <ServicesHubContent
            services={services}
            categories={categories}
            popularSlugs={POPULAR_SERVICE_SLUGS}
          />
        </Suspense>
      </div>
    </>
  );
}
