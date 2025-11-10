"use client"
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
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
            <Testimonial />
            <Features />
            <Team />
        </ClientWrapper>
    );
};

export default About;
