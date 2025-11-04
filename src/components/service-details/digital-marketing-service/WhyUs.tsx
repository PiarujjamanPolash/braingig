"use client"
import ServicesPinAnimation from '@/components/animations/ServicesPinAnimation';
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaLink, FaRegClock } from 'react-icons/fa6';
const projects = [
    {
        id: 1,
        title: "Project 1",
        image: "/images/service-details/digital-marketing-service/P1.png",
        strategy: [
            { icon: <FaRegClock />, text: "5 Months" },
            { icon: <FaRegFileAlt />, text: "45 Blogs" },
            { icon: <FaLink />, text: "On-Page + Off-Page SEO" },
        ],
        results: {
            clicks: { start: 63, end: 5460 },
            impressions: { start: 912, end: 91100 },
            avgPosition: { start: 38, end: 20.3, gain: 17.7 },
            ctr: { start: 0, end: 6 },
            keywords: { start: 0, end: 1036 },
        }
    },
    {
        id: 2,
        title: "Project 2",
        image: "/images/service-details/digital-marketing-service/P2.png",
        strategy: [
            { icon: <FaRegClock />, text: "3 Months Ongoing" },
            // { icon: <FaRegFileAlt />, text: "Blogs" },
            { icon: <FaLink />, text: "blogs + off-page SEO." },
        ],
        results: {
            clicks: { start: 158, end: 608 },
            impressions: { start: 3830, end: 27900 },
            avgPosition: { start: 41.8, end: 28.3, gain: 13.5 },
            ctr: { start: 0, end: 2.2 },
            keywords: { start: 0, end: 1248 },
        }
    },
    {
        id: 3,
        title: "Project 3",
        image: "/images/service-details/digital-marketing-service/P3.png",
        strategy: [
            { icon: <FaRegClock />, text: "1 Month" },
            { icon: <FaRegFileAlt />, text: "8 Blogs" },
            { icon: <FaLink />, text: "Basic + Technical SEO" },
        ],
        results: {
            clicks: { start: 61, end: 113 },
            impressions: { start: 4900, end: 10200 },
            avgPosition: { start: 57.9, end: 51.2, gain: 6.7 },
            ctr: { start: 0, end: 1.1 },
            keywords: { start: 0, end: 388 },
        }
    }
];
const WhyUs = () => {
    return (
        <div className='container w-[90%] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-5 mb-20'>
                <h3 className='!text-[70px] td-text-invert'>Why Us</h3>
                <p className='w-[60%] !text-lg text-center'>You get a complete, easy-to-understand plan, fast execution, and frequent optimization. The result: stronger rankings, lower acquisition costs, and steady pipeline growth.</p>
            </div>

            <div className="td-service-pin-items">
                {projects.map((project) => (
                <div key={project.id} className="grid grid-cols-1 xl:grid-cols-12 gap-y-4 xl:gap-8 items-start mb-20 td-service-pin-item-panel bg-white">

                    <div className="xl:col-span-8">
                        <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                            <Image
                                src={project.image}
                                alt={`${project.title} Illustration`}
                                width={1000}
                                height={600}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="xl:col-span-4 flex flex-col md:flex-row xl:flex-col gap-3 xl:gap-8 bg-white">

                        {/* Strategy Overview */}
                        <div className="shadow-md rounded-lg p-6 xl:mr-5 md:w-1/2 lg:w-full">
                            <h2 className="!text-3xl font-bold mb-4 text-gray-800">Strategy Overview</h2>
                            <div className="flex flex-wrap gap-3 text-gray-700">
                                {project.strategy.map((item, idx) => (
                                    <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex justify-center items-center gap-2">
                                        {item.icon} {item.text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Results & Performance */}
                        <div className="bg-white shadow-md rounded-lg p-6 xl:mr-5 md:w-1/2 lg:w-full">
                            <h2 className="!text-3xl font-bold mb-6 text-gray-800">Results & Performance</h2>
                            <div className="space-y-5">
                                <div className="flex justify-start xl:justify-between items-center gap-3 xl:gap-0">
                                    <span className="text-gray-600">Clicks:</span>
                                    <span className="text-green-600 font-semibold">
                                        <span className="text-gray-500 mr-2">{project.results.clicks.start} →</span>
                                        <CountUp start={0} end={project.results.clicks.end} duration={2.5} enableScrollSpy separator="," />
                                    </span>
                                </div>

                                <div className="flex justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                    <span className="text-gray-600">Impressions:</span>
                                    <span className="text-green-600 font-semibold">
                                        <span className="text-gray-500 mr-2">{project.results.impressions.start.toLocaleString()} →</span>
                                        <CountUp start={0} end={project.results.impressions.end} duration={2.5} enableScrollSpy separator="," />
                                    </span>
                                </div>

                                <div className="flex justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                    <span className="text-gray-600">Avg. Position:</span>
                                    <span className="text-green-600 font-semibold">
                                        <span className="text-gray-500 mr-2">{project.results.avgPosition.start} →</span>
                                        <CountUp start={0} end={project.results.avgPosition.end} duration={2.5} enableScrollSpy decimals={1} />
                                        <span className="text-gray-500 ml-2">(↑{project.results.avgPosition.gain})</span>
                                    </span>
                                </div>

                                <div className="flex justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                    <span className="text-gray-600">CTR:</span>
                                    <span className="text-green-600 font-semibold">
                                        <CountUp start={0} end={project.results.ctr.end} duration={2.5} enableScrollSpy decimals={1} />%
                                    </span>
                                </div>

                                <div className="flex justify-start lg:justify-between items-center gap-3 lg:gap-0">
                                    <span className="text-gray-600">Keywords:</span>
                                    <span className="text-green-600 font-semibold">
                                        +<CountUp start={0} end={project.results.keywords.end} duration={2.5} enableScrollSpy separator="," />
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <ServicesPinAnimation />

            </div>

        </div>
    );
};

export default WhyUs;