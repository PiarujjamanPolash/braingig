"use client"

import Image from "next/image";
const ChooseArea: React.FC = () => {

    return (
        <div className="td-chose-area pt-[155px] px-5 md:px-0">
            <div className="container w-[90%] mx-auto">
                <div className="flex flex-wrap">
                    {/* Left text column */}
                    <div className="lg:w-7/12 w-full">
                        <div className="td-chose-6-title-wrap">
                            <h2 className="td-section-6-title mb-[70px] td-text-invert">
                                We are result driven, customer oriented digital media agency with years of combined experience.
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
                        {/* Middle image */}
                        <div className="col-span-7">
                            <div
                                className="td-chose-6-thumb mr-[110px] mb-[30px] wow fadeInLeft"
                                data-wow-delay=".4s"
                                data-wow-duration="1s"
                            >
                                <Image
                                    className=""
                                    src="/images/index-6/choose-area-img.jpg"
                                    alt=""
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>

                        {/* Right side text list */}
                        <div className="col-span-5">
                            <div
                                className="td-chose-3-list-wrap td-chose-6-list-wrap mr-[110px] mb-[30px] wow fadeInRight"
                                data-wow-delay=".4s"
                                data-wow-duration="1s"
                            >
                                <div className="td-chose-3-list mb-[35px]">
                                    <h6 className="mb-[20px]">We drive positive change.</h6>
                                    <p>
                                        We are excited for our work and how it positively impacts
                                        clients. With over of experience
                                        <br /> we have been constantly
                                    </p>
                                </div>

                                <div className="td-chose-3-list mb-[35px]">
                                    <h6 className="mb-20">We are rational together.</h6>
                                    <p>
                                        We are excited for our work and how it positively impacts
                                        clients. With over of experience
                                        <br /> we have been constantly
                                    </p>
                                </div>

                                <div className="td-chose-3-list">
                                    <h6 className="mb-[20px]">Management Expertise</h6>
                                    <p>
                                        We are excited for our work and how it positively impacts
                                        clients. With over of experience
                                        <br /> we have been constantly
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseArea;
