"use client"
import React from 'react';
import { FaMedal, FaBolt, FaBalanceScale, FaMobileAlt, FaTools, FaSearch, FaArrowRight } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const features = [
    {
        icon: <FaMedal className="text-4xl text-secondary mb-4" />,
        title: 'Uncompromising Quality',
        desc: 'Professional, custom website development that elevates & reflects your brand.'
    },
    {
        icon: <FaBolt className="text-4xl text-secondary mb-4" />,
        title: 'Lightning-Fast',
        desc: 'Responsive web designs are developed for lightning speed loading & SEO excellence.'
    },
    {
        icon: <FaBalanceScale className="text-4xl text-secondary mb-4" />,
        title: 'Transparent Pricing',
        desc: 'Transparent, straightforward quotes with zero hidden fees.'
    },
    {
        icon: <FaMobileAlt className="text-4xl text-secondary mb-4" />,
        title: 'Mobile-Optimized',
        desc: 'Websites that deliver perfect performance and stunning visuals on every device.'
    },
    {
        icon: <FaTools className="text-4xl text-secondary mb-4" />,
        title: 'Easy to Manage',
        desc: 'User-friendly custom websites built for easy updates and smooth day to day use.'
    },
    {
        icon: <FaSearch className="text-4xl text-secondary mb-4" />,
        title: 'SEO-Friendly',
        desc: 'Developed as an SEO-optimized website  ensuring long-term visibility & traffic growth.'
    }
];

const OurFeatures = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center justify-center">
                    <div className="col-span-5 relative flex flex-col gap-5">

                        <div className="flex flex-col justify-center items-center lg:items-start lg:mb-20">
                            <h2 className="font-medium text-[40px] lg:text-[60px] mb-2 td-text-invert-orange">
                                Our Features
                            </h2>
                            <p className="text-base md:text-lg font-normal lg:font-semibold text-primary w-[90%] lg:w-[80%] text-center lg:text-start">From professional website design to ongoing care, we build SEO-optimized websites that load fast, rank well, and drive results.
                            </p>
                        </div>

                    </div>
                    {/* Right Features (Cards) */}
                    <div className="col-span-7">
                        <div className="block lg:hidden">
                            <Swiper id='features-slider'
                                modules={[Pagination, Autoplay]}
                                autoplay
                                loop
                                pagination={{ clickable: true }}
                                spaceBetween={20}
                                slidesPerView={1.5}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    768: { slidesPerView: 2.5 }
                                }}
                                className='pb-10'
                            >
                                {features.map((feature, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-white border h-full border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                                            <div className="flex flex-col items-center">
                                                {feature.icon}
                                                <h3 className="text-lg font-medium text-primary mb-2 tracking-wide">{feature.title}</h3>
                                                <p className="text-gray-600 text-sm text-primary">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex flex-col items-center">
                                        {feature.icon}
                                        <h3 className="text-lg font-medium text-primary mb-2 tracking-wide">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm text-primary">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;
