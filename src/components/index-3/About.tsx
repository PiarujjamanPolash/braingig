"use client"

const About: React.FC = () => {

    return (
        <div className="td-about-area pt-24 pb-24">
            <div className="px-4">
                <div className="container mx-auto  flex flex-wrap">
                    {/* Title Section */}
                    <div className="w-full">
                        <div className="td-about-3-title-wrap mb-28">
                            <h2 className="td-section-3-title td-split-text td-split-in-right text-4xl md:text-5xl font-bold leading-tight">
                                A company full of young, open <br />
                                minded <span>wants to bring</span>
                            </h2>
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="w-full lg:w-5/12">
                        <div className="td-about-3-content lg:mr-28 mb-8">
                            <p className="para pb-14">
                                We are excited for our work and how it positively impacts clients.
                                With over of experience <br />
                                we have been constantly
                            </p>
                            <h2 className="title relative inline-block mb-0 text-5xl font-bold">
                                15 <span>M+</span>
                            </h2>
                            <p className="para">
                                We helped to get companies with <br />
                                $15M+ funding
                            </p>
                        </div>
                    </div>

                    {/* Middle Image */}
                    <div className="w-full lg:w-4/12 md:w-7/12 fix">
                        <div className="td-about-3-thumb mb-8 mr-5 td_image_animetion">
                            <img
                                className="w-full"
                                src="/images/index-3/about.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* Right List */}
                    <div className="w-full lg:w-3/12 md:w-5/12">
                        <div className="td-about-3-list lg:ml-12 mb-8">
                            <h4 className="title mb-6 text-xl font-semibold">We specialize in</h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>One Click Installation</li>
                                <li>Video Production</li>
                                <li>Help me Write a Story</li>
                                <li>Art Design</li>
                                <li>System & Guides</li>
                                <li>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
