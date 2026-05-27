"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/data/testimonials";

import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="What Customers Say"
          subtitle="Real reviews from thousands of satisfied users"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <GlassCard className="p-6 md:p-8 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/40">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t.name}</h4>
                    <p className="text-xs text-zinc-500">
                      {t.service} · {t.city}
                    </p>
                  </div>
                </div>
                <StarRating rating={t.rating} size="md" className="mb-3" />
                <p className="text-zinc-400 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </GlassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
