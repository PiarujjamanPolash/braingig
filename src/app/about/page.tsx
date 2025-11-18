"use client"
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = dynamic(() => import("@/components/about/Hero"));
const WhoWeAre = dynamic(() => import("@/components/about/WhoweAre"));
const MissionVision = dynamic(() => import("@/components/about/MissionVision"));
const Features = dynamic(() => import("@/components/about/Features"));
const Team = dynamic(() => import("@/components/about/Team"));
const CTA = dynamic(() => import("@/components/shared/CTA"));
const HowWeWork = dynamic(() => import("@/components/about/HowWeWork"));
const Testimonials = dynamic(() => import("@/components/shared/Testimonials"));
const Brands = dynamic(() => import("@/components/shared/Brands"));
const AnimateTitle = dynamic(() => import("@/components/animations/AnimateTitle"));
const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));
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
