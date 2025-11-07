import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
        <section className="relative w-full min-h-[60vh] h-[600px] flex justify-center items-center md:items-end md:justify-start my-20">
            {/* Background Image */}
            <Image
                src="/images/hero/thumb.webp"
                alt="Background"
                fill
                priority
                className="object-cover object-center -z-10"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 -z-10"></div>
            <div className="relative z-10 flex flex-col justify-start p-5 md:pl-20 pb-5 md:pb-15 flex items-center md:items-start">
                <h2 className="w-full sm:w-[70%] lg:!w-[45%] !text-white text-3xl md:text-4xl font-medium lg:font-medium leading-normal tracking-wide mb-6 text-center md:text-start">
                    Contact <strong className='text-secondary'>Brain Gig</strong> today and start your journey to higher rankings and increased organic traffic.
                </h2>
                <Link
                    href="/contact"
                    className="w-fit !bg-secondary hover:!bg-[#d84315] text-white font-semibold py-3 px-8 sm:px-10 sm:py-4 rounded-lg transition duration-300 text-base sm:text-lg"
                >
                    I’m Ready To Grow
                </Link>
            </div>
        </section>
    );
};

export default CTA;
