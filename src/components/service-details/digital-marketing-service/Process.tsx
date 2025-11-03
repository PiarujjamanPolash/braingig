import React from 'react';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine, FaExpand } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch size={40} className="text-[#ff5722]" />, title: 'Audit' },
  { icon: <FaLightbulb size={40} className="text-[#ff5722]" />, title: 'Strategy & Plan' },
  { icon: <FaRocket size={40} className="text-[#ff5722]" />, title: 'Create & Launch' },
  { icon: <FaChartLine size={40} className="text-[#ff5722]" />, title: 'Measure & Optimize' },
  { icon: <FaExpand size={40} className="text-[#ff5722]" />, title: 'Scale' },
];

const ProcessFlow = () => {
  return (
    <section className="bg-gray-50 py-16 mt-20 mb-[100px]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Lean & Clear Process</h2>

        <div className="hidden md:block relative md:flex md:flex-row items-center justify-between">
          {/* Continuous horizontal line for desktop */}
          <div className="absolute top-[35%] left-0 right-0 h-1 bg-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative z-10"
            >
              {/* Step circle */}
              <div className="bg-white p-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300">
                {step.icon}
              </div>
              {/* Step title */}
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="md:hidden mt-8 flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="bg-white p-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300">
                {step.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              {index !== steps.length - 1 && (
                <div className="w-1 h-12 bg-gray-300 mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
