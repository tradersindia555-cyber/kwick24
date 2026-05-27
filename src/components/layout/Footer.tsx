import Link from "next/link";
import Image from "next/image";
import { Share2, MessageCircle, Globe, Link2, Mail, Phone, MapPin } from "lucide-react";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { serviceCategories } from "@/lib/data/services";

const socialLinks = [
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "Instagram" },
  { icon: Globe, href: "#", label: "Twitter" },
  { icon: Link2, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gold/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/image.png" alt="Kwick24" width={48} height={48} />
              <div>
                <span className="font-display font-bold text-white text-lg">
                  Kwick24
                </span>
                <span className="block text-xs text-gold tracking-widest uppercase">
                  Services
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              Premium on-demand home and automotive services. Trusted
              professionals at your doorstep, 24/7.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-gold/20 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold hover:shadow-gold-glow transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-gold font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/about-us" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-mission" className="hover:text-gold transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/our-vision" className="hover:text-gold transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-gold transition-colors">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400 grid grid-cols-1 gap-2">
              {serviceCategories.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                kwickservices24@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                7901831036
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                Punjab, India
              </li>
            </ul>
          </div>
        </div>

        <GoldDivider className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Kwick24 Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/admin-dashboard" className="hover:text-gold transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
