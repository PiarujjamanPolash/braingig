"use client";

import Awards from "@/components/about/Awards";
import Features from "@/components/about/Features";
import Hero from "@/components/about/Hero";
import Team from "@/components/about/Team";
import AnimateTitle from "@/components/animations/AnimateTitle";
import TextLineAnimation from "@/components/animations/TextLineAnimation";
import Testimonial from "@/components/home/Testimonial";
import ClientWrapper from "@/components/wrappers/ClientWrapper";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);

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
