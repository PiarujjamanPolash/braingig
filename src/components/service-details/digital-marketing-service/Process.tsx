"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine, FaExpand } from 'react-icons/fa';

const processData = [
  { icon: <FaSearch size={40} className="text-secondary" />, title: 'Audit' },
  { icon: <FaLightbulb size={40} className="text-secondary" />, title: 'Strategy & Plan' },
  { icon: <FaRocket size={40} className="text-secondary" />, title: 'Create & Launch' },
  { icon: <FaChartLine size={40} className="text-secondary" />, title: 'Measure & Optimize' },
  { icon: <FaExpand size={40} className="text-secondary" />, title: 'Scale' },
];

const Process = () => {
  return (
    <section className="bg-gray-50 py-16 mt-20 mb-[100px]">
      <div className="text-center">
        <h2 className="text-[40px] lg:text-[60px] font-medium tracking-wide mb-12 text-secondary">Our Lean & Clear Process</h2>
        {/* Desktop */}
        <div className="container w-[90%] mx-auto hidden md:block relative md:flex md:flex-row items-center justify-between">
          <div className="hidden md:block absolute top-[35%] left-0 right-0 h-1 bg-gray-300 z-0"></div>

          {processData.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative z-10">
              <div className="bg-white p-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300">
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
                  <div className="bg-white p-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300 flex justify-center items-center">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-center">
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
