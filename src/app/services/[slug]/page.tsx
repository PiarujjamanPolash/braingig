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
import About from "@/components/index-3/About";
import Hero3 from "@/components/index-3/Hero";
import Portfolio from "@/components/index-3/Portfolio";
import Counter from '@/components/index-3/Counter';
import ChooseArea from '@/components/index-3/ChooseArea';
import Testimonials from '@/components/index-3/Testimonials';
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
                    <Partners />
                    <Services />
                    <Portfolio />
                    <Counter />
                    <ChooseArea />
                    <Testimonials />
                </div>
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
