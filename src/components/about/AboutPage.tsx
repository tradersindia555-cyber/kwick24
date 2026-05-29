"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, MapPinned } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";
import {
  aboutHero,
  aboutCollageImages,
  aboutCompanyStats,
  aboutCompanyContent,
  aboutWhyChoose,
  aboutMissionVision,
  aboutWorkflowSteps,
  aboutTrustStats,
} from "@/lib/data/aboutData";
import { ServiseCard } from "../ui/ServicesCard";
import { serviceCategories } from "@/lib/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

function PageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(212,175,55,0.05),transparent_40%)]" />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutHero.image}
          alt="Professional workforce and technical services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-[#0A0A0A]" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent" />
      </div>

      {/* <div className="absolute top-1/4 left-0 z-10 h-px w-32 bg-gradient-to-r from-gold/60 to-transparent" />
      <div className="absolute bottom-1/3 right-0 z-10 h-px w-48 bg-gradient-to-l from-gold/40 to-transparent" /> */}

      {/* <div className="hidden xl:block absolute right-8 top-1/3 z-10 space-y-3">
        {aboutHero.floatingBadges.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.12 }}
          >
            <GlassCard className="flex items-center gap-2 px-4 py-3" glow>
              <badge.icon className="text-gold shrink-0" size={16} />
              <span className="text-sm font-medium text-white">{badge.label}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div> */}

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-28 pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold">
            ✦ {aboutHero.badge}
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {aboutHero.title.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              {aboutHero.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-4 text-lg font-medium text-zinc-200 md:text-xl">
            {aboutHero.subtitle}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            {aboutHero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 xl:hidden">
            {aboutHero.floatingBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200 backdrop-blur-sm"
              >
                <badge.icon className="text-gold" size={14} />
                {badge.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#services">
              <Button size="lg" glow>
                Explore Services
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// function AboutHero() {
//   return (
//     <section className="relative overflow-hidden border-b border-white/5 bg-[#050505]">
//       {/* subtle glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_35%)]" />

//       <div className="container relative z-10 mx-auto px-4 md:px-6 py-24 md:py-32">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="max-w-2xl"
//           >
//             <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold">
//               ✦ Trusted Workforce Solutions
//             </span>

//             <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
//               About{" "}
//               <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
//                 Kwick24
//               </span>
//             </h1>

//             <p className="mt-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
//               Kwick24 is a professional manpower and workforce service
//               provider delivering trusted, skilled, and efficient manpower
//               solutions for residential, commercial, and industrial needs.
//             </p>

//             <p className="mt-5 text-base leading-relaxed text-zinc-500 md:text-lg">
//               From electricians and plumbers to technical staff and labor
//               support, we help customers connect with reliable professionals
//               quickly and efficiently.
//             </p>

//             {/* badges */}
//             <div className="mt-8 flex flex-wrap gap-3">
//               {[
//                 "Trusted Professionals",
//                 "Quick Response",
//                 "Skilled Workforce",
//                 "24/7 Support",
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>

//             {/* buttons */}
//             <div className="mt-10 flex flex-wrap gap-4">
//               <Link href="/#services">
//                 <Button size="lg" glow>
//                   Explore Services
//                 </Button>
//               </Link>

//               <Link href="/contact-us">
//                 <Button variant="outline" size="lg">
//                   Contact Us
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>

//           {/* Right Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative hidden lg:block"
//           >
//             <div className="relative mx-auto max-w-[620px]">
//               {/* glow */}
//               <div className="absolute inset-0 bg-gold/5 blur-3xl" />

//               <Image
//                 src="/images/aboutUs.png"
//                 alt="Kwick24 workforce illustration"
//                 width={700}
//                 height={500}
//                 className="relative z-10 w-full object-contain opacity-90"
//                 priority
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

function AboutCompany() {
  return (
    <section className="relative py-20 md:py-28">
      <PageBackdrop />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-flow-dense grid-cols-2 auto-rows-[120px] gap-3 md:auto-rows-[140px] md:gap-4">
              {aboutCollageImages.map((img) => (
                <div
                  key={img.src}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-gold/15 bg-white/[0.02]",
                    img.className
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(min-width: 1024px) 480px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            {aboutCompanyContent.floatingCards.map((card, i) => (
              <GlassCard
                key={card.title}
                className={cn(
                  "absolute z-10 hidden p-4 sm:block",
                  i === 0 ? "-bottom-4 -left-2 md:-left-6" : "-top-4 -right-2 md:-right-6"
                )}
                glow
              >
                <p className="text-sm font-semibold text-white">{card.title}</p>
                <p className="text-xs text-zinc-400">{card.subtitle}</p>
              </GlassCard>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-widest text-gold"
            >
              {aboutCompanyContent.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-bold text-white md:text-4xl"
            >
              Workforce you can{" "}
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                rely on
              </span>
            </motion.h2>

            <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
              {aboutCompanyContent.paragraphs.map((p) => (
                <motion.p key={p.slice(0, 40)} variants={fadeUp}>
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {aboutCompanyStats.map((stat) => (
                <GlassCard key={stat.label} className="p-4 text-center" hover>
                  <p className="font-display text-2xl font-bold text-gold">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </GlassCard>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutServices() {
  return (
    <section className="relative bg-[#080808] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Services We Provide"
          subtitle="Skilled manpower across technical, maintenance, and support categories"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {serviceCategories.map((service) =><ServiseCard service={service} withDesc={true} varient="left"/>)}
        </motion.div>
      </div>
    </section>
  );
}

function AboutWhyChoose() {
  return (
    <section className="relative py-20 md:py-28">
      <PageBackdrop />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          title="Why Choose Us"
          subtitle="A premium manpower platform built on trust, speed, and professional coordination"
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent md:block" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 md:space-y-5"
          >
            {aboutWhyChoose.map((feature, i) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <GlassCard className="group relative overflow-hidden p-5 md:p-6 md:pl-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span className="absolute -left-0.5 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-gold bg-[#0A0A0A] md:block" />
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gradient-to-br from-gold/20 to-gold/5">
                      <feature.icon className="text-gold" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gold/80">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-white group-hover:text-gold transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutMissionVision() {
  return (
    <section className="relative bg-[#080808] py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          title="Mission & Vision"
          subtitle="Our commitment to workforce excellence across India"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {aboutMissionVision.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <GlassCard className="relative h-full overflow-hidden p-7 md:p-9" glow>
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/25 to-gold/5 shadow-gold-glow">
                    <item.icon className="text-gold" size={26} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {item.content}
                  </p>
                  <Link
                    href={
                      item.title === "Our Mission"
                        ? "/our-mission"
                        : "/our-vision"
                    }
                    className="mt-5 inline-flex text-sm text-gold transition-colors hover:text-gold-light"
                  >
                    Read more →
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutWorkflow() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading
          title="How It Works"
          subtitle="From requirement to completion — a streamlined workforce booking flow"
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute top-24 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6"
          >
            {aboutWorkflowSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-gold/50 bg-gradient-to-br from-gold/30 to-gold/5 shadow-gold-glow">
                  <step.icon className="text-gold" size={30} />
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-black">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[200px] text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutTrustStats() {
  return (
    <section className="relative bg-[#080808] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Trusted by Clients Nationwide"
          subtitle="Numbers that reflect our commitment to quality workforce delivery"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {aboutTrustStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <GlassCard className="p-6 text-center md:p-8" glow>
                <p className="font-display text-3xl font-bold text-gold md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <GlassCard className="inline-flex items-center gap-3 px-5 py-3" hover={false}>
            <MapPinned className="text-gold" size={18} />
            <p className="text-sm text-zinc-300">
              Serving homes, businesses & industries across{" "}
              <span className="text-gold font-medium">Punjab & beyond</span>
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="relative py-20 md:py-28">
      <PageBackdrop />
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="relative overflow-hidden p-8 md:p-12" glow>
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative text-center md:text-left">
              <div className="md:flex md:items-end md:justify-between md:gap-8">
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                    Need Skilled Workforce Support?
                  </h2>
                  <p className="mt-3 text-lg text-zinc-400">
                    Book trusted manpower services quickly with Kwick24.
                  </p>
                </div>

                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row md:mt-0 md:w-auto md:shrink-0">
                  <Link href="/contact-us" className="w-full sm:w-auto">
                    <Button className="w-full" size="lg" glow>
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/#services" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full" size="lg">
                      Explore Services
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/917901831036"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="secondary" className="w-full" size="lg">
                      WhatsApp Us
                      <MessageCircle size={18} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <AboutHero />
      <AboutCompany />
      <AboutServices />
      <AboutWhyChoose />
      <AboutMissionVision />
      <AboutWorkflow />
      <AboutTrustStats />
      <AboutCta />
    </div>
  );
}
