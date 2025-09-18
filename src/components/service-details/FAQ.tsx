"use client"
import Accordion from "@/components/shared/Accordion";
import Image from "next/image";
import thumb from "../../../public/images/service-details/faq-thumb.jpg"
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const FAQ: React.FC = () => {
    const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/faq") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);
    return (
        <div className="w-[90%] mx-auto mb-[80px]">
            <div className="td-faq-2-area">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Left Image */}
                        <div className="w-full">
                            <div className="td-faq-2-thumb mb-8 fix td-rounded-10">
                                <Image
                                    width={533}
                                    height={747}
                                    data-speed=".9"
                                    className="td-rounded-10"
                                    src={thumb}
                                    alt="thumb"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full">
                            <div className="td-faq-4-wrap-right td-faq-2-wrap-right mb-8">
                                <h2 className="td-testimonial-title mb-5 td-text-invert">
                                    Frequently asked <span>questions</span>
                                </h2>

                                <Accordion />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
