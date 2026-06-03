import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { PartnerBenefits } from "@/components/partner/PartnerBenefits";
import { PartnerForm } from "@/components/partner/PartnerForm";

export default function PartnerPage() {
  return (
    <PageTransition>
      <main className="pt-40 pb-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Become a Partner"
            subtitle="Join India's premium service network and grow your business"
          />

          <PartnerBenefits />

          <PartnerForm />
        </div>
      </main>
    </PageTransition>
  );
}
