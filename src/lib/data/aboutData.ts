import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Briefcase,
  Clock,
  Droplets,
  Eye,
  Hammer,
  Headphones,
  Home,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
  Wind,
  Wrench,
  Zap,
  HardHat,
  Handshake,
  CircleCheck,
} from "lucide-react";

export const aboutHero = {
  badge: "Workforce & Manpower Excellence",
  title: "About Kwick24",
  subtitle:
    "Trusted Workforce & Manpower Solutions for Homes, Businesses & Industries",
  description:
    "Kwick24 connects you with verified skilled professionals for residential, commercial, and industrial needs — fast coordination, transparent service, and dependable results.",
  image:
    '/images/about_image.png',
  floatingBadges: [
    { label: "Trusted Professionals", icon: ShieldCheck },
    { label: "Fast Service", icon: Clock },
    { label: "Skilled Workforce", icon: Users },
    { label: "24/7 Support", icon: Headphones },
  ],
};

export const aboutCollageImages = [
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",
    alt: "Professional cleaning and home services",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504148455328-c376907a0816?w=600&q=80",
    alt: "Skilled carpenter at work",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1607472586893-adb48fe52871?w=600&q=80",
    alt: "Plumbing and technical services",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
    alt: "Team collaboration",
    className: "col-span-2 row-span-1",
  },
];

export const aboutCompanyStats = [
  { label: "Skilled Workers", value: 500, suffix: "+" },
  { label: "Cities Covered", value: 25, suffix: "+" },
  { label: "Services Available", value: 10, suffix: "+" },
  { label: "Happy Customers", value: 1000, suffix: "+" },
];

export const aboutWhyChoose: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Professional Workforce",
    description:
      "Trained, disciplined professionals aligned to your job requirements.",
    icon: BadgeCheck,
  },
  {
    title: "Quick Response",
    description:
      "Fast coordination so you get the right workers when you need them.",
    icon: Clock,
  },
  {
    title: "Verified Staff",
    description:
      "Background-checked and skill-verified manpower you can trust.",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Pricing",
    description:
      "Competitive rates with clear, transparent service coordination.",
    icon: Wallet,
  },
  {
    title: "Commercial & Residential Support",
    description:
      "From homes and offices to industrial sites — we scale with you.",
    icon: Home,
  },
  {
    title: "Reliable Coordination",
    description:
      "Dedicated support for scheduling, updates, and job completion.",
    icon: Handshake,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We prioritize quality delivery and long-term client relationships.",
    icon: CircleCheck,
  },
];

export const aboutMissionVision = [
  {
    title: "Our Mission",
    content:
      "To provide trusted manpower services with professionalism, transparency, and customer satisfaction while building long-term relationships with clients and workers.",
    icon: Target,
  },
  {
    title: "Our Vision",
    content:
      "To become one of the most trusted and reliable manpower service providers across India by delivering quality workforce solutions with efficiency and commitment.",
    icon: Eye,
  },
];

export const aboutWorkflowSteps = [
  {
    step: 1,
    title: "Choose Service",
    description: "Select the manpower category that fits your requirement.",
    icon: Wrench,
  },
  {
    step: 2,
    title: "Share Requirement",
    description: "Tell us scope, location, timing, and workforce needed.",
    icon: Briefcase,
  },
  {
    step: 3,
    title: "Get Skilled Workforce",
    description: "We assign verified professionals and confirm dispatch.",
    icon: Users,
  },
  {
    step: 4,
    title: "Work Completed",
    description: "Job delivered with coordination support until closure.",
    icon: CircleCheck,
  },
];

export const aboutTrustStats = [
  { label: "Workers", value: 500, suffix: "+" },
  { label: "Support", value: 24, suffix: "/7" },
  { label: "Happy Clients", value: 1000, suffix: "+" },
  { label: "Service Categories", value: 10, suffix: "+" },
];

export const aboutCompanyContent = {
  eyebrow: "Welcome to Kwick24",
  paragraphs: [
    "Kwick24 is a professional manpower and workforce service provider company dedicated to delivering reliable, skilled, and efficient manpower solutions for residential, commercial, and industrial requirements.",
    "We specialize in providing experienced workers and technical staff for all types of jobs on a service and commission basis. Our goal is to make manpower services fast, affordable, and easily accessible for every customer.",
    "Whether you need home maintenance, office operations support, industrial labor, or technical specialists, Kwick24 coordinates dependable workforce solutions with professionalism and timely service.",
  ],
  floatingCards: [
    { title: "Verified Teams", subtitle: "Background-checked staff" },
    { title: "Pan-India Ready", subtitle: "Scaling workforce delivery" },
  ],
};
