"use client"
import dynamic from "next/dynamic";

const BranchArea = dynamic(() => import("@/components/contact/BranchArea"));
const MainArea = dynamic(() => import("@/components/contact/MainArea"));
const MapArea = dynamic(() => import("@/components/contact/MapArea"), { ssr: false });
const Breadcrumb = dynamic(() => import("@/components/shared/Breadcrumb"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));


const ContactPage = () => {
    return (
        <ClientWrapper>
            <div>
                <Breadcrumb
                    subtitle="Contact Us"
                    title={
                        <>
                            Would you like more information? we are
                            happy <span style={{color: "#ff5722"}}>to help you!</span>
                        </>
                    }
                />
                <MapArea />
                <MainArea />
                <BranchArea />
            </div>
        </ClientWrapper>
    );
};

export default ContactPage;
