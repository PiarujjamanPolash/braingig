"use client"

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Images = [
    "/images/service-details/digital-marketing-service/on-page-seo.jpg",
    "/images/service-details/digital-marketing-service/slider-2.webp",
    "/images/service-details/digital-marketing-service/slider-3.jpg",
    "/images/service-details/digital-marketing-service/slider-4.jpg",
    "/images/service-details/digital-marketing-service/slider-5.jpg",
    "/images/service-details/digital-marketing-service/slider-6.jpg",
    "/images/service-details/digital-marketing-service/slider-7.jpg",
    "/images/service-details/digital-marketing-service/slider-8.jpg",
    "/images/service-details/digital-marketing-service/slider-9.jpg",
];
const tags = [
    { id: "service-1", label: "(SEO)" },
    { id: "service-2", label: "(Authority)" },
    { id: "service-4", label: "(Creatives)" },
    { id: "service-5", label: "(Content Funnel)" },
];

const handleScrollToService = (id: string) => {
    const services = document.querySelectorAll(".td-service-6-item")
    services.forEach(service => {
        service.classList.remove("highlight-service");
    });
    const section = document.getElementById(id);
    if (section) {
        const headerOffset = 120;
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });

        // highlight animation
        section.classList.add("highlight-service");
    }

    window.history.pushState(null, "", `#${id}`);
};


const Hero: React.FC = () => {

    return (
        <div
            className="td-hero-area td-hero-6-spacing include-bg bg-[url('/images/service-details/digital-marketing-service/hero-bg.jpg')]"
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
                        <div className="pb-[90px]">
                            <h2
                                className="td-hero-6-title text-center"
                            >
                                Marketing That Moves Markets
                            </h2>
                            <p className="w-[70%] mx-auto !text-3xl text-white text-center mt-10">Transforming ideas into campaigns that connect and convert your ideal audience through expert <strong>Digital Marketing Services.</strong></p>
                        </div>

                        {/* Tags */}
                        <div>
                            <div className="border-t border-white/10 pt-6">
                                {/* Show in md+ device */}
                                <ul className="hidden md:flex flex-wrap justify-around pt-6">
                                    {tags.map((tag) => (
                                        <li key={tag.id}>
                                            <Link
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleScrollToService(tag.id);
                                                }}
                                                className="font-medium text-[20px] !text-white inline-block px-5 py-2.5"
                                            >
                                                {tag.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* Only show in small device */}
                                <div className="block md:hidden pt-6">
                                    <Marquee gradient={false} speed={40}>
                                        <ul className="flex gap-6">
                                            {tags.map((tag) => (
                                                <li key={tag.id}>
                                                    <Link
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleScrollToService(tag.id);
                                                        }}
                                                        className="font-medium text-[20px] !text-white inline-block px-5 py-2.5"
                                                    >
                                                        {tag.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Marquee */}
            <div
                className="container-fluid container-1680 wow fadeInUp"
                data-wow-delay=".9s"
                data-wow-duration="1s"
            >
                <div className="">
                    <Marquee gradient={false} speed={50}>
                        <div className="flex items-start">
                            {Images.map((img, i) => (
                                <div key={i} className="td-hero-6-thumb mx-5">
                                    <Image
                                        src={img}
                                        alt={`Slide ${i + 1}`}
                                        width={304}
                                        height={390}
                                        className="w-[196px] h-[260] object-cover rounded-[10px]"
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
