import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CTAProps {
    title: string;
    buttonText: string;
    link: string;
    paragraph?: string;
    backgroundImage?: string;
}

const CTA: React.FC<CTAProps> = ({
    title,
    buttonText,
    link,
    paragraph,
    backgroundImage = "/images/service-details/digital-marketing-service/cta-bg-2.jpg"
}) => {
    return (
        <section>
            <div className="relative w-full flex justify-center items-center md:justify-start">
                {/* Background Image */}
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    priority
                    className="object-cover object-center -z-10"
                />

                <div className="relative container z-10 flex flex-col justify-center items-center py-15 lg:py-20 xl:py-30">
                    <h2 className="w-[90%] sm:w-[70%] lg:w-[70%] xl:w-[60%] text-2xl md:text-4xl font-medium lg:font-medium leading-normal tracking-wide mb-6 text-center">
                        {title}
                    </h2>

                    {paragraph && (
                        <p className="container w-full sm:w-[70%] lg:!w-[45%] text-center mb-6 text-base sm:text-lg">
                            {paragraph}
                        </p>
                    )}

                    <Link
                        href={link}
                        className="w-fit !bg-primary hover:!bg-[#233D8C] !text-accent hover:text-white! font-semibold py-3 px-5 sm:px-10 sm:py-4 rounded-lg transition duration-300 text-sm sm:text-lg text-center"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
