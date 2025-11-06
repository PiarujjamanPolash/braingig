"use client"
import ServicesPinAnimation from '@/components/animations/ServicesPinAnimation';
import { projectsData } from '@/utils/fakeData/digitalMarketingData';
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';

const WhyUs = () => {
    return (
        <section className='container w-[90%] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-5 mb-15 lg:mb-20'>
                <h3 className='!text-[40px] lg:!text-[60px] font-bold td-text-invert-orange'>Why Us</h3>
                <p className='w-[90%] md:w-[80%] lg:w-[50%] !text-lg font-semibold text-center'>You get a complete, easy-to-understand plan, fast execution, and frequent optimization. The result: stronger rankings, lower acquisition costs, and steady pipeline growth.</p>
            </div>

            <div className="td-service-pin-items">
                {projectsData.map((project) => (
                    <div key={project.id} className="grid grid-cols-1 xl:grid-cols-12 gap-y-4 xl:gap-5 items-start mb-20 sm:mb-32 td-service-pin-item-panel bg-white">
                        <div className="xl:col-span-9 relative">
                            <h2 className="td-portfolio-6-transparent bg-white">0{project.id}</h2>
                            <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} Illustration`}
                                    width={1000}
                                    height={600}
                                    className="w-full !h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="xl:col-span-3 flex flex-col md:flex-row xl:flex-col gap-3 xl:gap-8 bg-white">
                            {/* Strategy Overview */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:w-1/2 lg:w-full">
                                <h2 className="!text-xl md:!text-3xl font-semibold text-black mb-5 border-l-4 border-secondary pl-3">Strategy Overview</h2>
                                <div className="flex flex-wrap gap-3 text-gray-700">
                                    {project.strategy.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex justify-center items-center gap-2">
                                                <Icon /> {item.text}
                                            </span>
                                        );
                                    })}

                                </div>
                            </div>

                            {/* Results & Performance */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:w-1/2 lg:w-full">
                                <h2 className="!text-xl md:!text-3xl font-semibold text-black mb-5 border-l-4 border-secondary pl-3">Results & Performance</h2>
                                <div className="space-y-5">
                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">Clicks:</span>
                                        <span className="text-green-600 font-semibold">
                                            <span className="text-gray-500 mr-2">{project.results.clicks.start} →</span>
                                            <CountUp start={0} end={project.results.clicks.end} duration={1.5} enableScrollSpy separator="," />
                                        </span>
                                    </div>

                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">Impressions:</span>
                                        <span className="text-green-600 font-semibold">
                                            <span className="text-gray-500 mr-2">{project.results.impressions.start.toLocaleString()} →</span>
                                            <CountUp start={0} end={project.results.impressions.end} duration={1.5} enableScrollSpy separator="," />
                                        </span>
                                    </div>

                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">Avg. Position:</span>
                                        <span className="text-green-600 font-semibold">
                                            <span className="text-gray-500 mr-2">{project.results.avgPosition.start} →</span>
                                            <CountUp start={0} end={project.results.avgPosition.end} duration={1.5} enableScrollSpy decimals={1} />
                                            <span className="text-gray-500 ml-2">(↑{project.results.avgPosition.gain})</span>
                                        </span>
                                    </div>

                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">CTR:</span>
                                        <span className="text-green-600 font-semibold">
                                            <CountUp start={0} end={project.results.ctr.end} duration={1.5} enableScrollSpy decimals={1} />%
                                        </span>
                                    </div>

                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">Keywords:</span>
                                        <span className="text-green-600 font-semibold">
                                            +<CountUp start={0} end={project.results.keywords.end} duration={1.5} enableScrollSpy separator="," />
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <ServicesPinAnimation />
            </div>
        </section>
    );
};

export default WhyUs;