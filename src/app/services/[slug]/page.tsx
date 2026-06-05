import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, IndianRupee, ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceDetailClient } from "./ServiceDetailClient";
import {
  getRelatedServices,
  getServiceBySlug,
  services,
} from "@/lib/data/services";
import { buildServiceMetadata } from "@/lib/seo/metadata";
import {
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/seo/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return buildServiceMetadata(service);
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedServices = getRelatedServices(slug);
  const features = [
    "Verified professionals",
    "Same-day availability",
    "Transparent pricing",
    "Quality guarantee",
    "Real-time tracking",
  ];

  return (
    <>
      <JsonLd
        data={[buildServiceSchema(service), buildLocalBusinessSchema()]}
      />

      <div className="container mx-auto px-4 pb-16 pt-24 md:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.name },
          ]}
        />

        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-2 text-gold/80 transition-colors hover:text-gold"
        >
          <ArrowLeft size={18} />
          Back to Services
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20 shadow-gold-glow">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            <span className="absolute bottom-4 left-4 rounded-full border border-gold/30 bg-gold/20 px-3 py-1 text-sm text-gold">
              {service.category}
            </span>
          </div>

          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              {service.name}
            </h1>
            <p className="mb-6 leading-relaxed text-zinc-400">
              {service.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gold">
                <IndianRupee size={20} />
                <span className="text-2xl font-bold">{service.price}</span>
                <span className="text-sm text-zinc-500">starting</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Clock size={20} className="text-gold" />
                <span>{service.duration}</span>
              </div>
            </div>

            <ul className="mb-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle size={18} className="shrink-0 text-gold" />
                  {f}
                </li>
              ))}
            </ul>

            <ServiceDetailClient
              serviceId={service.id}
              serviceName={service.name}
            />
          </div>
        </div>

        <RelatedServices slugs={relatedServices.map((s) => s.slug)} />
      </div>
    </>
  );
}
