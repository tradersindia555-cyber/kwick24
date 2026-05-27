import type { Metadata } from "next";
import {
  ContentPageLayout,
  ContentSection,
  ContentList,
} from "@/components/layout/ContentPageLayout";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kwick24 — a professional manpower and workforce service provider delivering reliable skilled and unskilled workers across India.",
};

const serviceCategories = [
  "Electricians",
  "Plumbers",
  "Carpenters",
  "AC Technicians",
  "Painters",
  "Helpers & Laborers",
  "Housekeeping Staff",
  "Maintenance Workers",
  "Office & Commercial Support Staff",
  "Skilled & Unskilled Workers",
];

export default function AboutUsPage() {
  return (
    <ContentPageLayout
      title="About Us"
      subtitle="Welcome to Kwick24"
    >
      <p>
        Kwick24 is a professional manpower and workforce service provider company
        dedicated to delivering reliable, skilled, and efficient manpower solutions
        for residential, commercial, and industrial requirements.
      </p>
      <p>
        We specialize in providing experienced workers and technical staff for all
        types of jobs on a service and commission basis. Our goal is to make manpower
        services fast, affordable, and easily accessible for every customer.
      </p>

      <ContentSection title="What We Provide">
        <p>At Kwick24, we provide manpower for multiple categories including:</p>
        <ContentList items={serviceCategories} />
      </ContentSection>

      <ContentSection title="Our Commitment">
        <p>
          We believe in professionalism, quick response, customer satisfaction, and
          quality service. Our team works continuously to connect customers with
          trusted manpower solutions according to their needs.
        </p>
        <p>
          Whether it is home maintenance, office setup, industrial work, repair
          services, or labor requirements, Kwick24 is committed to providing
          dependable workforce support with timely service and professional
          coordination.
        </p>
      </ContentSection>
    </ContentPageLayout>
  );
}
