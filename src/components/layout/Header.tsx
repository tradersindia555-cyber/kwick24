"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/our-mission", label: "Our Mission" },
  { href: "/our-vision", label: "Our Vision" },
  { href: "/terms", label: "Terms & Conditions" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-gold/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/image.png"
              alt="Kwick24 Services"
              width={44}
              height={44}
              className="rounded-xl group-hover:shadow-gold-glow transition-shadow"
            />
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg text-white leading-tight">
                Kwick24
              </span>
              <span className="block text-xs text-gold tracking-widest uppercase">
                Services
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-300 hover:text-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                <User size={18} />
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" size="sm">
                Sign Up
              </Button>
            </Link>
            <Button size="sm" glow onClick={() => openBooking()}>
              Book Service
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gold/10 bg-[#0A0A0A]/98 backdrop-blur-xl"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-zinc-300 hover:text-gold border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Link href="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Button className="w-full" onClick={() => { openBooking(); setMobileOpen(false); }}>
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
