"use client"
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import WhoWeAre from "@/components/about/WhoweAre";
import MissionVision from "@/components/about/MissionVision";
import HowWeWork from "@/components/about/HowWeWork";
import Brands from "@/components/shared/Brands";
import CTA from "@/components/shared/CTA";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Features = dynamic(() => import("@/components/about/Features"));
const Hero = dynamic(() => import("@/components/about/Hero"));
const Team = dynamic(() => import("@/components/about/Team"));
const AnimateTitle = dynamic(() => import("@/components/animations/AnimateTitle"));
const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));
const Testimonials = dynamic(() => import("@/components/service-details/directory-service/Testimonials"));
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
            <CTA
                title="See how Brain Gig can boost your business with our specialized, result-driven approach."
                buttonText="Schedule Your Free Consultation Today!"
                link="/contact"
            />
            <HowWeWork />
            <Testimonials />
            <Brands customClass="pt-0 pb-15" />
        </ClientWrapper>
    );
};

export default About;
