"use client";

import BranchArea from "@/components/contact/BranchArea";
import MainArea from "@/components/contact/MainArea";
import MapArea from "@/components/contact/MapArea";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ClientWrapper from "@/components/wrappers/ClientWrapper";

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
