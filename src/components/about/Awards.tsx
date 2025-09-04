"use client"

import Image from "next/image";

const Awards: React.FC = () => {

    return (
       <div className="td-awards-area td-awards-about-wrap w-[90%] mx-auto pt-[120px] pb-[80px] lg:pb-[130px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap mb-10">
                        <div className="w-full lg:w-1/2">
                            <div className="td-awards-5-title-wrap mb-7">
                                <h2 className="td-testimonial-title mb-6 td-text-invert">
                                    Honorable <span>awards</span>
                                </h2>
                                <a className="td-awards-5-btn" href="#">
                                    Direct from the heart
                                </a>
                            </div>
                        </div>
                        <div
                            className="w-full lg:w-1/2"
                        >
                            <div className="td-awards-5-text mt-[140px] mb-7 lg:mb-30 lg:mr-[80px]">
                                <p className="mb-0">
                                    We are excited for our work and how it positively impacts clients.
                                    With over 12 years of experience we have been constantly
                                    providing solutions. We are committed
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div
                            className="w-full lg:w-1/2 wow fadeInLeft"
                            data-wow-delay=".5s"
                            data-wow-duration="1s"
                        >
                            <div className="td-awards-5-thumb text-center pt-[70px] mb-7 lg:mb-30">
                                <Image width={305} height={209} src="/images/about/about_page_award.png" alt="" />
                            </div>
                        </div>

                        <div
                            className="w-full lg:w-1/2"
                        >
                            <div className="td-awards-5-list mb-7 lg:mb-30">
                                <div className="td-awards-5-list-item flex justify-between mb-3">
                                    <div className="flex items-center">
                                        <span className="mr-[60px]">9x</span>
                                        <span>Sony world photography award</span>
                                    </div>
                                    <span>2021</span>
                                </div>
                                <div className="td-awards-5-list-item flex justify-between mb-3">
                                    <div className="flex items-center">
                                        <span className="mr-[60px]">2x</span>
                                        <span>CSS Design award world</span>
                                    </div>
                                    <span>2021</span>
                                </div>
                                <div className="td-awards-5-list-item flex justify-between mb-3">
                                    <div className="flex items-center">
                                        <span className="mr-[60px]">3x</span>
                                        <span>Featured design of the week</span>
                                    </div>
                                    <span>2021</span>
                                </div>
                                <div className="td-awards-5-list-item flex justify-between mb-3">
                                    <div className="flex items-center">
                                        <span className="mr-[60px]">6x</span>
                                        <span>Creative agency of the day</span>
                                    </div>
                                    <span>2021</span>
                                </div>
                                <div className="td-awards-5-list-item flex justify-between">
                                    <div className="flex items-center">
                                        <span className="mr-[60px]">9x</span>
                                        <span>Envato agency of the year</span>
                                    </div>
                                    <span>2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Awards;
