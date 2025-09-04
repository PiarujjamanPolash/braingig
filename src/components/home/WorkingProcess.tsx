"use client";

import { workProcessData } from "@/utils/fakeData/workProcessData";
import Image from "next/image";

const WorkingProcess: React.FC = () => {
    
   
    return (
        <div id="working-process" className="td-process-area pt-[130px] pb-[160px] w-[90%] mx-auto">
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
                            <div className="td-process-thumb pt-[80px] pb-[80px] td-fixed-thumb td-scroll-pin">
                                <Image width={280} height={320} src="/images/all_images/image-7.jpg" alt="" />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:col-span-9 col-span-12">
                            {workProcessData.map((item, index) => (
                                <div key={item.id} className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12">
                                    {/* Step Number */}
                                    <div className="lg:col-span-1 md:col-span-3 col-span-3">
                                        <div className={`td-process-count ${index === workProcessData.length - 1 ? "no-border" : ""}`}>
                                            <span>{String(item.id).padStart(2, "0")}</span>
                                        </div>
                                    </div>

                                    {/* Step Title */}
                                    <div className="lg:col-span-6 md:col-span-4 col-span-9">
                                        <div className={`td-process-title ${index === workProcessData.length - 1 ? "no-border" : ""}`}>
                                            <h3 className="mb-0">
                                                {item.title.split(" & ")[0]} <br /> <span>{item.title.split(" & ")[1] || ""}</span>
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Step Description */}
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
