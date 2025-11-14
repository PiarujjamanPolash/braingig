import Image from 'next/image';
import React from 'react';

const HowWeWork = () => {
    return (
        <section className='my-15 lg:my-[120px]'>
            <div className='container w-[90%] mx-auto '>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center'>
                    <Image width={600} height={500} src={"/images/about/how-we-work-thumb.jpg"} alt='thumb' className='w-full row-start-2 lg:row-start-auto lg:col-start-1' />
                    <div className='lg:ml-10 row-start-1 lg:col-start-2 flex flex-col items-center lg:items-start text-center lg:text-start'>
                        <h2 className="font-medium text-[40px] lg:text-[60px] mb-2 td-text-invert-orange">
                            Our Approach
                        </h2>
                        <p className="text-base md:text-lg font-normal lg:font-medium text-primary lg:w-[70%]">We believe in deep collaboration and transparency. From initial discovery to launch and beyond, we develop custom strategies that fuse <strong>business website development</strong>, SEO, and digital marketing into an even growth engine. Our process is agile, data-driven, and designed to adapt as your brand evolves.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;