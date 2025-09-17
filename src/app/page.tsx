"use client";

import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import RecentWorks from "@/components/home/RecentWorks";
import WorkingProcess from "@/components/home/WorkingProcess";
import Services from "@/components/home/Services";
import AboutUs from "@/components/home/AboutUs";
import ClientWrapper from "@/components/wrappers/ClientWrapper";
import TextLineAnimation from "@/components/animations/TextLineAnimation";

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
