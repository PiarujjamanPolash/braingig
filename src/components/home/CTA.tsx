"use client"
import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const CTA = () => {
    return (
        <section className="relative container mx-auto w-full my-[120px]">
            <div className='h-[500px]'>
                {/* Background Image */}
                <img
                    src="/images/cta-home.avif"
                    alt="CTA Background"
                    className="w-full h-full object-cover"
                />

                {/* Overlay box */}
                <div className="w-[30%] absolute bottom-0 left-0 bg-black/60 text-white p-6">
                    {/* <h2 className="text-2xl font-bold mb-3">Ready to get started?</h2> */}
                    <p className="mb-4 text-2xl font-medium text-gray-200">
                        See how Brain Gig can boost your business with our specialized, result-driven approach.
                    </p>
                    <Link href='' className="flex items-center !text-secondary text-2xl gap-1 font-semibold py-2 hover:text-gray-200! transition">
                        Get Started
                        <IoIosArrowRoundForward className='text-4xl'/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;