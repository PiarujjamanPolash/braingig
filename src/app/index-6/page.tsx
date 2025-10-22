import TextLineAnimation from "@/components/animations/TextLineAnimation";
import Services from "@/components/home/Services";
import About from "@/components/index-6/About";
import ChooseArea from "@/components/index-6/ChooseArea";
import Counter from "@/components/index-6/Counter";
import Hero from "@/components/index-6/Hero";
import Portfolio from "@/components/index-6/Portfolio";
import PricingArea from "@/components/index-6/PricingArea";
import Team from "@/components/index-6/Team";
import Testimonial from "@/components/index-6/Testimonial";
import VideoArea from "@/components/index-6/VideoArea";
import dynamic from "next/dynamic";

const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));

const Index6 = () => {

    return (
        <ClientWrapper>
            <TextLineAnimation />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <VideoArea />
            <PricingArea />
            <Testimonial />
            <ChooseArea />
            <Team />
            <Counter />
        </ClientWrapper>
    );
};

export default Index6;
