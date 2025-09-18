"use client"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsData } from "@/utils/fakeData/testimonialsData";
import Brands from "../shared/Brands";
import ScrollRevealLeft from "../animations/ScrollRevealLeft";
import Image from "next/image";
import userImage from "../../../public/images/testimonials/user.png"
const Testimonial: React.FC = () => {

    return (
        <div className="td-testimonial-area grey-bg-2 lg:pt-[155px] py-[80px] lg:pb-[120px]">
            <div className="container w-[90%] mx-auto">
                <div className="flex flex-wrap">
                    {/* Left Section */}
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <ScrollRevealLeft>
                            <div
                            className="td-testimonial-left mb-10 scroll-reveal-left"
                        >
                            <span className="td-section-subtitle mb-[185px] inline-block">
                                CLIENTS FEEDBACK
                            </span>
                            <Image width={177} height={60} className="mb-5" src={userImage} alt="user Image" />
                            <p>
                                Top companies trust us 
                                <br /> with their websites
                            </p>
                        </div>
                        </ScrollRevealLeft>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-8/12 lg:w-9/12">
                        <div
                            className="td-testimonial-content mb-0 lg:ml-20"
                        >
                            <h2 className="td-testimonial-title mb-[16px] td-text-invert">
                                What Our Clients
                                <br /> <span>Say About Us</span>
                            </h2>
                            <div className="w-full">
                                <div className="td-testimonial-slide-content lg:ml-6 mb-10">
                                    <Swiper
                                        modules={[Navigation]}
                                        navigation={{
                                            prevEl: ".td-testimonial-prev",
                                            nextEl: ".td-testimonial-next",
                                        }}
                                        className="td-testimonial-slider lg:mb-[28px]"
                                    >
                                        {testimonialsData.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="flex flex-col lg:flex-row gap-10">
                                                    <div className="lg:w-12/12 flex flex-col justify-between">
                                                        <div className="td-testimonial-slide-content">
                                                            <p className="mb-15">{item.review}</p>
                                                            <h4 className="mb-3 mt-5">{item.name}</h4>
                                                            <span>{item.position}</span>
                                                        </div>
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
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M11.5445 0C11.5445 6.63283 6.38111 12 2.56383e-05 12"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M4.08971e-05 12C6.38112 12 11.5446 17.3671 11.5446 24"
                                                                        stroke="currentColor"
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
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M19.3251 0C19.3251 6.63283 24.4886 12 30.8696 12"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                    <path
                                                                        d="M30.8696 12C24.4885 12 19.3251 17.3671 19.3251 24"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit="10"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
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
