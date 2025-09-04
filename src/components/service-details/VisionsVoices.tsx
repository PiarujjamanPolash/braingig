"use client"

import Image from "next/image";

const VisionsVoices: React.FC = () => {

    return (
        <div className="w-[90%] mx-auto">
            {/* td-service-replace-area-start */}
            <div className="td-service-replace-area pt-[120px] pb-[130px]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        {/* Left Content */}
                        <div className="col-span-12 lg:col-span-10">
                            <div className="td-service-main-content mb-[85px]">
                                <h2 className="td-text-invert">
                                    We replace unreliable wirefreme and expensive agencies
                                    for one of the best organized layer.
                                </h2>
                            </div>
                        </div>

                        {/* Shape */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="td-service-replace-shape pt-[100px] pb-[30px]">
                                <Image width={174} height={106} src="/images/visions-voices/shape.png" alt="" />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-span-12 lg:col-span-8">
                            <div className="td-service-replace-content">
                                <div className="td-service-replace-thumb mb-[50px]">
                                    <img
                                        className="td-rounded-10 w-full h-[400px] lg:h-[700px]"
                                        src="/images/all_images/image-4.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="mb-[20px]">
                                            <p>
                                                Receive your design within a few business days and be updated
                                                on the process. Everything you need for a digitally driven
                                                brand. Defined proposition. Conceptual realization.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <div className="mb-[20px]">
                                            <p>
                                                Receive your design within a few business days and be updated
                                                on the process. Everything you need for a digitally driven
                                                brand. Defined proposition. Conceptual realization.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* td-service-replace-area-end */}


        </div>
    );
};

export default VisionsVoices;
