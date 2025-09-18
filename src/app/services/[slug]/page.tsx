import dynamic from "next/dynamic";

const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));
const WorkingProcess = dynamic(() => import("@/components/home/WorkingProcess"));
const FAQ = dynamic(() => import("@/components/service-details/FAQ"));
const Hero = dynamic(() => import("@/components/service-details/Hero"));
const Partners = dynamic(() => import("@/components/service-details/Partners"));
const Projects = dynamic(() => import("@/components/service-details/Projects"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));
import { servicesData } from "@/utils/fakeData/servicesData"; 


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
