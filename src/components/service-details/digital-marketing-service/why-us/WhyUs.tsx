"use client"
import { projectsData } from '@/utils/fakeData/digitalMarketingData';
import Image from 'next/image';
import React from 'react';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatLine from './StatLine';

gsap.registerPlugin(ScrollTrigger);
const WhyUs = () => {
    return (
        <section className='container w-[90%] mx-auto px-8'>
            <div className='flex flex-col justify-center items-center gap-5 mb-15 lg:mb-20'>
                <h3 className='!text-[40px] lg:!text-[60px] font-medium tracking-wide td-text-invert-orange'>Why Us</h3>
                <p className='w-[90%] md:w-[80%] lg:w-[50%] !text-lg lg:font-semibold text-center'>You get a complete, easy-to-understand plan, fast execution, and frequent optimization. The result: stronger rankings, lower acquisition costs, and steady pipeline growth.</p>
            </div>

                {projectsData.map((project) => (
                    <div key={project.id} className="grid grid-cols-1 xl:grid-cols-12 gap-y-4 xl:gap-5 items-start mb-10 lg:mb-15 td-service-pin-item-panel">
                        <div className="xl:col-span-9 relative h-full">
                            <h2 className="td-portfolio-6-transparent bg-white">0{project.id}</h2>
                            <div className="w-full h-full rounded-lg overflow-hidden ">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} Illustration`}
                                    width={1000}
                                    height={600}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="xl:col-span-3 flex flex-col md:flex-row xl:flex-col gap-3 xl:gap-8 bg-white">
                            {/* Strategy Overview */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 md:w-1/2 lg:w-full">
                                <h2 className="!text-xl md:!text-3xl font-semibold mb-5 border-l-4 border-secondary pl-3">Strategy Overview</h2>
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
                                <h2 className="!text-xl md:!text-3xl font-semibold mb-5 border-l-4 border-secondary pl-3">Results & Performance</h2>
                                {/* <div className="space-y-5">
                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">Clicks:</span>
                                        <span className="text-green-600 font-semibold">
                                            <span className="text-gray-500 mr-2">{project?.results?.clicks?.start ?? 0 } →</span>
                                            <CountUp start={0} end={project?.results?.clicks.end ?? 0} duration={1.5} enableScrollSpy separator="," />
                                        </span>
                                    </div>

                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">Impressions:</span>
                                        <span className="text-green-600 font-semibold">
                                            <span className="text-gray-500 mr-2">{project?.results?.impressions?.start?.toLocaleString() ?? 0 } →</span>
                                            <CountUp start={0} end={project?.results?.impressions?.end ?? 0} duration={1.5} enableScrollSpy separator="," />
                                        </span>
                                    </div>

                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">Avg. Position:</span>
                                        <span className="text-green-600 font-semibold">
                                            <span className="text-gray-500 mr-2">{project?.results?.avgPosition?.start ?? 0} →</span>
                                            <CountUp start={0} end={project?.results?.avgPosition?.end ?? 0 } duration={1.5} enableScrollSpy decimals={1} />
                                            <span className="text-gray-500 ml-2">(↑{project?.results?.avgPosition?.gain ?? 0 })</span>
                                        </span>
                                    </div>

                                    <div className="flex text-sm justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">CTR:</span>
                                        <span className="text-green-600 font-semibold">
                                            <CountUp start={0} end={project?.results?.ctr?.end ?? 0 } duration={1.5} enableScrollSpy decimals={1} />%
                                        </span>
                                    </div>

                                    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                        <span className="text-gray-600">Keywords:</span>
                                        <span className="text-green-600 font-semibold">
                                            +<CountUp start={0} end={project?.results?.keywords?.end ?? 0 } duration={1.5} enableScrollSpy separator="," />
                                        </span>
                                    </div>
                                </div> */}
                                <div className="space-y-5">
                                    <StatLine
                                        label="Clicks"
                                        start={project?.results?.clicks?.start}
                                        end={project?.results?.clicks?.end}
                                    />

                                    <StatLine
                                        label="Impressions"
                                        start={project?.results?.impressions?.start}
                                        end={project?.results?.impressions?.end}
                                    />

                                    <StatLine
                                        label="Avg. Position"
                                        start={project?.results?.avgPosition?.start}
                                        end={project?.results?.avgPosition?.end}
                                        gain={project?.results?.avgPosition?.gain}
                                        decimals={1}
                                        showGain
                                    />

                                    <StatLine
                                        label="CTR"
                                        end={project?.results?.ctr?.end}
                                        suffix="%"
                                        decimals={1}
                                        showArrow={false}
                                    />

                                    <StatLine
                                        label="Keywords"
                                        end={project?.results?.keywords?.end}
                                        prefix="+"
                                        showArrow={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </section>
    );
};

export default WhyUs;