"use client";

import AnimateTwoContent from "@/components/animations/AnimateTwoContent";
import FaqSearch from "@/components/faq/FaqSearch";
import Accordion from "@/components/shared/Accordion";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ClientWrapper from "@/components/wrappers/ClientWrapper";
import {  useRef } from "react";


const FAQ = () => {
    const thumbRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <ClientWrapper>
            <AnimateTwoContent 
            thumbRef={thumbRef as React.RefObject<HTMLElement>} 
            contentRef={contentRef as React.RefObject<HTMLElement>}/>
            <div className="w-[90%] mx-auto">
                <Breadcrumb
                    subtitle="OUR FAQ"
                    title={
                        <>
                            Frequently asked <br />
                            <span>question</span>
                        </>
                    }
                    description="Parody dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                />

                <div className="td-faq-2-area pb-32 md:pb-40 lg:pb-[130px]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Left image + form */}
                            <div ref={thumbRef} className="lg:col-span-5">
                                <FaqSearch />
                            </div>

                            {/* Right accordion */}
                            <div ref={contentRef} className="lg:col-span-7">
                                <div className="td-faq-4-wrap-right td-faq-2-wrap-right td-faq-main-wrap-right mb-8">
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientWrapper>
    );
};

export default FAQ;
