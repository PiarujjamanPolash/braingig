import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const handleScrollToService = (id: string) => {
    const services = document.querySelectorAll(".highlight-service")
    services.forEach(service => {
        service.classList.remove("highlight-service");
    });
    const section = document.getElementById(id);
    if (section) {
        const headerOffset = 120;
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
    window.history.pushState(null, "", `#${id}`);
};

const Hero = () => {
    return (
        <div className="py-20 lg:py-30 bg-accent">
            <div className='flex flex-col items-center justify-center text-center px-6'>
                <h3 className="w-full md:w-[80%] lg:w-[60%] mt-4 text-[40px] lg:text-[60px] text-primary">
                    Would you like more information? We are happy <span className='text-secondary'>to help you!</span>
                </h3>
                <div className="td-btn-group mt-[35px] flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0">
                    <Link className="td-btn-circle" onClick={(e) => { e.preventDefault(); handleScrollToService("meet-us"); }} href="" aria-label="About Us">
                        <FaArrowRight aria-hidden="true" />
                    </Link>
                    <Link className="td-btn-2 td-btn-primary" onClick={(e) => { e.preventDefault(); handleScrollToService("meet-us"); }} href="">
                        Want to meet us?
                    </Link>
                    <Link className="td-btn-circle" onClick={(e) => { e.preventDefault(); handleScrollToService("meet-us"); }} href="" aria-label="About Us">
                        <FaArrowRight aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;