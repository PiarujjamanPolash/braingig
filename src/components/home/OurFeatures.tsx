import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMedal, FaBolt, FaBalanceScale, FaMobileAlt, FaTools, FaSearch, FaArrowRight } from 'react-icons/fa';

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
        <section className="mt-15 lg:mt-[120px] container w-[90%] mx-auto">
            {/* <div className="flex flex-col justify-center items-center mb-20">
                <h2 className="font-medium text-[40px] lg:text-[60px] mb-2 td-text-invert-orange">
                    Our Core Features
                </h2>
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center">
                {/* Left Images */}
                <div className="col-span-5 relative flex flex-col gap-4">

                    <div className="flex flex-col lg:mb-20">
                        <h2 className="font-medium text-[40px] lg:text-[60px] mb-2 td-text-invert-orange">
                            Our Features
                        </h2>
                        <p className="text-base md:text-lg font-normal lg:font-semibold text-primary ">From professional website design to ongoing care, we build SEO-optimized websites that load fast, rank well, and drive results.
                        </p>
                        {/* <div className="td-btn-group mt-5 lg:mb-[35px] lg:mt-10">
                            <Link className="td-btn-circle" href="/about" aria-label="About Us">
                                <FaArrowRight aria-hidden="true" />
                            </Link>
                            <Link className="td-btn-2 td-btn-primary" href="/about">
                                ABOUT US
                            </Link>
                            <Link className="td-btn-circle" href="/about" aria-label="About Us">
                                <FaArrowRight aria-hidden="true" />
                            </Link>
                        </div> */}
                    </div>
                    {/* <Image
                        width={500}
                        height={700}
                        src="/images/features/thumb-1.jpg"
                        alt="Feature thumbnail 1"
                        className="rounded-lg shadow-lg h-full"
                    /> */}
                    {/* <Image 
                        width={500} 
                        height={500} 
                        src="/images/features/thumb-2.avif" 
                        alt="Feature thumbnail 2" 
                        className="rounded-lg shadow-lg"
                    /> */}
                </div>
                {/* Right Features (Cards) */}
                <div className="col-span-7">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
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
        </section>
    );
};

export default OurFeatures;
