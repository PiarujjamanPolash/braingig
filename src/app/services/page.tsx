"use client";

import AnimateFadeInLeft from "@/components/animations/AnimateFadeInLeft";
import ScrollPinAnimation from "@/components/animations/ScrollPinAnimation";
import ServicesPinAnimation from "@/components/animations/ServicesPinAnimation";
import TextLineAnimation from "@/components/animations/TextLineAnimation";
import Brands from "@/components/services/Brands";
import IntroArea from "@/components/services/IntroArea";
import ServiceShowcasing from "@/components/services/ServiceShowcasing";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ClientWrapper from "@/components/wrappers/ClientWrapper";

const ServicesPage = () => {
    return (
        <ClientWrapper>
            <div>
                <TextLineAnimation />
                <AnimateFadeInLeft />
                <ScrollPinAnimation />
                <ServicesPinAnimation />
                {/* <Hero />
                <Projects /> */}
                <Breadcrumb
                    subtitle="BEST SERVICE PROVIDE"
                    title={
                        <>
                            Experience  <br/> The
                            <span> Best Service</span>
                        </>
                    }
                    description="We deliver innovative digital solutions tailored to your business needs. From strategy to execution, our expert team ensures growth, efficiency, and lasting impact with every service we provide."
                />
                <IntroArea />
                <ServiceShowcasing />
                <Brands />
            </div>
        </ClientWrapper>
    );
};

export default ServicesPage;
