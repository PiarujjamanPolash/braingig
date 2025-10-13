"use client"

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const slides = [
    "/images/index-6/hero-slider-1.jpg",
    "/images/index-6/hero-slider-2.jpg",
    "/images/index-6/hero-slider-2.jpg",
    "/images/index-6/hero-slider-2.jpg",
    "/images/index-6/hero-slider-2.jpg",
    "/images/index-6/hero-slider-2.jpg",
    "/images/index-6/hero-slider-2.jpg",
    "/images/index-6/hero-slider-2.jpg",
    "/images/index-6/hero-slider-2.jpg",
];
const Hero: React.FC = () => {

    return (
        <div
            className="td-hero-area td-hero-6-spacing include-bg bg-[url('/images/index-6/hero-bg.jpg')]"
        >
            <div className="container w-[90%] mx-auto">
                <div className="td-hero-6-top pb-[45px] relative z-[1]">
                    {/* Hero Animated Lines */}
                    <div className="td-hero-6-line">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Title Section */}
                    <div className="w-full mx-auto">
                        <div className="">
                            <div className="td-hero-6-title-wrap pb-[90px]">
                                <h2
                                    className="td-hero-6-title wow fadeInUp"
                                    data-wow-delay=".5s"
                                    data-wow-duration="1s"
                                >
                                    <span>
                                        DIGITAL
                                        <video
                                            loop
                                            muted
                                            autoPlay
                                            playsInline
                                            className="inline-block"
                                        >
                                            <source
                                                src="https://themedox.com/videos/parody-video.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </span>
                                    <br />
                                    <span className="ml-[30px] inline-block">
                                        <Image
                                            className="hidden lg:inline-block"
                                            src="/images/index-6/hero-shape.png"
                                            alt="Shape"
                                            width={100}
                                            height={50}
                                        />
                                        MARKETING
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Tags */}
                        <div
                            className="wow fadeInUp"
                            data-wow-delay=".7s"
                            data-wow-duration="1s"
                        >
                            <div className="td-hero-6-tag">
                                <ul>
                                    <li>
                                        <Link href="#">(Ui/Ux Design)</Link>
                                    </li>
                                    <li>
                                        <Link href="#">(Branding)</Link>
                                    </li>
                                    <li>
                                        <Link href="#">(Visual Design)</Link>
                                    </li>
                                    <li>
                                        <Link href="#">(Development)</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Swiper Slider */}
            <div
                className="container-fluid container-1680 wow fadeInUp"
                data-wow-delay=".9s"
                data-wow-duration="1s"
            >
                <div className="">
                    <Marquee gradient={false} speed={50}>
                        <div className="flex items-start">
                            {slides.map((src, i) => (
                                <div key={i} className="td-hero-6-thumb mx-5">
                                    <Image
                                        src={src}
                                        alt={`Slide ${i + 1}`}
                                        width={304}
                                        height={390}
                                        className="w-full h-auto rounded-[10px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </Marquee>

                </div>
            </div>
        </div>
    );
};

export default Hero;
