import dynamic from "next/dynamic";

const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));
const WorkingProcess = dynamic(() => import("@/components/home/BraingigProcess"));
const FAQ = dynamic(() => import("@/components/service-details/FAQ"));
const Hero = dynamic(() => import("@/components/service-details/Hero"));
const Partners = dynamic(() => import("@/components/service-details/Partners"));
const Projects = dynamic(() => import("@/components/service-details/Projects"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));

const DirectoryHero = dynamic(() => import("@/components/service-details/directory-service/Hero"));
const About = dynamic(() => import("@/components/service-details/directory-service/About"));
const DirectoryPartners = dynamic(() => import("@/components/service-details/directory-service/Partners"));
const Portfolio = dynamic(() => import("@/components/service-details/directory-service/Portfolio"));
const Services = dynamic(() => import("@/components/service-details/directory-service/Services"));
const CounterArea = dynamic(() => import("@/components/service-details/directory-service/CounterArea"));
const ChooseArea = dynamic(() => import("@/components/service-details/directory-service/ChooseArea"));
const Testimonials = dynamic(() => import("@/components/service-details/directory-service/Testimonials"));

const DigitalMarketingHero = dynamic(() => import("@/components/service-details/digital-marketing-service/Hero"));
const DigitalMarketingAbout = dynamic(() => import("@/components/service-details/digital-marketing-service/About"));
const WhatYouGet = dynamic(() => import("@/components/service-details/digital-marketing-service/WhatYouGet"));
const WhyUs = dynamic(() => import("@/components/service-details/digital-marketing-service/why-us/WhyUs"));
const Process = dynamic(() => import("@/components/service-details/digital-marketing-service/Process"));
const CTA = dynamic(() => import("@/components/service-details/digital-marketing-service/CTA"));
const Testimonial = dynamic(() => import("@/components/service-details/digital-marketing-service/Testimonial"));
const Team = dynamic(() => import("@/components/service-details/digital-marketing-service/Team"));
const Counter = dynamic(() => import("@/components/service-details/digital-marketing-service/Counter"));
const PricingArea = dynamic(() => import("@/components/service-details/digital-marketing-service/pricing/PricingArea"));
const RecentWorks = dynamic(() => import("@/components/home/RecentWorks"));



import { servicesData } from "@/utils/fakeData/servicesData";
import { faqData } from "@/utils/fakeData/faqData";
import { digitalMarketingFaq } from "@/utils/fakeData/digitalMarketingFaq";

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
                    <About />
                    <DirectoryPartners />
                    <Services />
                    <Portfolio />
                    <CounterArea />
                    <ChooseArea />
                    <Testimonials />
                </div>
            </ClientWrapper>
        );
    }
    if (slug === "digital-marketing-strategy") {
        return (
            <ClientWrapper>
                <TextLineAnimation />
                <DigitalMarketingHero />
                <DigitalMarketingAbout />
                <WhyUs />
                <WhatYouGet />
                <RecentWorks />
                <CTA />
                <Process />
                <Testimonial />
                <PricingArea />
                <Team />
                {/* <Counter /> */}
                <FAQ data={digitalMarketingFaq} />
            </ClientWrapper>
        );
    }

    if (!service) return <p>Service not found</p>;

    return (
        <ClientWrapper>
            <div>
                <TextLineAnimation />
                <Hero service={service} />
                <Projects service={service} />
                <Partners />
                <WorkingProcess />
                <FAQ data={faqData} />
            </div>
        </ClientWrapper>
    );
};

export default ServicesPage;
