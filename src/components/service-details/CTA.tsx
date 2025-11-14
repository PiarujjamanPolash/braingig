"use client";
import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

interface CTAProps {
    text: string;
    buttonLabel: string;
    buttonLink?: string;
    background?: string;
}

const CTA: React.FC<CTAProps> = ({
    text,
    buttonLabel,
    buttonLink = "#",
    background = "/images/cta-home.avif",
}) => {
    return (
        <section className="relative container mx-auto w-full my-[120px]">
            <div className='h-[500px]'>
                {/* Background Image */}
                <img
                    src={background}  // use dynamic background
                    alt="CTA Background"
                    className="w-full h-full object-cover"
                />

                {/* Overlay box */}
                <div className="sm:w-[70%] md:w-[60%] lg:w-[40%] 2xl:w-[30%] absolute bottom-0 sm:left-1/2 sm:top-1/2 sm:-translate-1/2 lg:bottom-0 lg:left-0  lg:translate-none bg-black/70 text-white p-6">
                    <p
                        className="mb-4 text-2xl sm:text-3xl font-medium lg:font-semibold text-gray-200"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />

                    <Link
                        href={buttonLink}  // use dynamic link
                        className="flex items-center !text-secondary text-xl sm:text-2xl gap-1 font-semibold py-2 hover:text-accent! transition"
                    >
                        {buttonLabel}
                        <IoIosArrowRoundForward className='text-4xl' />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
