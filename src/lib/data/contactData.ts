import {
  BadgeCheck,
  Briefcase,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const contactDetails = [
  {
    icon: Phone,
    title: "Mobile",
    value: "7888683637",
    href: "tel:+917888683637",
  },
  {
    icon: Mail,
    title: "Email",
    value: "kwickservices24@gmail.com",
    href: "mailto:kwickservices24@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Punjab, India",
    href: "https://www.google.com/maps?q=Punjab%2C%20India",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "7901831036",
    href: "https://wa.me/917901831036",
  },
];

export const features = [
  {
    icon: Headphones,
    label: "24/7 Support",
  },
  {
    icon: Clock,
    label: "Fast Response",
  },
  {
    icon: BadgeCheck,
    label: "Verified Professionals",
  },
  {
    icon: MapPinned,
    label: "Service Across Punjab",
  },
];

export const helpCards = [
  {
    title: "Need help fast?",
    body: "For urgent queries, message us on WhatsApp for the quickest response.",
    action: "Open WhatsApp",
    href: "https://wa.me/917901831036",
    icon: MessageCircle,
  },
  {
    title: "Prefer email?",
    body: "Send us details and we’ll get back with the next best steps.",
    action: "Email support",
    href: "mailto:kwickservices24@gmail.com",
    icon: Mail,
  },
];
