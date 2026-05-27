"use client";

import { motion } from "framer-motion";
import { Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function MobileApp() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-[#111] to-[#0A0A0A] p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GoldDivider label="Mobile App" className="mb-6 max-w-xs" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Get Kwick24 on{" "}
                <span className="text-gold">Your Phone</span>
              </h2>
              <p className="text-zinc-400 mb-8 max-w-md">
                Book services, track workers, and manage bookings on the go.
                Download our premium app for the best experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-gold/40 bg-black/50 hover:border-gold hover:shadow-gold-glow transition-all group"
                >
                  <Download className="text-gold group-hover:scale-110 transition-transform" size={24} />
                  <div className="text-left">
                    <span className="block text-[10px] text-zinc-500 uppercase">
                      Get it on
                    </span>
                    <span className="text-white font-semibold">Google Play</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-gold/40 bg-black/50 hover:border-gold hover:shadow-gold-glow transition-all group"
                >
                  <Download className="text-gold group-hover:scale-110 transition-transform" size={24} />
                  <div className="text-left">
                    <span className="block text-[10px] text-zinc-500 uppercase">
                      Download on the
                    </span>
                    <span className="text-white font-semibold">App Store</span>
                  </div>
                </a>
              </div>

              <Button className="mt-8" size="lg" glow>
                Download Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative w-64 md:w-72">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(212, 175, 55, 0.2)",
                      "0 0 80px rgba(212, 175, 55, 0.4)",
                      "0 0 40px rgba(212, 175, 55, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="rounded-[2.5rem] border-4 border-gold/30 bg-[#0A0A0A] p-4 aspect-[9/19]"
                >
                  <div className="h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0A0A0A] flex flex-col items-center justify-center p-6 border border-gold/10">
                    <Smartphone className="text-gold mb-4" size={48} />
                    <p className="font-display text-gold font-bold text-center">
                      Kwick24
                    </p>
                    <p className="text-xs text-zinc-500 text-center mt-1">
                      Services App
                    </p>
                    <div className="mt-8 w-full space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-10 rounded-lg bg-gold/10 border border-gold/20"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
