"use client"

import Image from "next/image";
import thumb from "../../../public/images/services/thumb.webp"
const IntroArea: React.FC = () => {

    return (
        <div className="container">
            <div className="td-service-main-area pb-15 lg:pb-20">
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
                                className="td-service-main-content text-center pt-10 lg:pt-20 lg:mb-12"
                            >
                                <span className="mb-3 inline-block !text-secondary">Who we are</span>
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
                                className="td-service-main-expreance mb-[30px] text-center lg:text-start"
                            >
                                <h2 className="text-[160px] text-secondary mb-0 leading-none">5</h2>
                                <span className="year">YEARS OF WORK EXPERIENCE</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-8/12">
                            <div className="td-service-main-strategy-wrap lg:ml-[50px]">
                                <div className="flex flex-wrap">
                                    <div
                                        className="w-full md:w-6/12"
                                    >
                                        <div className="td-service-main-strategy mb-5 lg:mb-10 text-center md:text-start">
                                            <h3 className="title mb-2 lg:mb-5">Brand strategy</h3>
                                            <p className="text text-base lg:text-lg font-semibold">
                                                Some definitions of marketing highlight marketing&apos;s ability to
                                                produce
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="w-full md:w-6/12"
                                    >
                                        <div className="td-service-main-strategy mb-5 lg:mb-10 text-center md:text-start">
                                            <h3 className="title mb-2 lg:mb-5">Make it creative</h3>
                                            <p className="text text-base lg:text-lg font-semibold">
                                                Some definitions of marketing highlight marketing&apos;s ability to
                                                produce
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="w-full"
                                    >
                                        <div className="hidden md:block td-service-main-strategy text-center md:text-start">
                                            <p className="text text-base lg:text-lg font-medium">
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
