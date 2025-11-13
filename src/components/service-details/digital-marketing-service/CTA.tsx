import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CTAProps {
    title: string;
    buttonText: string;
    link: string;
    paragraph?: string; // optional
    backgroundImage?: string; // optional
}

const CTA: React.FC<CTAProps> = ({
    title,
    buttonText,
    link,
    paragraph,
    backgroundImage = "/images/service-details/digital-marketing-service/cta-bg-2.jpg"
}) => {
    return (
        <section className="relative w-full container min-h-[30vh] lg:min-h-[70vh] mx-auto flex justify-center items-center md:justify-start my-15 lg:my-[120px]">
            {/* Background Image */}
            <Image
                src={backgroundImage}
                alt="Background"
                fill
                priority
                className="object-cover object-center -z-10"
            />

            <div className="relative container mx-auto z-10 flex flex-col justify-center p-5 md:pl-20 pb-5 md:pb-15 items-center py-15">
                <h2 className="container w-full sm:w-[70%] lg:!w-[45%] text-3xl md:text-4xl font-medium lg:font-medium leading-normal tracking-wide mb-6 text-center">
                    {title}
                </h2>

                {paragraph && (
                    <p className="container w-full sm:w-[70%] lg:!w-[45%] text-center mb-6 text-base sm:text-lg">
                        {paragraph}
                    </p>
                )}

                <Link
                    href={link}
                    className="w-fit !bg-primary hover:!bg-[#233D8C] !text-accent font-semibold py-3 px-8 sm:px-10 sm:py-4 rounded-lg transition duration-300 text-base sm:text-lg"
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
};

export default CTA;
