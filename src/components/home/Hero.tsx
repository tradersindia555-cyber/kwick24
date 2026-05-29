"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

import { heroSlides } from "@/lib/data/services";
import { stats } from "@/lib/data/testimonials";

import { LocationSearch } from "./LocationSearch";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const floatingServices = [
  { name: "Car Wash", delay: 0 },
  { name: "Electrician", delay: 0.2 },
  { name: "AC Service", delay: 0.4 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="h-full w-full hero-swiper"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full min-h-screen w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/75 to-[#0A0A0A]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Accent lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-gold/60 to-transparent z-10" />
      <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-gold/40 to-transparent z-10" />

      {/* Floating cards */}
      <div className="hidden xl:block absolute right-8 top-1/3 z-10 space-y-4">
        {floatingServices.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + item.delay }}
          >
            <GlassCard className="px-4 py-3 flex items-center gap-2" glow>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-sm text-white font-medium">
                {item.name}
              </span>

              <span className="text-xs text-gold">Available</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-6">
              ✦ Premium On-Demand Services
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Professional Services at{" "}
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                Your Doorstep
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl">
              Book trusted workers instantly with Kwick24 Services
            </p>

            {/* Separate Component */}
            <LocationSearch />

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" glow>
                Book Service
              </Button>

              <Link href="/partner">
                <Button variant="outline" size="lg">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat) => (
              <GlassCard
                key={stat.label}
                className="p-4 md:p-5 text-center"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-gold mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>

                <p className="text-xs md:text-sm text-zinc-500">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
