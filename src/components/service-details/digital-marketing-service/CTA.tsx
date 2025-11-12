import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
        <section className="relative w-full container min-h-[30vh] lg:min-h-[40vh] mx-auto flex justify-center items-center md:justify-start my-20">
            {/* Background Image */}
            <Image
                src="/images/service-details/digital-marketing-service/cta-bg-2.jpg"
                alt="Background"
                fill
                priority
                className="object-cover object-center -z-10"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/60 -z-10"></div> */}
            <div className="relative container mx-auto z-10 flex flex-col justify-center p-5 md:pl-20 pb-5 md:pb-15 flex items-center py-15">
                <h2 className="container w-full  sm:w-[70%] lg:!w-[45%] text-3xl md:text-4xl font-medium lg:font-medium leading-normal tracking-wide mb-6 text-center">
                    Contact <strong>Brain Gig</strong> today and start your journey to higher rankings and increased organic traffic.
                </h2>
                <Link
                    href="/contact"
                    className="w-fit !bg-primary hover:!bg-[#233D8C] !text-accent font-semibold py-3 px-8 sm:px-10 sm:py-4 rounded-lg transition duration-300 text-base sm:text-lg"
                >
                    I’m Ready To Grow
                </Link>
            </div>
        </section>
    );
};

export default CTA;
