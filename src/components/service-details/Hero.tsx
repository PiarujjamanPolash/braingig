"use client";

import { Services } from "@/utils/fakeData/servicesData";
import Image from "next/image";
import AnimateFadeInLeft from "../animations/AnimateFadeInLeft";
import thumb1 from "../../../public/images/service-details/thumb-1.webp"
import thumb2 from "../../../public/images/service-details/thumb-2.webp"
type HeroProps = {
    service: Services;
};
const Hero: React.FC<HeroProps> = ({ service }) => {

    return (
        <div className="w-[90%] mx-auto pt-[150px] lg:pt-[170px]">
            <div className="td-service-area pb-11">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="td-breadcrumb-wrap">
                                <AnimateFadeInLeft>
                                    <h2 className="text-[40px] lg:text-[80px] font-medium text-secondary mb-9">
                                        {service.title} <span>{service.highlight}</span>
                                    </h2>
                                </AnimateFadeInLeft>
                                <div className="td-service-hero-thumb-2 fix td-rounded-10 pt-10 lg:pt-15 mb-7.5">
                                    <Image width={563} height={690} priority data-speed=".9" className="td-rounded-10 object-cover" src={thumb2} alt="thumb 2" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="td-service-hero-wrap">
                                <div className="td-service-hero-content ml-[80px]">
                                    <p className="text-base lg:text-lg font-semibold mb-10">
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
                                <div className="td-service-hero-thumb fix td-rounded-10 pt-[120px]">
                                    <Image width={645} height={430} priority data-speed=".9" className="td-rounded-10" src={thumb1} alt="thumb 1" />
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
