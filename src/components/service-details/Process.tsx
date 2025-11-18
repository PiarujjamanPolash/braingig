"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine, FaExpand } from 'react-icons/fa';

const processData = [
  { icon: <FaSearch className="text-secondary text-2xl sm:text-3xl md:text-4xl" />, title: 'Audit' },
  { icon: <FaLightbulb className="text-secondary text-2xl sm:text-3xl md:text-4xl" />, title: 'Strategy & Plan' },
  { icon: <FaRocket className="text-secondary text-2xl sm:text-3xl md:text-4xl" />, title: 'Create & Launch' },
  { icon: <FaChartLine className="text-secondary text-2xl sm:text-3xl md:text-4xl" />, title: 'Measure & Optimize' },
  { icon: <FaExpand className="text-secondary text-2xl sm:text-3xl md:text-4xl" />, title: 'Scale' },
];

const Process = () => {
  return (
    <section className='pb-0'>
      <div className="bg-gray-50 text-center py-10 lg:py-25">
        <h2 className="text-[40px] lg:text-[60px] font-medium tracking-wide mb-12 text-secondary px-4 md:px-0">Our Lean & Clear Process</h2>
        {/* Desktop */}
        <div className="container hidden md:block relative md:flex md:flex-row items-center justify-between">
          <div className="hidden md:block absolute top-[35%] left-0 right-0 h-1 bg-gray-300 z-0"></div>

          {processData.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative z-10">
              <div className="bg-white p-4 lg:p-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300">
                {step.icon}
              </div>
              <h3 className="mt-4 text-2xl font-medium">{step.title}</h3>
            </div>
          ))}
        </div>
        {/* Mobile */}
        <div className="block md:hidden mt-8 overflow-hidden">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
          >
            <div className="flex items-center px-6 space-x-6">
              {processData.map((step, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center items-center min-w-[120px]"
                >
                  <div className="bg-white p-4 lg:p-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300 flex justify-center items-center">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-center whitespace-nowrap">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Process;
