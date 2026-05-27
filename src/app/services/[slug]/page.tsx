import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, IndianRupee, ArrowLeft, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetailClient } from "./ServiceDetailClient";
import { getServiceBySlug, services } from "@/lib/data/services";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const features = [
    "Verified professionals",
    "Same-day availability",
    "Transparent pricing",
    "Quality guarantee",
    "Real-time tracking",
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-gold/80 hover:text-gold mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20 shadow-gold-glow">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-gold/20 text-gold text-sm border border-gold/30">
                {service.category}
              </span>
            </div>

            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                {service.name}
              </h1>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-gold">
                  <IndianRupee size={20} />
                  <span className="text-2xl font-bold">{service.price}</span>
                  <span className="text-zinc-500 text-sm">starting</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock size={20} className="text-gold" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle size={18} className="text-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <ServiceDetailClient serviceId={service.id} serviceName={service.name} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
