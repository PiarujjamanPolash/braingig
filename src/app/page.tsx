import dynamic from "next/dynamic";

// import Hero from "@/components/home/Hero";
// import Testimonial from "@/components/home/Testimonial";
// import RecentWorks from "@/components/home/RecentWorks";
// import WorkingProcess from "@/components/home/WorkingProcess";
// import Services from "@/components/home/Services";
// import AboutUs from "@/components/home/AboutUs";
// import ClientWrapper from "@/components/wrappers/ClientWrapper";
// import TextLineAnimation from "@/components/animations/TextLineAnimation";

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
      {/* <RecentWorks /> */}
      <WorkingProcess />
      <Services />
    </ClientWrapper>
  );
};

export default HomePage;
