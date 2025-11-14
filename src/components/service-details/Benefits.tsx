import { Services } from '@/utils/fakeData/servicesData';
import Image from 'next/image';
import React from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

type BenefitsProps = {
  service: Services;
};

const Benefits: React.FC<BenefitsProps> = ({ service }) => {
  if (!service.benefits || !service.benefitsTitle) return null;

  return (
    <section className="pt-15 lg:pt-[120px] bg-white">
      <div className="container w-[90%] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        {/* Left Image */}
        <div className="">
          <Image
            width={600}
            height={600}
            src="/images/service-details/bwd-thumb.jpg" 
            alt={service.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="">
          <h2 className="font-medium text-[40px] text-center lg:text-start lg:text-[60px] mb-7 td-text-invert-orange">
            {service.benefitsTitle}
          </h2>
          <ul className="space-y-4">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <FaRegCheckCircle  className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
