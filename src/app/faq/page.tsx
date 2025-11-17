"use client";

import { faqData } from "@/utils/fakeData/faqData";
import dynamic from "next/dynamic";
import {  useRef } from "react";

const AnimateTwoContent = dynamic(() => import("@/components/animations/AnimateTwoContent"));
const FaqSearch = dynamic(() => import("@/components/faq/FaqSearch"));
const Accordion = dynamic(() => import("@/components/shared/Accordion"));
const Breadcrumb = dynamic(() => import("@/components/shared/Breadcrumb"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));

const FAQ = () => {
    const thumbRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <ClientWrapper>
            <AnimateTwoContent 
            thumbRef={thumbRef as React.RefObject<HTMLElement>} 
            contentRef={contentRef as React.RefObject<HTMLElement>}/>
            <div className="container">
                <Breadcrumb
                    subtitle="OUR FAQ"
                    title={
                        <>
                            Frequently asked <br />
                            <span>question</span>
                        </>
                    }
                    description="Find clear and helpful answers to the most common questions our users ask. Explore solutions, guidance, and tips designed to make your experience smoother."
                />

                <div className="td-faq-2-area pb-[32px] md:pb-[40px] lg:pb-[130px]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Left image + form */}
                            <div ref={thumbRef} className="lg:col-span-5">
                                <FaqSearch />
                            </div>

                            {/* Right accordion */}
                            <div ref={contentRef} className="lg:col-span-7">
                                <div className="td-faq-4-wrap-right td-faq-2-wrap-right td-faq-main-wrap-right mb-8">
                                    <Accordion data={faqData} />
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
