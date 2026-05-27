import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ananya Gupta",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Booked a home cleaning service and the team arrived within 30 minutes. Spotless work and very professional. Kwick24 is now my go-to for all home services.",
    service: "Home Cleaning",
    city: "Mumbai",
  },
  {
    id: "2",
    name: "Rahul Mehta",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "Had an AC emergency in peak summer. The electrician fixed it the same day. Transparent pricing and verified professionals — exactly what I needed.",
    service: "AC Repair",
    city: "Delhi",
  },
  {
    id: "3",
    name: "Sneha Iyer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
    text: "Used Kwick24 for bike puncture repair twice. Fast, affordable, and the mechanic was courteous. Real-time tracking made it stress-free.",
    service: "Puncture Repair",
    city: "Bangalore",
  },
  {
    id: "4",
    name: "Karan Joshi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    rating: 4,
    text: "Moved apartments with their packers service. Everything was handled carefully and on schedule. Premium experience from booking to completion.",
    service: "Movers & Packers",
    city: "Pune",
  },
];

export const stats = [
  { label: "Happy Customers", value: 50000, suffix: "+" },
  { label: "Verified Workers", value: 2500, suffix: "+" },
  { label: "Services Completed", value: 120000, suffix: "+" },
  { label: "Cities Covered", value: 25, suffix: "+" },
];

export const whyChooseFeatures = [
  {
    title: "Verified Professionals",
    description: "Every worker is background-verified and skill-tested before joining our platform.",
    icon: "shield-check",
  },
  {
    title: "Fast Arrival",
    description: "Average arrival time under 45 minutes in metro cities for urgent bookings.",
    icon: "clock",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent rates with no hidden charges. Pay only for what you book.",
    icon: "wallet",
  },
  {
    title: "24/7 Service",
    description: "Round-the-clock support and emergency services when you need them most.",
    icon: "headphones",
  },
  {
    title: "Real-Time Tracking",
    description: "Track your worker's location and ETA live from booking to job completion.",
    icon: "map-pin",
  },
  {
    title: "Trusted by Thousands",
    description: "Join 50,000+ satisfied customers who rely on Kwick24 every day.",
    icon: "users",
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Select Service",
    description: "Browse categories, pick your service, and choose a convenient time slot.",
    icon: "search",
  },
  {
    step: 2,
    title: "Confirm Booking",
    description: "Review details, apply offers, and confirm with secure payment options.",
    icon: "calendar-check",
  },
  {
    step: 3,
    title: "Worker Arrives",
    description: "A verified professional arrives on time. Track progress in real time.",
    icon: "user-check",
  },
];
