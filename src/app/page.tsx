import { Hero } from "@/components/home/Hero";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { WhyChoose } from "@/components/home/WhyChoose";
import { WorkerShowcase } from "@/components/home/WorkerShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { MobileApp } from "@/components/home/MobileApp";

export default function HomePage() {
  return (
    <>
        <Hero />
        <ServiceCategories />
        <WhyChoose />
        <WorkerShowcase />
        <HowItWorks />
        <Testimonials />
        <MobileApp />
    </>
  );
}
