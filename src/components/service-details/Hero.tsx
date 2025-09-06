"use client"

import { Services } from "@/utils/fakeData/servicesData";
import Image from "next/image";
type HeroProps = {
    service: Services;
};
const Hero: React.FC<HeroProps> = ({ service }) => {

    return (
        <div className="w-[90%] mx-auto pt-[150px] lg:pt-[215px]">
            <div className="td-service-area pb-11">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="td-breadcrumb-wrap">
                                <h2 className="td-section-page-title mb-9 fade-in-left">
                                    {service.title} <span>{service.highlight}</span>
                                </h2>
                                <div className="td-service-hero-thumb-2 fix td-rounded-10 pt-[60px] lg:pt-[105px] mb-7.5">
                                    <Image width={563} height={690} data-speed=".9" className="td-rounded-10 object-cover" src="/images/service-details/thumb-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="td-service-hero-wrap">
                                <div className="td-service-hero-content ml-[110px]">
                                    <p className="mb-10">
                                        {service.description}
                                    </p>
                                    <div className="td-service-hero-border mb-15"></div>
                                    <div className="td-about-main-feature-list">
                                        <ul>
                                            {service.features?.map((feature, id) => (
                                                <li key={id}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="td-service-hero-thumb fix td-rounded-10 pt-[200px]">
                                    <Image width={645} height={430} data-speed=".9" className="td-rounded-10" src="/images/service-details/thumb-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
