"use client";
import Image from "next/image";
import Link from "next/link";
import bdOfficeImg from "../../../public/images/offices/bd.webp"
import USAOfficeImg from "../../../public/images/offices/usa.webp"
const BranchArea: React.FC = () => {
    return (
        <div className="w-[90%] mx-auto">
            <div className="td-contact-branch-area pb-15 lg:pb-20">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center">
                            <h2 className="text-[40px] lg:text-[60px] td-text-invert-orange mb-8 md:mb-12">
                                Our Branch <span>Office</span>
                            </h2>
                        {/* Branch Items */}
                        <div className="w-full">
                            <div
                                className="td-contact-branch-border">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <h3 className="td-contact-branch-name mb-[20px]">Bangladesh</h3>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-thumb mb-[20px]">
                                            <Image width={300} height={250}
                                                className="w-full td-rounded-10"
                                                src={bdOfficeImg}
                                                alt="BD Office"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-lucation ml-[40px] mb-[20px]">
                                            <h5 className="td-contact-branch-lucation-title pb-5">Rajshahi Office</h5>
                                            <Link className="lucation mb-[110px] block" href="#">
                                                166(4th floor), Alokar Mor, Rajshahi 6100, Station Rd, Rajshahi 6100
                                            </Link>
                                            <Link className="map" href="https://maps.app.goo.gl/EDwHCwumzbPajhRw6" target="_blank">
                                                Google Maps
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-number ml-[40px] mb-[20px]">
                                            <Link className="mb-[30px] block" href="https://wa.me/+8801701064640">
                                                +8801701-064640
                                            </Link>
                                            <Link className="link block" href="mailto:braingigllc@gmail.com">
                                                braingigllc@gmail.com
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <h3 className="td-contact-branch-name mb-[20px]">United States of America</h3>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-thumb mb-[20px]">
                                            <Image width={300} height={250}
                                                className="w-full td-rounded-10"
                                                src={USAOfficeImg}
                                                alt="USA Office"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-lucation ml-[40px] mb-[20px]">
                                            <h5 className="td-contact-branch-lucation-title pb-5">Sheridan Office</h5>
                                            <Link className="lucation mb-[110px] block" href="#">
                                                30 N Gould St, Sheridan, WY 82801, USA
                                            </Link>
                                            <Link className="map" href="https://maps.app.goo.gl/gFB3aWJ9RURN3zyH9">
                                                Google Maps
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-number ml-[40px] mb-[20px]">
                                            <Link className="mb-[30px] block" href="https://wa.me/+8801701064640">
                                                +8801701064640
                                            </Link>
                                            <Link className="link block" href="mailto:braingigllc@gmail.com">
                                                braingigllc@gmail.com
                                            </Link>
                                        </div>
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

export default BranchArea;
