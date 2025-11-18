import dynamic from "next/dynamic";
import { digitalMarketingFaq } from "@/utils/fakeData/digitalMarketingFaq";
import { servicesData } from "@/utils/fakeData/servicesData";

const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));

const DirectoryHero = dynamic(() => import("@/components/service-details/directory-service/Hero"));
const DirectoryAbout = dynamic(() => import("@/components/service-details/directory-service/About"));
const DirectoryServices = dynamic(() => import("@/components/service-details/directory-service/Services"));
const DirectoryPortfolio = dynamic(() => import("@/components/service-details/directory-service/Portfolio"));
const CounterArea = dynamic(() => import("@/components/service-details/directory-service/CounterArea"));
const ChooseArea = dynamic(() => import("@/components/service-details/directory-service/ChooseArea"));
const DirectoryTestimonials = dynamic(() => import("@/components/shared/Testimonials"));

const Hero = dynamic(() => import("@/components/service-details/Hero"));
const About = dynamic(() => import("@/components/service-details/About"));
const WhatYouGet = dynamic(() => import("@/components/service-details/WhatYouGet"));
const WhyUs = dynamic(() => import("@/components/service-details/digital-marketing-service/why-us/WhyUs"));
const Process = dynamic(() => import("@/components/service-details/Process"));
const Team = dynamic(() => import("@/components/service-details/Team"));
const PricingArea = dynamic(() => import("@/components/service-details/digital-marketing-service/pricing/PricingArea"));
const FAQ = dynamic(() => import("@/components/service-details/FAQ"));
const Projects = dynamic(() => import("@/components/service-details/Projects"));
const CTA = dynamic(() => import("@/components/service-details/CTA"));
const Testimonials = dynamic(() => import("@/components/service-details/Testimonials"));


const Brands = dynamic(() => import("@/components/shared/Brands"));

export async function generateStaticParams() {
    return servicesData.map(service => ({
        slug: service.slug,
    }));
}
const ServicesPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params
    const service = servicesData.find(s => s.slug === slug);
    if (slug === "directory-listing-website-development") {
        return (
            <ClientWrapper>
                <div>
                    <DirectoryHero />
                    <DirectoryAbout />
                    <DirectoryServices />
                    <DirectoryPortfolio />
                    <CounterArea />
                    <ChooseArea />
                    <DirectoryTestimonials />
                    <Brands customClass="pt-[30px] pb-15" />
                </div>
            </ClientWrapper>
        );
    }
   
    if (!service) return <p>Service not found</p>;

    return (
        <ClientWrapper>
            <TextLineAnimation />
            {service && <Hero service={service} />}
            <About />
            {slug === "digital-marketing-strategy" && <WhyUs />}
            {service && <WhatYouGet service={service} />}
            <Projects service={service} />
            <Process />
            <Testimonials />
            {slug === "digital-marketing-strategy" && <PricingArea />}
            <Team />
            <FAQ data={digitalMarketingFaq} />
            {service && <CTA service={service} />}
            <Brands customClass="pt-0 pb-15" />
        </ClientWrapper>
    );
};

export default ServicesPage;
