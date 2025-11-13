"use client"
import Image from "next/image";

const About: React.FC = () => {
    return (
        <section className="td-about-area py-15 lg:pt-30 lg:pb-20 px-5 md:px-0 ">
            <div className="container w-[90%] mx-auto">
                {/* Author Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20">
                    <h2 className="block lg:hidden text-[40px] lg:text-[60px] text-center w-full sm:w-[70%] mx-auto font-bold uppercase mb-[30px] td-text-invert-orange">
                        Clarity, Creativity, and Conversion.
                    </h2>
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
                            <h2 className="hidden lg:block text-[40px] lg:text-[60px] font-medium tracking-wide uppercase mb-[20px] td-text-invert-orange">
                                Clarity, Creativity, and Conversion.
                            </h2>
                            <p className="text-[15px] md:text-base lg:text-lg lg:font-semibold">
                                We plan, create, and optimize a complete Digital Marketing Strategy that blends content, SEO, paid media, and creative. As a results-driven Digital Marketing Agency, we deliver an Online Marketing Solution built for clarity, scale, and measurable growth.
                            </p>
                        </div>
                        <div className="td-about-6-author">
                            <div className="hidden md:block td-about-6-author-top mb-[40px]">
                                <div className="flex relative -space-x-4">
                                    <Image
                                        className="mb-[25px] h-15 w-15 rounded-full object-cover border border-blue-900"
                                        src="/images/service-details/digital-marketing-service/author-1.jpg"
                                        alt="author avatar"
                                        width={60}
                                        height={60}
                                    />
                                    <Image
                                        className="mb-[25px] h-15 w-15 rounded-full object-cover border border-blue-900"
                                        src="/images/service-details/digital-marketing-service/author-2.jpg"
                                        alt="author avatar"
                                        width={60}
                                        height={60}
                                    />
                                    <Image
                                        className="mb-[25px] h-15 w-15 rounded-full object-cover border border-blue-900"
                                        src="/images/service-details/digital-marketing-service/author-3.jpg"
                                        alt="author avatar"
                                        width={60}
                                        height={60}
                                    />
                                </div>
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
        </section>
    );
};

export default About;
