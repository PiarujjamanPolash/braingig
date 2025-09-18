"use client";

import { servicesData } from "@/utils/fakeData/servicesData";
import Link from "next/link";
import React from "react";

const Services: React.FC = () => {
    return (
        <div className="td-service-6-area w-[90%] mx-auto mb-[120px]">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex flex-wrap items-end">
                    
                    <div className="flex flex-wrap lg:flex-nowrap w-full">
                        <div className="td-service-6-title-wrap lg:w-8/12 w-full mb-6 lg:mb-0">
                            <span className="td-section-6-subtitle mb-20 d-inline-block">OUR CORE SERVICES</span>
                            <h2 className="td-section-6-bigtitle td-text-opacity">
                                EXPLORE
                                <br /> OUR SERVICES
                            </h2>
                        </div>
                        <div className="td-service-6-title-text mr-20 lg:w-4/12 w-full">
                            <p className="td-section-6-text">
                                Get expert solutions for every business establishment and growth
                            </p>
                            <p className="td-section-6-text">
                                Our mission is to revolutionize creative work for companies with
                                style and substance. Quality and Effort intersect in a meaningful way.
                            </p>
                        </div>
                    </div>

                    
                    <div className="w-full pt-[55px]">
                        {servicesData.map((service) => (
                            <div key={service.id} className="td-service-6-item">
                                <div className="flex flex-col lg:flex-row flex-wrap items-center">
                                    
                                    <div className="lg:w-5/12 w-full">
                                        <div className="td-service-6-item-title mb-[15px] flex items-center">
                                            <span className="mr-5 md:mr-20">{service.id}</span>
                                            <h3>
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="lg:w-5/12 w-full">
                                        <div className="td-service-6-text mb-[15px]">
                                            <p>{service.description}</p>
                                        </div>
                                    </div>

                                    <div className="lg:w-2/12 w-full">
                                        <div className="td-service-6-btn flex justify-start lg:justify-center items-center mb-0 md:mb-[15px]">
                                            <Link href={service.path} className="flex items-center justify-center" aria-label={service.title}>
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M1 13L13 1"
                                                        stroke="#063231"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M1 1H13V13"
                                                        stroke="#063231"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
