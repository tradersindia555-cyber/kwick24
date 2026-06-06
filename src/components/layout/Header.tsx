"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";
import { cn } from "@/lib/utils";
import { ServicesMegaMenu } from "@/components/layout/ServicesMegaMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },

  // Services menu will appear here

  { href: "/contact-us", label: "Contact Us" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gold/10 bg-[#0A0A0A]/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/kwick24_logo.png"
              alt="Kwick24 Services"
              width={44}
              height={44}
              className="rounded-xl transition-shadow group-hover:shadow-gold-glow"
            />

            <div className="hidden sm:block">
              <span className="font-display text-lg font-bold leading-tight text-white">
                Kwick24
              </span>

              <span className="block text-xs uppercase tracking-widest text-gold">
                Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="group relative text-sm text-zinc-300 transition-colors hover:text-gold"
                >
                  {link.label}

                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Insert Services Menu after About */}
                {index === 1 && (
                  <div className="ml-8">
                    <ServicesMegaMenu variant="desktop" />
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {/* <Link href="/login">
              <Button variant="ghost" size="sm">
                <User size={18} />
                Login
              </Button>
            </Link> */}

            <Link href="/">
              <Button variant="outline" size="sm">
                Instant Servise
              </Button>
            </Link>

            <Button size="sm" glow onClick={() => openBooking()}>
              Book Service
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-gold lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gold/10 bg-[#0A0A0A]/98 backdrop-blur-xl lg:hidden   max-h-[calc(100vh-64px)]
    overflow-y-auto"
          >
            <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-white/5 py-3 text-zinc-300 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>

                  {/* Mobile Services Menu after About */}
                  {index === 1 && (
                    <ServicesMegaMenu
                      variant="mobile"
                      onSelect={() => setMobileOpen(false)}
                    />
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="flex flex-col gap-2 pt-4">
                <Link href="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>

                <Button
                  className="w-full"
                  onClick={() => {
                    openBooking();
                    setMobileOpen(false);
                  }}
                >
                  Book Service
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
