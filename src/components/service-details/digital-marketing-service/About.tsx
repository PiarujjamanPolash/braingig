"use client"

import Image from "next/image";
const About: React.FC = () => {

    return (
        <div className="td-about-area pt-[140px] pb-[125px] px-5 md:px-0">
            <div className="container w-[90%] mx-auto">
                <div className="row">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* WHO WE ARE */}
                        <div className="col-span-5">
                            <div className="td-about-6-subtitle mb-[20px]">
                                <span className="td-section-6-subtitle">WHO WE ARE</span>
                            </div>
                        </div>

                        {/* Heading & Paragraph */}
                        <div className="col-span-7">
                            <div className="td-about-6-title-wrap mb-[50px]">
                                <h2 className="td-section-6-title text-[#063231] mb-[20px] td-text-invert">
                                    Clarity, Creativity, and Conversion.
                                </h2>
                                <p className="td-section-6-text">
                                    We plan, create, and optimize a complete Digital Marketing Strategy that blends content, SEO, paid media, and creative. As a results-driven Digital Marketing Agency, we deliver an Online Marketing Solution built for clarity, scale, and measurable growth.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Author Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Left Image */}
                        <div className="col-span-6">
                            <div className="flex justify-center td-about-6-thumb relative z-[1] mb-[30px]">
                                <Image
                                    className="shape td-live-anim-spin hidden lg:inline-block"
                                    src="/images/service-details/digital-marketing-service/about-shape-1.png"
                                    alt="shape"
                                    width={140}
                                    height={140}
                                />
                                <Image
                                    src="/images/service-details/digital-marketing-service/about-thumb.jpg"
                                    alt="about thumb"
                                    width={450}
                                    height={430}
                                    className=""
                                />
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="td-about-6-author mb-[30px]">
                            <div className="td-about-6-author-top mb-[40px]">
                                <Image
                                    className="mb-[25px]"
                                    src="/images/service-details/digital-marketing-service/about-img-2.png"
                                    alt="author avatar"
                                    width={177}
                                    height={60}
                                />
                                <p className="w-[80%] mb-[25px]">
                                    With passion and purpose, we deliver marketing solutions that make your brand shine.
                                </p>
                            </div>

                            <div className="td-about-6-author-count">
                                <div className="flex gap-10">
                                    <div className="">
                                        <div className="td-about-6-author-single">
                                            <h2 className="mb-[10px]">100%</h2>
                                            <p>
                                                Clients Satisfied and
                                                <br /> Repeating
                                            </p>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="td-about-6-author-single">
                                            <h2 className="mb-[10px]">125+</h2>
                                            <p>
                                                Projects Completed in
                                                <br /> 24 Countries
                                            </p>
                                        </div>
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

export default About;
