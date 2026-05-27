import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Kwick24's mission is to provide trusted manpower services with professionalism, transparency, and customer satisfaction.",
};

export default function OurMissionPage() {
  return (
    <ContentPageLayout title="Our Mission">
      <p className="text-lg text-zinc-300 leading-relaxed">
        To provide trusted manpower services with professionalism, transparency, and
        customer satisfaction while building long-term relationships with clients and
        workers.
      </p>
      <p>
        At Kwick24, our mission drives every service we deliver. We are committed to
        connecting customers with verified, skilled professionals while ensuring fair
        opportunities for workers. Through transparent pricing, timely coordination,
        and quality workforce solutions, we aim to make manpower services accessible
        and dependable for homes, offices, and industries across India.
      </p>
    </ContentPageLayout>
  );
}
