import dynamic from "next/dynamic";

const ServicesPinAnimation = dynamic(() => import("@/components/animations/ServicesPinAnimation"));
const TextLineAnimation = dynamic(() => import("@/components/animations/TextLineAnimation"));
const IntroArea = dynamic(() => import("@/components/services/IntroArea"));
const ServiceShowcasing = dynamic(() => import("@/components/services/ServiceShowcasing"));
const Brands = dynamic(() => import("@/components/shared/Brands"));
const Breadcrumb = dynamic(() => import("@/components/shared/Breadcrumb"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));

const ServicesPage = () => {
    return (
        <ClientWrapper>
            <div>
                <TextLineAnimation />
                <ServicesPinAnimation />
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
