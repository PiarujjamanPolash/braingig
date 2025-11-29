"use client";
import TextLineAnimation from "@/components/animations/TextLineAnimation";
import BranchArea from "@/components/contact/BranchArea";
import Hero from "@/components/contact/Hero";
import MainArea from "@/components/contact/MainArea";
import MapArea from "@/components/contact/MapArea";
import ClientWrapper from "@/components/wrappers/ClientWrapper";

const ContactPage = () => {
    return (
        <ClientWrapper>
            <TextLineAnimation />
            <div>
                <Hero />
                <MainArea />
                <MapArea />
                <BranchArea />
            </div>
        </ClientWrapper>
    );
};

export default ContactPage;
