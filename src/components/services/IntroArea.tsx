"use client"

import Image from "next/image";
import thumb from "../../../public/images/services/thumb.webp"
const IntroArea: React.FC = () => {

    return (
        <div className="w-[90%] mx-auto">
            <div className="td-service-main-area pb-[125px]">
                <div className="container mx-auto px-4">
                    {/* First row */}
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="td-service-main-bigthumb fix td-rounded-10 h-[274px] md:h-[350px] lg:h-[700px]">
                                <Image width={1320} height={616} priority className="w-full h-full object-cover" data-speed=".9" src={thumb} alt="thumb" />
                            </div>
                        </div>
                    </div>

                    {/* Second row */}
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12">
                            <div
                                className="td-service-main-content text-center pt-[80px] lg:pt-[140px] mb-[30px] lg:mb-[60px]"
                            >
                                <span className="mb-[25px] inline-block">Who we are</span>
                                <h2>
                                    We provide brilliant ideas to help your startup grow building your
                                    branding with precision
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Third row */}
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-4/12">
                            <div
                                className="td-service-main-expreance mb-[30px] text-center md:text-start"
                            >
                                <h2 className="expreance mb-0">5</h2>
                                <span className="year">YEARS OF WORK EXPERIENCE</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-8/12">
                            <div className="td-service-main-strategy-wrap lg:ml-[50px]">
                                <div className="flex flex-wrap">
                                    <div
                                        className="w-full md:w-6/12"
                                    >
                                        <div className="td-service-main-strategy mb-[40px] text-center md:text-start">
                                            <h3 className="title mb-[20px]">Brand strategy</h3>
                                            <p className="text">
                                                Some definitions of marketing highlight marketing&apos;s ability to
                                                produce
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="w-full md:w-6/12"
                                    >
                                        <div className="td-service-main-strategy mb-[40px] text-center md:text-start">
                                            <h3 className="title mb-[20px]">Make it creative</h3>
                                            <p className="text">
                                                Some definitions of marketing highlight marketing&apos;s ability to
                                                produce
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="w-full"
                                    >
                                        <div className="td-service-main-strategy text-center md:text-start">
                                            <p className="text">
                                                Some definitions of marketing highlight marketing&apos;s ability to
                                                produce value to shareholders of the firm as well. In this
                                                context, marketing can be defined as the management process
                                                that seeks to maximise returns to shareholders
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IntroArea;
