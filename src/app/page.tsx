"use client"
import dynamic from "next/dynamic";
import { faqData } from "@/utils/fakeData/faqData";
const Hero = dynamic(() => import("@/components/home/Hero"));
const RecentWorks = dynamic(() => import("@/components/home/RecentWorks"));
const BraingigProcess = dynamic(() => import("@/components/home/BraingigProcess"));
const Services = dynamic(() => import("@/components/home/Services"));
const AboutUs = dynamic(() => import("@/components/home/AboutUs"));
const Testimonials = dynamic(() => import("@/components/shared/Testimonials"));
const CTA = dynamic(() => import("@/components/shared/CTA"));
const Brands = dynamic(() => import("@/components/shared/Brands"));
const FAQ = dynamic(() => import("@/components/service-details/FAQ"));
const OurFeatures = dynamic(() => import("@/components/home/OurFeatures"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));
const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));

const HomePage = () => {
  return (
    <ClientWrapper>
      <TextLineAnimation />
      <Hero />
      <AboutUs />
      <Testimonials />
      <RecentWorks />
      <BraingigProcess />
      <Services />
      <OurFeatures />
      <FAQ data={faqData} />

      <CTA
        title="See how Brain Gig can boost your business with our specialized, result-driven approach."
        buttonText="Schedule Your Free Consultation Today!"
        link="/contact"
      />
      <Brands customClass="pt-0 pb-15" />
    </ClientWrapper>
  );
};

export default HomePage;
