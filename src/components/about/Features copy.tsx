"use client"
import { featuresData } from "@/utils/fakeData/featuresData";
import Image from "next/image";
import shape from "../../../public/images/about/about-page-shape.webp"
const Features: React.FC = () => {

    return (
        <div className="td-about-main-feature-area w-[90%] mx-auto py-15 lg:py-20">
            <div className="container mx-auto">
                <div className="w-full xl:w-12/12 px-4">
                    <div className="td-about-main-feature-wrap">
                        <h2 className="w-full md:w-[80%] lg:[60%] text-[60px] pb-3 td-text-invert-orange">Brain Gig LLC is driven by a passion for digital innovation.

                        </h2>
                        <p className="w-full md:w-[70%] lg:w-[60%] text-base lg:text-lg font-medium mb-[70px]">
                            Established with a vision to redefine online experiences,
                            we merge creativity with cutting-edge technology to create dynamic digital solutions. Driven by a commitment to excellence,
                            our mission is to exceed expectations, ensuring every digital solution we deliver is transformative.
                        </p>

                        <div className="flex flex-wrap -mx-4">
                            <div className="hidden md:block lg:w-5/12 px-4">
                                <div className="td-about-main-feature-shape text-center ml-[70px] mb-[40px]">
                                    <Image width={82} height={87} src={shape} alt="shape" />
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
    );
};

export default Features;
