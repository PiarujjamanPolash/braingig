"use client"

import { useRef } from "react";
import SplitTextAnimation from "@/components/animations/index-3/SplitTextAnimation";
import ImageRevealAnimation from "@/components/animations/index-3/ImageRevealAnimation";
import Image from "next/image";

const About: React.FC = () => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);


    return (
        <div className="td-about-area pt-[90px] pb-[95px]">
            <div className="container w-[90%] mx-auto">
                {/* Title Section */}
                <div className="w-full">
                    <div ref={textRef} className="td-about-3-title-wrap mb-28">
                        <h2 className="td-section-3-title text-4xl md:text-5xl font-bold leading-tight">
                            A team of innovators shaping <br />
                            the future of<span>online directories</span>
                        </h2>
                    </div>
                </div>
                    <SplitTextAnimation textRef={textRef} direction="right" />
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Content */}
                    <div className="lg:col-span-5">
                        <div className="td-about-3-content lg:mr-[110px] mb-[30px]">
                            <p className="para pb-14">
                                We build directory platforms that help people find, list, and grow — all in one seamless experience.
                            </p>
                            <h2 className="title relative inline-block mb-0 text-5xl font-bold">
                                50 <span>k+</span>
                            </h2>
                            <p className="para">
                                We’ve helped thousands of entrepreneurs launch successful listing platforms across multiple industries.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col md:flex-row">
                        {/* Middle Image */}
                        <div className="fix">
                            <div ref={imageRef} className="td-about-3-thumb mb-[30px] mr-5">
                                <Image width={420} height={500}
                                    className="w-full"
                                    src="/images/index-3/about.jpg"
                                    alt=""
                                />
                            </div>
                            <ImageRevealAnimation imageWrapperRef={imageRef} />
                        </div>
                        {/* Right List */}
                        <div className="">
                            <div className="td-about-3-list lg:ml-[50px] mb-[30px]">
                                <h4 className="title mb-[25px] text-xl font-semibold">Our Core Expertise</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Custom Directory Website Development</li>
                                    <li>Advanced Search & Filter Integration</li>
                                    <li>Map & Location-Based Listings</li>
                                    <li>Listing Submission & Management System</li>
                                    <li>SEO Optimization & Monetization Setup</li>
                                    <li>Ongoing Maintenance & Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
