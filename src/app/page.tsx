import dynamic from "next/dynamic";
import { faqData } from "@/utils/fakeData/faqData";
import OurFeatures from "@/components/home/OurFeatures";
import Testimonials from "@/components/service-details/directory-service/Testimonials";

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
    </ClientWrapper>
  );
};

export default HomePage;
