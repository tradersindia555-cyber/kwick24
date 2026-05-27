import type { Metadata } from "next";
import {
  ContentPageLayout,
  ContentSection,
  ContentList,
} from "@/components/layout/ContentPageLayout";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Kwick24 Manpower Services. Read our policies before using our services.",
};

const servicesOffered = [
  "Electrician Services",
  "Plumbing Services",
  "Carpenter Services",
  "Painting Work",
  "AC Repair & Installation",
  "Labor & Helper Supply",
  "Housekeeping Staff",
  "Maintenance Work",
  "Other Skilled & Unskilled Services",
];

const customerResponsibilities = [
  "Provide accurate service details and location.",
  "Maintain a safe working environment.",
  "Avoid misuse, harassment, or illegal activities involving workers.",
  "Clear pending payments on time.",
];

const prohibitedActivities = [
  "Use services for unlawful purposes.",
  "Misbehave with workers or staff.",
  "Attempt to bypass Kwick24 and directly hire workers introduced through our platform without prior approval.",
];

export default function TermsPage() {
  return (
    <ContentPageLayout
      title="Terms & Conditions"
      subtitle="For Kwick24 Manpower Services"
      lastUpdated="25 May 2026"
    >
      <p>
        Welcome to Kwick24. By accessing or using our website and services, you agree
        to comply with and be bound by the following Terms & Conditions. Please read
        them carefully before using our services.
      </p>

      <ContentSection title="1. Introduction">
        <p>
          Kwick24 is a manpower and service provider platform that connects customers
          with skilled and unskilled workers including electricians, plumbers,
          carpenters, painters, AC technicians, helpers, laborers, and other service
          professionals on a commission/service basis.
        </p>
      </ContentSection>

      <ContentSection title="2. Acceptance of Terms">
        <p>
          By using this website, booking a service, or contacting Kwick24, you agree
          to these Terms & Conditions, our policies, and any future updates.
        </p>
        <p>
          If you do not agree with these terms, kindly do not use our services.
        </p>
      </ContentSection>

      <ContentSection title="3. Services Offered">
        <p>
          Kwick24 provides manpower and workforce assistance for various categories
          including but not limited to:
        </p>
        <ContentList items={servicesOffered} />
        <p>
          Service availability may vary depending on location and workforce availability.
        </p>
      </ContentSection>

      <ContentSection title="4. Booking & Service Requests">
        <p>
          Customers may request services through phone call, WhatsApp, website, or
          other available platforms.
        </p>
        <p>Kwick24 reserves the right to accept or reject any booking request.</p>
        <p>
          Service timing and availability are subject to manpower availability and
          operational conditions.
        </p>
      </ContentSection>

      <ContentSection title="5. Pricing & Payments">
        <p>
          Charges for services may vary depending on the nature of work, duration,
          location, urgency, and manpower required.
        </p>
        <p>
          Payment terms will be informed before or during service confirmation.
        </p>
        <p>Advance payment may be required for certain services.</p>
        <p>
          All payments once completed are generally non-refundable unless approved by
          Kwick24 management.
        </p>
      </ContentSection>

      <ContentSection title="6. Role of Kwick24">
        <p>Kwick24 acts as a service provider and manpower facilitator.</p>
        <p>
          We try our best to provide skilled and verified workers; however, Kwick24
          does not guarantee uninterrupted, error-free, or defect-free services.
        </p>
        <p>
          The customer is responsible for supervising the work being performed at
          their premises.
        </p>
      </ContentSection>

      <ContentSection title="7. Customer Responsibilities">
        <p>Customers agree to:</p>
        <ContentList items={customerResponsibilities} />
        <p>
          Kwick24 reserves the right to refuse service in case of misconduct or
          unsafe conditions.
        </p>
      </ContentSection>

      <ContentSection title="8. Damages & Liability">
        <p>
          Kwick24 shall not be held responsible for indirect, incidental, or
          consequential damages arising during or after service completion.
        </p>
        <p>
          Any dispute regarding workmanship must be reported within 24 hours of
          service completion.
        </p>
        <p>
          Customers are advised to keep valuable items secure before work begins.
        </p>
      </ContentSection>

      <ContentSection title="9. Cancellation Policy">
        <p>Service bookings may be cancelled before dispatch of manpower.</p>
        <p>
          Cancellation charges may apply for last-minute cancellations or emergency
          bookings.
        </p>
      </ContentSection>

      <ContentSection title="10. Worker Availability">
        <p>
          Kwick24 does not guarantee continuous availability of any specific worker,
          technician, or staff member.
        </p>
        <p>
          Replacement staff may be provided based on operational requirements.
        </p>
      </ContentSection>

      <ContentSection title="11. Prohibited Activities">
        <p>Users shall not:</p>
        <ContentList items={prohibitedActivities} />
      </ContentSection>

      <ContentSection title="12. Intellectual Property">
        <p>
          All website content including logo, design, text, graphics, and branding
          belongs to Kwick24 and may not be copied or reused without written
          permission.
        </p>
      </ContentSection>

      <ContentSection title="13. Privacy">
        <p>
          Customer details shared with Kwick24 will be used only for service-related
          communication and operational purposes.
        </p>
        <p>We do not sell personal customer information to third parties.</p>
      </ContentSection>

      <ContentSection title="14. Changes to Terms">
        <p>
          Kwick24 reserves the right to modify these Terms & Conditions at any time
          without prior notice.
        </p>
        <p>
          Updated terms will be effective immediately after being posted on the
          website.
        </p>
      </ContentSection>

      <ContentSection title="15. Governing Law">
        <p>
          These Terms & Conditions shall be governed by and interpreted in accordance
          with the laws of India.
        </p>
        <p>
          Any disputes shall be subject to the jurisdiction of the competent courts
          of Punjab, India.
        </p>
      </ContentSection>

      <ContentSection title="16. Contact Information">
        <p>For any queries or support, contact:</p>
        <div className="mt-4 p-5 rounded-xl border border-gold/20 bg-white/[0.03] space-y-3">
          <p className="font-display text-gold font-semibold text-lg">Kwick24</p>
          <p className="flex items-center gap-2 text-zinc-300">
            <Phone size={16} className="text-gold shrink-0" />
            Mobile: 7901831036
          </p>
          <p className="flex items-center gap-2 text-zinc-300">
            <Mail size={16} className="text-gold shrink-0" />
            Email: kwickservices24@gmail.com
          </p>
          <p className="flex items-center gap-2 text-zinc-300">
            <MapPin size={16} className="text-gold shrink-0" />
            Punjab, India
          </p>
        </div>
      </ContentSection>
    </ContentPageLayout>
  );
}
