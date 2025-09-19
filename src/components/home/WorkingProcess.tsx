"use client";

import { workProcessData } from "@/utils/fakeData/workProcessData";
import Image from "next/image";
import ScrollPinAnimation from "../animations/ScrollPinAnimation";
import thumb from "../../../public/images/working-process/thumb.webp"

const WorkingProcess: React.FC = () => {
    return (
        <div id="working-process" className="td-process-area py-[80px] lg:pt-[130px] lg:pb-[160px] w-[90%] mx-auto">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="td-service-title-wrap pb-[10px] flex flex-col">
                            <h2 className="td-section-title mb-0 td-text-invert">BrainGig</h2>
                            <h3 className="td-section-title-capi td-text-invert">Process</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="td-process-border td-fixed-thumb-wrap">
                    <div className="grid lg:grid-cols-12 grid-cols-1">
                        {/* Left Image */}
                        <div className="lg:col-span-3 col-span-12 mr-3">
                            <ScrollPinAnimation>
                                <div className="td-process-thumb pt-[80px] pb-[80px] td-fixed-thumb">
                                    <Image width={280} height={320} className="w-full lg:w-[280px]" src={thumb} alt="thumb" />
                                </div>
                            </ScrollPinAnimation>
                        </div>

                        {/* Right Content */}
                        <div className="lg:col-span-9 col-span-12">
                            {workProcessData.map((item, index) => (
                                <div key={item.id} className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-9">
                                    <div className="lg:col-span-1 md:col-span-3 col-span-1">
                                        <div className={`td-process-count ${index === workProcessData.length - 1 ? "no-border" : ""}`}>
                                            <span>{String(item.id).padStart(2, "0")}</span>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 md:col-span-4 col-span-8 ml-5 md:ml-0">
                                        <div className={`td-process-title ${index === workProcessData.length - 1 ? "no-border" : ""}`}>
                                            <h3 className="mb-0">
                                                {item.title.split(" & ")[0]} <br className="hidden lg:block" /> <span>{item.title.split(" & ")[1] || ""}</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-5 md:col-span-5 col-span-12">
                                        <div className={`td-process-list ${index === workProcessData.length - 1 ? "no-border" : ""}`}>
                                            <ul>
                                                <li>{item.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default WorkingProcess;
