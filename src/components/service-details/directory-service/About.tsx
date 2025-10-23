"use client"

import { useRef } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/animations/SplitTextAnimation";
import ImageRevealAnimation from "@/components/animations/ImageRevealAnimation";

const About: React.FC = () => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="td-about-area pt-[90px] pb-[95px]">
            <div className="container w-[90%] mx-auto">
                {/* Title Section */}
                <div className="w-full lg:w-[65%]">
                    <div ref={textRef} className="td-about-3-title-wrap mb-28">
                        <h2 className="td-section-3-title text-4xl md:text-5xl font-bold leading-tight">
                            A Team of Innovators Revolutionizing Online <br /> <span> Directory Platforms </span>
                        </h2>
                    </div>
                </div>
                    <SplitTextAnimation textRef={textRef} direction="right" />
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Content */}
                    <div className="lg:col-span-5">
                        <div className="td-about-3-content lg:mr-[110px] mb-[30px]">
                            <p className="para pb-14">
                                We build intelligent directory platforms designed to simplify listings, enhance discoverability, and streamline management—all while driving user engagement and business growth.
                            </p>
                            <h2 className="title relative inline-block mb-0 text-5xl font-bold">
                                50 <span>+</span>
                            </h2>
                            <p className="para">
                                Businesses trust our solutions to launch dynamic, feature-rich listing platforms that deliver measurable results.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col md:flex-row">
                        {/* Middle Image */}
                        <div className="fix">
                            <div ref={imageRef} className="td-about-3-thumb mb-[30px] mr-5">
                                <Image width={420} height={500}
                                    className=""
                                    src="/images/service-details/directory-service/about-thumb.jpg"
                                    alt="about-thumb"
                                />
                            </div>
                            <ImageRevealAnimation imageWrapperRef={imageRef} />
                        </div>
                        {/* Right List */}
                        <div className="">
                            <div className="td-about-3-list lg:ml-[50px] mb-[30px]">
                                <h4 className="title mb-[25px] text-xl font-semibold">Our Core Expertise</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Custom Directory Website Design & Development</li>
                                    <li>Advanced Search, Filters & Smart Categorization</li>
                                    <li>Interactive Maps & Location-Based Listings</li>
                                    <li>Listing Submission, Management & Verification System</li>
                                    <li>Paid, Promoted & Featured Listings</li>
                                    <li>Flexible Subscription & Membership Models</li>
                                    <li>Monetization Features for Revenue Growth</li>
                                    <li>SEO Optimization & Visibility Boost</li>
                                    <li>Dedicated Support, Maintenance & Platform Upgrades</li>
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