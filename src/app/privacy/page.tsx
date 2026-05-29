import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-gold mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-gold space-y-4 text-zinc-400">
            <p>Last updated: May 2026</p>
            <p>
              Kwick24 Services (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This policy describes how we collect, use, and safeguard your personal information.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8">Information We Collect</h2>
            <p>
              We collect information you provide when booking services, creating an account,
              or contacting support — including name, phone number, email, and address.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8">How We Use Your Data</h2>
            <p>
              Your data is used to facilitate bookings, connect you with service professionals,
              process payments, and improve our platform experience.
            </p>
            <h2 className="text-white text-xl font-semibold mt-8">Contact</h2>
            <p>
              For privacy-related inquiries, contact us at privacy@kwick24.com.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
