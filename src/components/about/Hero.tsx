"use client"
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AnimateTwoContent from "@/components/animations/AnimateTwoContent";
import Link from "next/link";
const Hero: React.FC = () => {
    const thumbRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="td-about-area pt-[100px] lg:pt-[130px] w-[90%] mx-auto">
            <AnimateTwoContent
                thumbRef={thumbRef as React.RefObject<HTMLElement>}
                contentRef={contentRef as React.RefObject<HTMLElement>} />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    <div className="w-full px-4 md:px-0 lg:row-start-auto lg:col-start-1">
                        <div ref={thumbRef}
                            className="td-about-main-thumb mb-10 lg:mb-0 fix td-rounded-10"
                        >
                            <Image
                                data-speed=".9"
                                width={532}
                                height={519}
                                priority
                                className="td-rounded-10"
                                src={"/images/about/hero-thumb.webp"}
                                alt="thumb"
                            />
                        </div>
                    </div>

                    <div className="w-full px-4 row-start-1 lg:col-start-2">
                        <div ref={contentRef}
                            className="td-about-main-content"
                        >
                            <h2 className="font-medium text-[40px] lg:text-[60px] text-secondary text-center md:text-start">
                                About brain gig
                            </h2>
                            <p className="text-lg lg:text-2xl font-medium md:mb-5 text-center md:text-start">Trusted Creators of Exceptional Digital Experiences</p>
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="w-full md:w-5/12 px-4">
                                    <div className="td-about-main-bigtext text-center md:text-start">
                                        <h2 className="m-0! p-0! leading-none lg:leading-normal">5</h2>
                                        <span>Years of experience</span>
                                    </div>
                                </div>

                                <div className="w-full md:w-12/12 px-4">
                                    <div className="td-about-main-text mt-3 lg:mt-7 text-center md:text-start">
                                        <p className="text-[15px] lg:text-lg mb-3 lg:mb-7">
                                            From strategic <strong>business website development </strong> to innovative <strong>digital marketing services</strong>, we combine creativity and expertise to boost brands and drive growth.
                                        </p>
                                        {/* <p className="text-[15px] lg:text-lg mb-7">
                                            Fueled by our commitment to 
                                            redefine the possibilities of the digital realm, we approach every project with a 
                                            forward-thinking vision. Join us in shaping the future of digital excellence. </p> */}
                                        <div className="td-btn-group !w-full flex justify-center md:justify-start">
                                            <Link className="td-btn-circle" href="/contact">
                                                <FaArrowRight />
                                            </Link>
                                            <Link className="td-btn-2 td-btn-primary" href="/contact">EXPLORE MORE</Link>
                                            <Link className="td-btn-circle" href="">
                                                <FaArrowRight />
                                            </Link>
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

export default Hero;
