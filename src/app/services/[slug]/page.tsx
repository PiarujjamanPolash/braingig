import dynamic from "next/dynamic";
import { servicesData } from "@/utils/fakeData/servicesData";
import ClientWrapper from "@/components/wrappers/ClientWrapper";

const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));
const WorkingProcess = dynamic(() => import("@/components/home/WorkingProcess"));
const FAQ = dynamic(() => import("@/components/service-details/FAQ"));
const Hero = dynamic(() => import("@/components/service-details/Hero"));
const Partners = dynamic(() => import("@/components/service-details/Partners"));
const Projects = dynamic(() => import("@/components/service-details/Projects"));
import Services from '@/components/index-3/Services'
import Services6 from '@/components/home/Services'
import About from "@/components/index-3/About";
import About6 from "@/components/index-6/About";
import Hero3 from "@/components/index-3/Hero";
import Partners3 from "@/components/index-3/Partners";
import Hero6 from "@/components/index-6/Hero";
import Portfolio from "@/components/index-3/Portfolio";
import Portfolio6 from "@/components/index-6/Portfolio";
import Counter from '@/components/index-3/Counter';
import ChooseArea from '@/components/index-3/ChooseArea';
import Testimonials from '@/components/index-3/Testimonials';
import Testimonial from "@/components/index-6/Testimonial";
import PricingArea from "@/components/index-6/PricingArea";
import Team from "@/components/index-6/Team";
import VideoArea from "@/components/index-6/VideoArea";
// Custom component for index-3

export async function generateStaticParams() {
    return servicesData.map(service => ({
        slug: service.slug,
    }));
}

const ServicesPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    if (slug === "directory-listing-website-development") {
        // Render your custom directory page
        return (
            <ClientWrapper>
                <div>
                    <Hero3 />
                    <About />
                    <Partners3 />
                    <Services />
                    <Portfolio />
                    <Counter />
                    <ChooseArea />
                    <Testimonials />
                </div>
            </ClientWrapper>
        );
    }
    if (slug === "digital-marketing-strategy") {
        // Render your custom directory page
        return (
            <ClientWrapper>
                <TextLineAnimation />
                <Hero6 />
                <About6 />
                <Services6 />
                <Portfolio6 />
                <VideoArea />
                <PricingArea />
                <Testimonial />
                <ChooseArea />
                <Team />
                <Counter />
            </ClientWrapper>
        );
    }

    const service = servicesData.find(s => s.slug === slug);
    if (!service) return <p>Service not found</p>;

    return (
        <ClientWrapper>
            <div>
                <TextLineAnimation />
                <Hero service={service} />
                <Projects service={service} />
                <Partners />
                <WorkingProcess />
                <FAQ />
            </div>
        </ClientWrapper>
    );
};

export default ServicesPage;
