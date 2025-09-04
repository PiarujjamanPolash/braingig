"use client"
import { featuresData } from "@/utils/fakeData/featuresData";
import Image from "next/image";

const Features: React.FC = () => {

    return (
        <div className="td-about-main-feature-area w-[90%] mx-auto py-[80px] lg:pt-[150px] lg:pb-[165px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full xl:w-12/12 px-4">
                        <div className="td-about-main-feature-wrap">
                            <h2 className="td-section-page-title text-center pb-10 td-text-invert">Brain Gig LLC is driven by a passion for digital innovation.

                            </h2>
                            <p className="td-about-main-feature mb-[70px] td-text-invert">
                                Established with a vision to redefine online experiences, 
                                we merge creativity with cutting-edge technology to create dynamic digital solutions. Driven by a commitment to excellence, 
                                our mission is to exceed expectations, ensuring every digital solution we deliver is transformative.
                            </p>

                            <div className="flex flex-wrap -mx-4">
                                <div className="hidden md:block lg:w-5/12 px-4">
                                    <div className="td-about-main-feature-shape text-center ml-[70px] mb-[40px]">
                                        <Image width={82} height={87} src="/images/about/about_page_shape.png" alt="" />
                                    </div>
                                </div>

                                <div className="w-full lg:w-7/12 px-4">
                                    <div className="td-about-main-feature-list">
                                        <ul>
                                            {featuresData.map((feature) => (
                                                <li key={feature.id} className="flex items-center mb-2">
                                                    <i className={`${feature.icon} mr-2 text-primary`}></i>
                                                    {feature.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
