
import TextLineAnimation from "@/components/animations/TextLineAnimation";
import WorkingProcess from "@/components/home/WorkingProcess";
import FAQ from "@/components/service-details/FAQ";
import Hero from "@/components/service-details/Hero";
import Partners from "@/components/service-details/Partners";
import Projects from "@/components/service-details/Projects";
import ClientWrapper from "@/components/wrappers/ClientWrapper";
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
