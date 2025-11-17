import dynamic from "next/dynamic";
import { faqData } from "@/utils/fakeData/faqData";
import OurFeatures from "@/components/home/OurFeatures";
import Testimonials from "@/components/service-details/directory-service/Testimonials";
import FAQ from "@/components/service-details/FAQ";
import CTA from "@/components/service-details/digital-marketing-service/CTA";
import Brands from "@/components/shared/Brands";

const Hero = dynamic(() => import("@/components/home/Hero"));
const RecentWorks = dynamic(() => import("@/components/home/RecentWorks"));
const BraingigProcess = dynamic(() => import("@/components/home/BraingigProcess"));
const Services = dynamic(() => import("@/components/home/Services"));
const AboutUs = dynamic(() => import("@/components/home/AboutUs"));
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
