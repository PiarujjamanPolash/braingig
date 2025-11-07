"use client"
import { imagesData, tagsData } from "@/utils/fakeData/digitalMarketingData";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    const doubledTagData = [...tagsData, ...tagsData, ...tagsData];
    const doubledImagesData = [...imagesData, ...imagesData];
    return (
        <section
            className="td-hero-area td-hero-6-spacing include-bg bg-accent"
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
                        <div className="pb-10 lg:pb-[90px]">
                            <h2
                                className="td-hero-6-title text-primary text-center"
                            >
                                Marketing That Moves Markets
                            </h2>
                            <p className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto !text-base md:!text-3xl text-primary text-center mt-5 lg:mt-10">Transforming ideas into campaigns that connect and convert your ideal audience through expert <strong>Digital Marketing Services.</strong></p>
                        </div>

                        {/* Tags */}
                        <div className="border-t border-black/20 pt-6">
                            <Swiper id="marketing-tag-swiper"
                                modules={[Autoplay]}
                                spaceBetween={5}
                                breakpoints={{
                                    0: { slidesPerView: 1.5 },      
                                    480: { slidesPerView: 1.5 },    
                                    768: { slidesPerView: 2 },      
                                    1024: { slidesPerView: 3 },   
                                    1280: { slidesPerView: 4 },     
                                }}
                                loop={true}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed={8000}
                            >
                                {doubledTagData.map((tag) => (
                                    <SwiperSlide key={tag.id}>
                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleScrollToService(tag.id);
                                            }}
                                            className="font-medium text-[20px] px-5 py-2.5 block text-center !text-primary border rounded-lg hover:bg-gray-100 transition"
                                        >
                                            {tag.label}
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>

            {/* Image Marquee */}
            <div
                className=""
                data-wow-delay=".9s"
                data-wow-duration="1s"
            >
                <div className="">
                    <Marquee gradient={false} speed={50}>
                        <div className="flex items-start">
                            {doubledImagesData.map((img, i) => (
                                <div key={i} className="td-hero-6-thumb mx-5">
                                    <Image
                                        src={img}
                                        alt={`Slide ${i + 1}`}
                                        width={304}
                                        height={390}
                                        className="w-[196px] h-[260] object-cover rounded-[10px]"
                                        priority
                                    />
                                </div>
                            ))}
                        </div>
                    </Marquee>

                </div>
            </div>
        </section>
    );
};

export default Hero;
