"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialsData } from "@/utils/fakeData/testimonialsData";
import Brands from "@/components/shared/Brands";

const Testimonials: React.FC = () => {
    return (
        <section className="td-testimonial-3-area td-testimonial-3-spacing fix bg-primary pt-[60px] lg:pt-[100px] px-5 lg:px-0 relative">
            {/* Big background text */}
            <h3 className="td-testimonial-3-bigtext hidden md:block">BRAINGIG</h3>

            <div className="">
                <div className="container w-[90%] lg:ml-auto xl:mx-auto flex flex-col md:flex-row gap-4">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/3">
                        <div className="td-testimonial-3-title-wrap mb-[70px]">
                            <span className="td-section-3-subtitle inline-block mb-[15px]">
                                Loved by Entrepreneurs Everywhere
                            </span>
                            <h2 className="td-section-3-title !text-white mb-[40px]">
                                Stories of <span>Growth and Success</span>
                            </h2>

                            {/* Navigation */}
                            <div className="td-testimonial-3-navigation flex gap-4">
                                <span className="td-testimonial-prev cursor-pointer flex justify-center items-center">
                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2473 7.49976H1.25866" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M7.94873 0C7.94873 4.14553 4.39363 7.5 0.000152359 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M0.000152359 7.49976C4.39363 7.49976 7.94873 10.8542 7.94873 14.9998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                    </svg>
                                </span>
                                <span className="td-testimonial-next cursor-pointer flex justify-center items-center">
                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.752686 7.49976H17.7413" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M11.0513 0C11.0513 4.14553 14.6064 7.5 18.9998 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M18.9998 7.49976C14.6064 7.49976 11.0513 10.8542 11.0513 14.9998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-2/3">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            autoplay
                            loop
                            navigation={{
                                nextEl: ".td-testimonial-next",
                                prevEl: ".td-testimonial-prev",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 1.5 },
                                1024: { slidesPerView: 2.5 },
                                1280: { slidesPerView: 3 },
                            }}
                            spaceBetween={30}
                            className="swiper-container td-testimonial-3-slider"
                        >
                            {testimonialsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="td-testimonial-3-wrap flex flex-col h-auto min-h-[300px]">
                                        <span className="mb-[15px] inline-block">{item.name}</span>
                                        <p className="mb-[30px] flex-1">{item.review}</p>
                                        <span className="td-border mb-[30px]"></span>
                                        {/* <Image
                                            className="td-rounded"
                                            src={item.avatar}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                        /> */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="bg-light w-[80%] mx-auto rounded-md container mx-auto">
                <Brands customClass="p-0" />
            </div>

        </section>
    );
};

export default Testimonials;