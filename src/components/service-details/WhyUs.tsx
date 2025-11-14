import { Services } from '@/utils/fakeData/servicesData';
import Image from 'next/image';
import React from 'react';

type WhyUsProps = {
  whyUs?: {
    title: string;
    description: string;
  };
};


const WhyUs: React.FC<WhyUsProps> = ({ whyUs }) => {
  if (!whyUs) return null; 

  return (
    <section className='w-[90%] mx-auto mt-15 lg:mt-[120px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center'>
        <div className='lg:ml-10 flex flex-col items-center lg:items-start text-center lg:text-start'>
          <h2 className="font-medium text-[40px] lg:text-[60px] mb-2 td-text-invert-orange">
            {whyUs.title}
          </h2>
          <p className="text-base md:text-lg font-normal lg:font-medium text-primary w-[90%] lg:w-[70%]">
            {whyUs.description}
          </p>
        </div>
        <Image
          width={600}
          height={500}
          src={"/images/about/mission-vision-thumb.webp"} // Can make dynamic too if needed
          alt='thumb'
          className='w-full'
        />
      </div>
    </section>
  );
};

export default WhyUs;
