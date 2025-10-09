import Services from "@/components/home/Services";
import About from "@/components/index-6/About";
import Hero from "@/components/index-6/Hero";
import Portfolio from "@/components/index-6/Portfolio";
import PricingArea from "@/components/index-6/PricingArea";
import VideoArea from "@/components/index-6/VideoArea";
import dynamic from "next/dynamic";

const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));

const Index6 = () => {

    return (
        <ClientWrapper>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <VideoArea />
        <PricingArea />
        </ClientWrapper>
    );
};

export default Index6;
