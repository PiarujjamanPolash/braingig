"use client"
import Image from "next/image";

const About: React.FC = () => {
    return (
        <section className="td-about-area py-20 lg:pt-[150px] lg:pb-[100px] px-5 md:px-0">
            <div className="container w-[90%] mx-auto">
                <div className="">
                    <div className="">
                        {/* WHO WE ARE */}
                        {/* <div className="col-span-5">
                            <div className="td-about-6-subtitle mb-[20px]">
                                <span className="td-section-6-subtitle">WHO WE ARE</span>
                            </div>
                        </div> */}

                        {/* Heading & Paragraph */}
                        {/* <div className="flex justify-end">
                            <div className="td-about-6-title-wrap mb-[50px]">
                                <h2 className="td-section-6-title text-[#063231] mb-[20px] td-text-invert-orange">
                                    Clarity, Creativity, and Conversion.
                                </h2>
                                <p className="td-section-6-text">
                                    We plan, create, and optimize a complete Digital Marketing Strategy that blends content, SEO, paid media, and creative. As a results-driven Digital Marketing Agency, we deliver an Online Marketing Solution built for clarity, scale, and measurable growth.
                                </p>
                            </div>
                        </div> */}
                    </div>


                    {/* Author Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20">
                        {/* Left Image */}
                        <div className="col-span-6">
                            <div className="flex justify-center td-about-6-thumb relative z-[1] mb-[30px]">
                                <Image
                                    className="shape td-live-anim-spin hidden lg:block"
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
                            <div className="td-about-6-title-wrap mb-[50px]">
                                <h2 className="text-[40px] lg:text-[50px] font-bold uppercase mb-[20px] td-text-invert-orange">
                                    Clarity, Creativity, and Conversion.
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg font-semibold text-black">
                                    We plan, create, and optimize a complete Digital Marketing Strategy that blends content, SEO, paid media, and creative. As a results-driven Digital Marketing Agency, we deliver an Online Marketing Solution built for clarity, scale, and measurable growth.
                                </p>
                            </div>
                            <div className="td-about-6-author">
                                <div className="hidden md:block td-about-6-author-top mb-[40px]">
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
                                    <div className="flex items-center justify-center md:justify-start gap-5 lg:gap-10">
                                        <div className="text-center md:text-start">
                                            <h2 className="!text-secondary text-[40px] mb-[10px]">100%</h2>
                                            <p className="!text-sm md:!text-base !mb-0">Clients Satisfied and Repeating</p>
                                        </div>
                                        <div className="text-center md:text-start">
                                            <h2 className="!text-secondary text-[40px] mb-[10px]">125+</h2>
                                            <p className="!text-sm md:!text-base !mb-0">Projects Completed in 24 Countries
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
