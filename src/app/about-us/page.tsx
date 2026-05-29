import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kwick24 — trusted workforce and manpower solutions for homes, businesses, and industries across India.",
};

export default function AboutUsPage() {
  return <AboutPage />;
}
