"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StarRating } from "@/components/ui/StarRating";
import { Button } from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";
import { workers } from "@/lib/data/workers";
import { formatRating } from "@/lib/utils";

export function WorkerShowcase() {
  const { openBooking } = useBooking();

  return (
    <section id="workers" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Meet Our Experts"
          subtitle="Skilled, verified professionals ready to serve you"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers.map((worker, i) => (
            <motion.div
              key={worker.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={worker.image}
                    alt={worker.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      worker.isOnline
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-zinc-500/20 text-zinc-400 border border-zinc-500/30"
                    }`}
                  >
                    {worker.isOnline ? "Online" : "Offline"}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {worker.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={worker.rating} />
                    <span className="text-gold text-sm font-medium">
                      {formatRating(worker.rating)}
                    </span>
                    <span className="text-zinc-500 text-sm">
                      ({worker.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm mb-1">
                    {worker.experience} experience
                  </p>
                  <p className="flex items-center gap-1 text-zinc-400 text-sm mb-3">
                    <MapPin size={14} className="text-gold" />
                    {worker.city}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {worker.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-0.5 rounded-md bg-gold/10 text-gold border border-gold/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="w-full"
                    size="sm"
                    onClick={() =>
                      openBooking({
                        id: worker.id,
                        name: worker.services[0] ?? "Service",
                      })
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
