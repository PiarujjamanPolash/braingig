import Image from 'next/image';
import React from 'react';

const MissionVision = () => {
    return (
        <section className='w-[90%] mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className='lg:ml-10'>
                    <h2 className="font-medium text-[40px] lg:text-[60px] mb-2 td-text-invert-orange">
                            Our Mission & Vision
                        </h2>
                        <p className="text-base md:text-lg font-normal lg:font-medium text-primary lg:w-[70%]">Our mission is to be your <strong>trusted digital marketing partner</strong> and a leader in delivering practical, results-driven digital solutions. We combine strategy with flawless execution, empowering businesses to stand out online through expert <strong> professional digital marketing</strong> and custom development.
                        </p>
                </div>
                <Image width={600 } height={500 } src={ "/images/about/mission-vision-thumb.webp"} alt='thumb'className='w-full' />
            </div>
        </section>
    );
};

export default MissionVision;