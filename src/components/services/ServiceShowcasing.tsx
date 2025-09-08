"use client"

import { servicesData } from "@/utils/fakeData/servicesData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServiceShowcasing: React.FC = () => {
    return (
        <div className="">
            <div className="td-service-pin-item td-service-pin-items overflow-hidden">
                <div className="container-fluid p-0">
                    {servicesData.map((service) => (
                        <div key={service.id} className="black-bg td-service-pin-item-panel">
                            <div className="flex flex-wrap items-center">
                                {/* Left Image */}
                                <div className="w-full lg:w-6/12 h-full">
                                    <div className="td-service-pin-thumb h-full">
                                        <img
                                            className="w-full h-full"
                                            src={service.img || "/images/default.jpg"} // fallback if no img
                                            alt={service.title}
                                        />
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="w-full lg:w-6/12">
                                    <div className="td-service-pin-content-inner pt-10 pb-10 lg:pt-[40px] lg:pb-[40px] pl-10 lg:mx-[100px]">
                                        <div className="td-service-pin-subtitle mb-[15px] flex items-center gap-2">
                                            <span className="number">
                                                {String(service.id).padStart(2, "0")}
                                            </span>
                                            <span>{service.title}</span>
                                        </div>

                                        <h2 className="td-service-pin-title mb-[30px]">
                                            {service.title}{" "}
                                            {service.highlight && (
                                                <span className="ml-1">{service.highlight}</span>
                                            )}
                                        </h2>

                                        <div className="td-service-pin-content lg:ml-[50px]">
                                            <p className="mb-[40px]">{service.description}</p>

                                            {/* Features List */}
                                            {service.features && (
                                                <ul>
                                                    {service.features.map((feature, i) => (
                                                        <li key={i}>{feature}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Buttons */}
                                            <div className="td-btn-group td-btn-group-border pt-[50px]">
                                                <Link className="td-btn-circle" href={service.path}>
                                                    <FaArrowRight />

                                                </Link>
                                                <Link className="td-btn-2 td-btn-primary" href={service.path}>
                                                    VIEW DETAILS
                                                </Link>
                                                <Link className="td-btn-circle" href={service.path}>
                                                    <FaArrowRight />

                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ServiceShowcasing
    ;
