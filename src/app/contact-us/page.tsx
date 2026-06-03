"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/contacts/ContactForm";
import { contactDetails, helpCards, features } from "@/lib/data/contactData";

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-40 pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.06),transparent_40%)]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl font-bold text-gold md:text-5xl">
                Contact Us
              </h1>

              <p className="mt-3 max-w-xl text-lg leading-relaxed text-zinc-400">
                Need help with a booking or want to know more about our
                services? Our support team is here for you anytime — fast,
                friendly, and reliable.
              </p>

              {/* Features */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {features.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200 backdrop-blur-sm"
                  >
                    <span className="text-gold">
                      <item.icon className="text-gold" size={16} />
                    </span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Premium Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="mt-8"
            >
              <GlassCard className="relative overflow-hidden p-6 md:p-7" hover>
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gold/10 blur-2xl" />

                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-gold/5 blur-2xl" />

                <div className="relative flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/25 to-gold/5 shadow-gold-glow">
                    <Wrench className="text-gold" size={26} />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      Premium service support
                    </h2>

                    <p className="mt-1 text-zinc-400">
                      We usually respond within a few hours.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-200">
                        <ShieldCheck className="text-gold" size={16} />
                        Trusted help
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-200">
                        <Briefcase className="text-gold" size={16} />
                        Business-ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* Illustration */}
                <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative h-44 sm:h-52">
                    <Image
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
                      alt="Customer support"
                      fill
                      priority
                      className="object-cover opacity-80"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Help Cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {helpCards.map((card) => (
                <GlassCard key={card.title} className="p-5" hover>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gradient-to-br from-gold/20 to-gold/5">
                      <card.icon className="text-gold" size={18} />
                    </span>

                    <div>
                      <h3 className="font-semibold text-white">{card.title}</h3>

                      <p className="mt-1 text-sm text-zinc-400">{card.body}</p>

                      <a
                        href={card.href}
                        className="mt-3 inline-flex text-sm text-gold transition-colors hover:text-gold-light"
                      >
                        {card.action} →
                      </a>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((c) => (
                <GlassCard key={c.title} className="p-5" hover>
                  <a
                    href={c.href}
                    className="flex items-start gap-3 group"
                    aria-label={`${c.title}: ${c.value}`}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                      <c.icon className="text-gold" size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-zinc-400">{c.title}</p>
                      <p className="text-white font-semibold truncate group-hover:text-gold transition-colors">
                        {c.value}
                      </p>
                    </div>
                  </a>
                </GlassCard>
              ))}
            </div>

            {/* Map */}
            <GlassCard className="mt-6 overflow-hidden" hover>
              <div className="p-5 md:p-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    We’re available across Punjab
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    Book services and get support in your city.
                  </p>
                </div>
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                  <MapPinned className="text-gold" size={18} />
                </span>
              </div>
              <div className="relative h-56 md:h-64 border-t border-white/10">
                <iframe
                  title="Punjab, India map"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Punjab%2C%20India&output=embed"
                />
              </div>
            </GlassCard>

            {/* Social placeholder */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-sm text-zinc-500">
                Follow us for updates (placeholders):
              </p>
              <div className="flex gap-2">
                {["Facebook", "Instagram", "X", "LinkedIn"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-2 rounded-lg border border-gold/15 bg-white/[0.02] text-xs text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="mt-12"
        >
          <GlassCard className="relative overflow-hidden p-7 md:p-10" hover>
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Ready to book a service?
                </h2>

                <p className="mt-2 text-zinc-400">
                  Explore our services and book in minutes — verified
                  professionals, transparent pricing, and premium support.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <Link href="/#services" className="w-full sm:w-auto">
                  <Button className="w-full">Explore Services</Button>
                </Link>

                <a
                  href="https://wa.me/917901831036"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="secondary" className="w-full">
                    WhatsApp Us
                    <MessageCircle size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
