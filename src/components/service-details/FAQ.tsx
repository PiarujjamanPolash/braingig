"use client"
import Accordion from "@/components/shared/Accordion";
import Image from "next/image";
import thumb from "../../../public/images/service-details/faq-thumb.webp"
type FAQItem = {
    id: string;
    question: string;
    ans: string;
};

interface FAQProps {
    data: FAQItem[];
}
const FAQ: React.FC<FAQProps> = ({ data }) => {
    return (
        <section>
            <div className="td-faq-2-area">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Left Image */}
                        <div className="w-full hidden md:block">
                            <div className="td-faq-2-thumb td-rounded-10">
                                <Image
                                    width={533}
                                    height={747}
                                    className="td-rounded-10 w-full"
                                    src={thumb}
                                    alt="thumb"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full">
                            <div className="td-faq-4-wrap-right td-faq-2-wrap-right">
                                <h2 className="font-medium text-[40px] lg:text-[60px] tracking-wide td-text-invert-orange">
                                    Frequently asked <span>questions</span>
                                </h2>
                                <Accordion data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
