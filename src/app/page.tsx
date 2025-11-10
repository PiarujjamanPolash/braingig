import dynamic from "next/dynamic";
import { faqData } from "@/utils/fakeData/faqData";

const Hero = dynamic(() => import("@/components/home/Hero"));
const Testimonial = dynamic(() => import("@/components/home/Testimonial"));
const RecentWorks = dynamic(() => import("@/components/home/RecentWorks"));
const WorkingProcess = dynamic(() => import("@/components/home/WorkingProcess"));
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
      <Testimonial />
      <RecentWorks />
      <WorkingProcess />
      <Services />
    </ClientWrapper>
  );
};

export default HomePage;
