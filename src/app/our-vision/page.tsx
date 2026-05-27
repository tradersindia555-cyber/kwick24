import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";

export const metadata: Metadata = {
  title: "Our Vision",
  description:
    "Kwick24's vision is to become one of India's most trusted manpower service providers.",
};

export default function OurVisionPage() {
  return (
    <ContentPageLayout title="Our Vision">
      <p className="text-lg text-zinc-300 leading-relaxed">
        To become one of the most trusted and reliable manpower service providers
        across India by delivering quality workforce solutions with efficiency and
        commitment.
      </p>
      <p>
        We envision a future where every customer can access skilled and unskilled
        workforce support within minutes — backed by professionalism, accountability,
        and consistent service quality. Kwick24 strives to expand its reach, strengthen
        worker partnerships, and set new standards in the manpower services industry
        nationwide.
      </p>
    </ContentPageLayout>
  );
}
