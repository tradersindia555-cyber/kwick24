import type { Service } from "@/types";

export const heroSlides = [
  {
    title: "Car Wash",
    image:
      "https://images.unsplash.com/photo-1601362841437-42e146e2ebea?w=1920&q=80",
  },
  {
    title: "Bike Puncture Repair",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    title: "Room Cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
  },
  {
    title: "Electrician",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80",
  },
  {
    title: "Plumbing",
    image:
      "https://images.unsplash.com/photo-1607472586893-adb48fe52871?w=1920&q=80",
  },
  {
    title: "AC Service",
    image:
      "https://images.unsplash.com/photo-1631545806609-595a1a1a7f2e?w=1920&q=80",
  },
  {
    title: "Carpenter",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907a0816?w=1920&q=80",
  },
  {
    title: "Home Cleaning",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc83e?w=1920&q=80",
  },
];

export const serviceCategories = [
  { name: "Car Wash", slug: "car-wash", icon: "car" },
  { name: "Puncture Repair", slug: "puncture-repair", icon: "bike" },
  { name: "Home Cleaning", slug: "home-cleaning", icon: "home" },
  { name: "Electrician", slug: "electrician", icon: "zap" },
  { name: "Plumber", slug: "plumber", icon: "droplets" },
  { name: "AC Repair", slug: "ac-repair", icon: "wind" },
  { name: "Bike Service", slug: "bike-service", icon: "bike" },
  { name: "Painter", slug: "painter", icon: "paintbrush" },
  { name: "Carpenter", slug: "carpenter", icon: "hammer" },
  { name: "Movers & Packers", slug: "movers-packers", icon: "truck" },
];

export const services: Service[] = [
  {
    id: "1",
    name: "Premium Car Wash",
    slug: "car-wash",
    description:
      "Professional exterior and interior car cleaning with eco-friendly products. Includes vacuum, polish, and tire shine.",
    price: "₹499",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1601362841437-42e146e2ebea?w=1200&q=80",
    icon: "car",
    category: "Automotive",
  },
  {
    id: "2",
    name: "Bike Puncture Repair",
    slug: "puncture-repair",
    description:
      "Quick on-site puncture repair for bikes and scooters. Tubeless and tube tyre support with quality patches.",
    price: "₹149",
    duration: "20 min",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    icon: "bike",
    category: "Automotive",
  },
  {
    id: "3",
    name: "Deep Home Cleaning",
    slug: "home-cleaning",
    description:
      "Thorough home cleaning including kitchen, bathrooms, living areas, and dusting. Trained professionals with own supplies.",
    price: "₹1,999",
    duration: "3 hrs",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc83e?w=1200&q=80",
    icon: "home",
    category: "Home",
  },
  {
    id: "4",
    name: "Electrician Service",
    slug: "electrician",
    description:
      "Licensed electricians for wiring, switchboard repair, fan installation, and electrical safety checks.",
    price: "₹299",
    duration: "1 hr",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80",
    icon: "zap",
    category: "Home",
  },
  {
    id: "5",
    name: "Plumbing Service",
    slug: "plumber",
    description:
      "Expert plumbers for leaks, blockages, tap repair, and bathroom fittings. Same-day availability in most areas.",
    price: "₹349",
    duration: "1 hr",
    image:
      "https://images.unsplash.com/photo-1607472586893-adb48fe52871?w=1200&q=80",
    icon: "droplets",
    category: "Home",
  },
  {
    id: "6",
    name: "AC Repair & Service",
    slug: "ac-repair",
    description:
      "AC gas refill, cooling issues, filter cleaning, and annual maintenance for split and window units.",
    price: "₹599",
    duration: "1.5 hrs",
    image:
      "https://images.unsplash.com/photo-1631545806609-595a1a1a7f2e?w=1200&q=80",
    icon: "wind",
    category: "Home",
  },
  {
    id: "7",
    name: "Bike Full Service",
    slug: "bike-service",
    description:
      "Complete bike servicing including oil change, chain lubrication, brake adjustment, and general inspection.",
    price: "₹399",
    duration: "1 hr",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200&q=80",
    icon: "bike",
    category: "Automotive",
  },
  {
    id: "8",
    name: "Professional Painting",
    slug: "painter",
    description:
      "Interior and exterior wall painting with premium finishes. Free colour consultation and surface preparation.",
    price: "₹15/sqft",
    duration: "Varies",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80",
    icon: "paintbrush",
    category: "Home",
  },
  {
    id: "9",
    name: "Carpentry Work",
    slug: "carpenter",
    description:
      "Furniture repair, custom shelves, door fitting, and modular kitchen adjustments by skilled carpenters.",
    price: "₹449",
    duration: "2 hrs",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907a0816?w=1200&q=80",
    icon: "hammer",
    category: "Home",
  },
  {
    id: "10",
    name: "Movers & Packers",
    slug: "movers-packers",
    description:
      "Safe packing and relocation for homes and offices. Includes loading, transport, and unpacking assistance.",
    price: "₹4,999",
    duration: "Full day",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=80",
    icon: "truck",
    category: "Relocation",
  },
];

export const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
