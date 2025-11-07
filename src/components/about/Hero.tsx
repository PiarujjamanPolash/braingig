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
        <div className="td-about-area pt-[100px] w-[90%] mx-auto pb-[80px] lg:pb-[140px]">
            <AnimateTwoContent 
            thumbRef={thumbRef as React.RefObject<HTMLElement>} 
            contentRef={contentRef as React.RefObject<HTMLElement>} />
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="td-about-main-wrapper pb-10 lg:pb-[90px] flex justify-center">
                            <h2 className="w-[90%] lg:w-[75%] text-[40px] md:text-[60px] lg:text-[80px] text-secondary td-title-anim text-center">
                                Driving <span className="italic">innovation </span> through <span className="italic">strategic consulting </span>
                            </h2>
                        </div>
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
                            className="td-about-main-content lg:ml-[110px] mb-10 lg:mb-0"
                        >
                            <h3 className="text-xl lg:text-[35px] mb-5 lg:mb-5 text-center md:text-start">At <span>BrainGig,</span> we envision a digital landscape where every brand 
                                            thrives with an impactful online presence.</h3>

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
                                            Fueled by our commitment to 
                                            redefine the possibilities of the digital realm, we approach every project with a 
                                            forward-thinking vision. Join us in shaping the future of digital excellence. </p>
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
