"use client"
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import WhoWeAre from "@/components/about/WhoweAre";
import MissionVision from "@/components/about/MissionVision";
import HowWeWork from "@/components/about/HowWeWork";
import Testimonials from "@/components/service-details/directory-service/Testimonials";
import CTA from "@/components/home/CTA";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Features = dynamic(() => import("@/components/about/Features"));
const Hero = dynamic(() => import("@/components/about/Hero"));
const Team = dynamic(() => import("@/components/about/Team"));
const AnimateTitle = dynamic(() => import("@/components/animations/AnimateTitle"));
const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));
const Testimonial = dynamic(() => import("@/components/home/Testimonial"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));


const About = () => {
    return (
        <ClientWrapper>
            <TextLineAnimation />
            <AnimateTitle />
            <Hero />
            <WhoWeAre />
            <MissionVision />
            <Features />
            <Team />
            <HowWeWork />
            <Testimonials />
            <CTA
                text="Discover the difference a dedicated <strong>digital marketing agency</strong> can make."
                buttonLabel="Contact Brain Gig Today"
                buttonLink="/contact"
                background="/images/cta-home.avif"
            />

        </ClientWrapper>
    );
};

export default About;
