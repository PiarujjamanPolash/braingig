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
                                A team of innovators shaping <br />
                                the future of<span>online directories</span>
                            </h2>
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="w-full lg:w-5/12">
                        <div className="td-about-3-content lg:mr-28 mb-8">
                            <p className="para pb-14">
                                We build directory platforms that help people find, list, and grow — all in one seamless experience. 
                            </p>
                            <h2 className="title relative inline-block mb-0 text-5xl font-bold">
                                50 <span>k+</span>
                            </h2>
                            <p className="para">
                                We’ve helped thousands of entrepreneurs launch successful listing platforms across multiple industries.
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
                            <h4 className="title mb-6 text-xl font-semibold">Our Core Expertise</h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Custom Directory Website Development</li>
                                <li>Advanced Search & Filter Integration</li>
                                <li>Map & Location-Based Listings</li>
                                <li>Listing Submission & Management System</li>
                                <li>SEO Optimization & Monetization Setup</li>
                                <li>Ongoing Maintenance & Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
