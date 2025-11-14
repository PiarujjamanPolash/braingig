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
        <div className="td-about-area pt-[130px] w-[90%] mx-auto">
            <AnimateTwoContent
                thumbRef={thumbRef as React.RefObject<HTMLElement>}
                contentRef={contentRef as React.RefObject<HTMLElement>} />
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        {/* <div className="td-about-main-wrapper pb-10 lg:pb-18 flex justify-center">
                            <h2 className="w-[90%] lg:w-[80%] xl:w-full text-[40px] md:text-[60px] lg:text-[80px] text-secondary td-title-anim text-center">
                                About Brain Gig
                            </h2>
                        </div> */}
                    </div>

                    <div className="w-full lg:w-5/12 px-4">
                        <div ref={thumbRef}
                            className="td-about-main-thumb mb-10 lg:mb-0 fix td-rounded-10"
                        >
                            <Image
                                data-speed=".9"
                                width={532}
                                height={519}
                                priority
                                className="w-full td-rounded-10"
                                src={"/images/about/hero-thumb.webp"}
                                alt="thumb"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 px-4">
                        <div ref={contentRef}
                            className="td-about-main-content lg:ml-15"
                        >
                            <h2 className="font-medium text-[40px] lg:text-[60px] text-secondary">
                                About brain gig
                            </h2>
                            <p className="text-lg lg:text-2xl font-medium md:mb-5 text-center md:text-start">Trusted Creators of Exceptional Digital Experiences</p>
                            {/* <h3 className="text-xl lg:text-[35px] md:mb-5 text-center md:text-start">At <span>BrainGig,</span> we envision a digital landscape where every brand thrives with an impactful online presence.</h3> */}
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="w-full md:w-5/12 px-4">
                                    <div className="td-about-main-bigtext text-center md:text-start">
                                        <h2>5</h2>
                                        <span>Years of experience</span>
                                    </div>
                                </div>

                                <div className="w-full md:w-12/12 px-4">
                                    <div className="td-about-main-text mt-7 text-center md:text-start">
                                        <p className="text-[15px] lg:text-lg mb-7">
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
