"use client"
import { digitalMarketingData } from '@/utils/fakeData/digitalMarketingData';
import React, { useRef, useState } from 'react';

const WhatYouGet = () => {
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <section className="td-service-6-area w-[90%] mx-auto ">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex flex-wrap items-end">

                    <div className="flex flex-col justify-start w-full">
                        <h2 className="w-full md:w-[80%] lg:w-[70%]  !text-[40px] lg:!text-[60px] td-text-invert-orange">
                                Digital Marketing Strategy that delivers
                        </h2>
                        <p className="w-[80%] md:w-[70%] lg:w-[50%] text-base lg:text-lg font-semibold !mb-0">
                                Website SEO Services, Paid Advertising Services, and Social Media Management, aligned.
                            </p>
                        {/* <div className="lg:col-span-8 w-full mb-6 lg:mb-0">
                            <span className="td-section-6-subtitle mb-20 uppercase">What you get</span>
                        </div>
                        <div className="td-service-6-title-text mr-20 lg:col-span-4 w-full">
                            
                        </div> */}
                    </div>
                    {/* <div className="grid grid-cols-1 lg:grid-cols-12 justify-center items-center w-full">
                        <div className="lg:col-span-8 w-full mb-6 lg:mb-0">
                            <span className="td-section-6-subtitle mb-20 uppercase">What you get</span>
                            <h2 className="w-[70%] !text-[40px] lg:!text-[60px] td-text-invert-orange">
                                Digital Marketing Strategy that delivers
                            </h2>
                        </div>
                        <div className="td-service-6-title-text mr-20 lg:col-span-4 w-full">
                            <p className="font-semibold !mb-0">
                                Website SEO Services, Paid Advertising Services, and Social Media Management, aligned.
                            </p>
                        </div>
                    </div> */}


                    <div className="w-full pt-[55px]">
                        {digitalMarketingData.map((service, idx) => (
                            <div id={`service-${service.id}`}
                                key={service.id}
                                className="td-service-6-item border-b border-gray-200 hover:rounded-[10px] hover:bg-primary hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out"
                            >
                                <div className="flex flex-col lg:flex-row flex-wrap items-start">
                                    {/* Left side: ID and Title */}
                                    <div
                                        className="lg:w-5/12 w-full cursor-pointer"
                                        onClick={() => toggleAccordion(service.id)}
                                    >
                                        <div className="mb-[15px] flex items-center justify-between lg:justify-start">
                                            <span className="text-lg font-medium mr-5 md:mr-20 hover:text-white">{service.id}</span>
                                            <h3 className="text-[30px] text-secondary font-bold hover:text-white">{service.title}</h3>

                                            {/* Accordion icon only for visual cue */}
                                            <div className="lg:hidden ml-auto transition-transform duration-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className={`hover:text-white transform transition-transform duration-300 ${openId === service.id ? "rotate-180 text-white" : "rotate-0 text-[#060a2f]"
                                                        }`}
                                                >
                                                    <line x1="5" y1="10" x2="15" y2="10" />
                                                    {openId !== service.id && <line x1="10" y1="5" x2="10" y2="15" />}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side: Description */}
                                    <div className="lg:w-7/12 w-full">
                                        {/* Large screen: always show */}
                                        <div className="hidden lg:block td-service-6-text mb-[15px]">
                                            <ul className="list-disc list-inside">
                                                {service.description.map((item, index) => (
                                                    <li key={index} className="mb-2">
                                                        <strong>{item.title} </strong>
                                                        <span dangerouslySetInnerHTML={{ __html: item.text }} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Small screen: accordion */}
                                        <div
                                            ref={(el) => {
                                                contentRefs.current[idx] = el;
                                            }}
                                            className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
                                            style={{
                                                maxHeight:
                                                    openId === service.id
                                                        ? `${contentRefs.current[idx]?.scrollHeight}px`
                                                        : "0px",
                                            }}
                                        >
                                            <ul
                                                className={`list-disc list-inside mb-4 ${openId === service.id ? "text-white/70" : "text-black"
                                                    }`}
                                            >
                                                {service.description.map((item, index) => (
                                                    <li key={index} className="mb-2">
                                                        <strong>{item.title} </strong>
                                                        <span dangerouslySetInnerHTML={{ __html: item.text }} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;