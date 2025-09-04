"use client"
import Image from "next/image";

const BranchArea: React.FC = () => {

    return (
        <div className="w-[90%] mx-auto">
            {/* td-contact-branch-area-start */}
            <div className="td-contact-branch-area pb-[80px] lg:pb-[140px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {/* Section Title */}
                        <div className="w-full">
                            <div
                                className="text-center wow fadeInUp"
                                data-wow-delay=".5s"
                                data-wow-duration="1s"
                            >
                                <h2 className="td-section-page-title mb-[40px] md:mb-[105px]">
                                    Our Branch <span>Office</span>
                                </h2>
                            </div>
                        </div>

                        {/* Branch Items */}
                        <div className="w-full">
                            {/* First Branch */}
                            <div
                                className="mb-6 md:mb-13">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <h3 className="td-contact-branch-name mb-[20px]">Bangladesh</h3>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-thumb mb-[20px]">
                                            <Image width={300} height={250}
                                                className="w-full td-rounded-10"
                                                src="/images/offices/thumb.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-lucation ml-[40px] mb-[20px]">
                                            <h5 className="td-contact-branch-lucation-title pb-5">Rajshahi Office</h5>
                                            <a className="lucation mb-[110px] block" href="#">
                                                4th Floor of NRB Bank Building, Station Rd, Rajshahi 6100
                                            </a>
                                            <a className="map" href="https://maps.app.goo.gl/EDwHCwumzbPajhRw6" target="_blank">
                                                Google Maps
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-number ml-[40px] mb-[20px]">
                                            <a className="mb-[30px] block" href="https://wa.me/+8801701064640">
                                                +8801701-064640
                                            </a>
                                            <a className="link block" href="mailto:braingigllc@gmail.com">
                                                braingigllc@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="wow fadeInUp"
                                data-wow-delay=".5s"
                                data-wow-duration="1s">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <h3 className="td-contact-branch-name mb-[20px]">United States of America</h3>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-thumb mb-[20px]">
                                            <Image width={300} height={250}
                                                className="w-full td-rounded-10"
                                                src="/images/offices/thumb.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-lucation ml-[40px] mb-[20px]">
                                            <h5 className="td-contact-branch-lucation-title pb-5">Sheridan Office</h5>
                                            <a className="lucation mb-[110px] block" href="#">
                                                30 N Gould St, Sheridan, WY 82801, USA
                                            </a>
                                            <a className="map" href="#">
                                                Google Maps
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2 lg:w-3/12 px-2">
                                        <div className="td-contact-branch-number ml-[40px] mb-[20px]">
                                            <a className="mb-[30px] block" href="https://wa.me/+8801701064640">
                                                +8801701064640
                                            </a>
                                            <a className="link block" href="mailto:braingigllc@gmail.com">
                                                braingigllc@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* td-contact-branch-area-end */}

        </div>
    );
};

export default BranchArea;
