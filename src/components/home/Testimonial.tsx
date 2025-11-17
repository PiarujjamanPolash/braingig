"use client"
import Image from "next/image";
import { Autoplay, Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsData } from "@/utils/fakeData/testimonialsData";
import Brands from "@/components/shared/Brands";
import ScrollRevealLeft from "@/components/animations/ScrollRevealLeft";

const Testimonial: React.FC = () => {
    return (
        <div className="td-testimonial-area bg-light lg:py-[80px] py-[60px]">
            <div className="container">
                <div className="flex flex-wrap">
                    {/* Left Section */}
                    {/* <div className="hidden md:block w-full md:w-4/12 lg:w-3/12">
                        <ScrollRevealLeft>
                            <div
                                className="td-testimonial-left text-primary mb-10 scroll-reveal-left"
                            >
                                <span className="td-section-subtitle text-primary mb-[185px] inline-block">
                                    CLIENTS FEEDBACK
                                </span>
                                <Image width={177} height={60} className="mb-5" src={"/images/testimonials/user.webp"} alt="user Image" />
                                <p className="text-primary">
                                    Top companies trust us
                                    <br /> with their websites
                                </p>
                            </div>
                        </ScrollRevealLeft>
                    </div> */}

                    {/* Right Section */}
                    <div className="w-full">
                        <div
                            className="td-testimonial-content mb-0 lg:ml-20"
                        >
                            <div className="flex flex-col justify-center items-center mb-20">
                                <h2 className="font-medium text-[40px] lg:text-[60px] text-center mb-2 td-text-invert-orange">
                                    What Our Clients Say About Us
                                </h2>
                                <p className="text-base md:text-lg font-normal lg:font-semibold w-[90%] md:w-[80%] lg:w-[50%] text-primary text-center">Hear from visionary clients who chose Brain Gig as their go-to digital agency for design and development agency partners, see the real results and  growth.
                                </p>
                            </div>

                            <div className="w-full">
                                <div className="td-testimonial-slide-content mb-6 lg:mb-10">
                                    <Swiper id="home-testimonial"
                                        modules={[Navigation, Virtual, Autoplay]}
                                        autoplay
                                        slidesPerView={2}
                                        breakpoints={{
                                            640: { 
                                                slidesPerView: 2,
                                            },
                                            0: { 
                                                slidesPerView: 1,
                                            },
                                        }}
                                        loop
                                        spaceBetween={50}
                                        navigation={{
                                            prevEl: ".td-testimonial-prev",
                                            nextEl: ".td-testimonial-next",
                                        }}
                                        className="td-testimonial-slider lg:mb-[28px]"
                                    >
                                        {testimonialsData.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="flex flex-col lg:flex-row gap-10 h-full">
                                                    <div className="lg:w-12/12 flex flex-col justify-between  h-full">
                                                        <div className="td-testimonial-slide-content flex flex-col justify-between text-primary  h-full">
                                                            <p className="text-lg mb-7 lg:mb-15">{item.review}</p>
                                                            <div className="flex items-center justify-start gap-3">
                                                                <Image width={70} height={70} src={item.img} className="rounded-full" alt="author" />
                                                                <div className="flex flex-col justify-center items-start gap-1">
                                                                    <h4 className="font-medium text-[24px]">{item.name}</h4>
                                                                    <span className="font-normal text-[18px]">{item.position}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    {/* Navigation */}
                                    <div className="td-testimonial-navigation mt-4 mb-7">
                                        <span className="td-testimonial-prev inline-block cursor-pointer">
                                            <svg
                                                width="31"
                                                height="24"
                                                viewBox="0 0 31 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M30.8699 12.2679L0.014612 12.4214"
                                                    stroke="#11224E"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M11.5445 0C11.5445 6.63283 6.38111 12 2.56383e-05 12"
                                                    stroke="#11224E"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M4.08971e-05 12C6.38112 12 11.5446 17.3671 11.5446 24"
                                                    stroke="#11224E"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                />
                                            </svg>
                                        </span>

                                        <span className="td-testimonial-next ml-4 inline-block cursor-pointer">
                                            <svg
                                                width="31"
                                                height="24"
                                                viewBox="0 0 31 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M-0.000234102 12.2679L30.855 12.4214"
                                                    stroke="#11224E"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M19.3251 0C19.3251 6.63283 24.4886 12 30.8696 12"
                                                    stroke="#11224E"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M30.8696 12C24.4885 12 19.3251 17.3671 19.3251 24"
                                                    stroke="#11224E"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Brands customClass="p-0" />
                </div>
            </div>
        </div>

    );
};

export default Testimonial;
