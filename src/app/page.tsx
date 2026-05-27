import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
      <Header />
      <main>
        <Hero />
        <ServiceCategories />
        <WhyChoose />
        <WorkerShowcase />
        <HowItWorks />
        <Testimonials />
        <MobileApp />
      </main>
      <Footer />
    </>
  );
}
