"use client";
import Services from '@/components/index-3/Services'
import About from "@/components/index-3/About";
import Hero from "@/components/index-3/Hero";
import Partners from "@/components/index-3/Partners";
import Portfolio from "@/components/index-3/Portfolio";
import ClientWrapper from "@/components/wrappers/ClientWrapper";
import Counter from '@/components/index-3/Counter';
import ChooseArea from '@/components/index-3/ChooseArea';
import Testimonials from '@/components/index-3/Testimonials';

const ContactPage = () => {
    return (
        <ClientWrapper>
            <Hero />
            <About />
            <Partners />
            <Services />
            <Portfolio />
            <Counter />
            <ChooseArea />
            <Testimonials />
        </ClientWrapper>
    );
};

export default ContactPage;
