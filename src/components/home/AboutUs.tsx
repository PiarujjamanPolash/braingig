"use client"

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AboutUs: React.FC = () => {

  return (
    <section className="container w-[90%] mx-auto mt-15 lg:my-[120px] mb-15">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        {/* Left Section */}
        <div className="text-center lg:text-right w-full lg:w-2/5">
          <h2 className="text-3xl lg:text-4xl leading-normal font-jakarta!">
            Grow your brand with
             <br />
            <span className="text-7xl lg:text-8xl text-secondary font-bebas! tracking-[8px]">Brain gig</span>
          </h2>
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="w-40 h-[3px] lg:w-[2px] lg:h-25 bg-secondary mt-2 mb-7 lg:mx-7"></div>

        {/* Right Section */}
        <div className="flex-1 px-5 lg:px-20">
          <p className="mb-4 text-gray-700 leading-6 text-center lg:text-start">
            Grow your brand with Brain Gig, a visionary digital marketing agency and web design agency known for pushing boundaries.
          </p>
          <p className="text-gray-700 leading-6 text-center lg:text-start">
           Our passion lies in blending innovation with strategy, delivering professional website design and custom website development that sparks growth and leaves lasting impressions.
          </p>
          <div className="td-btn-group mt-[35px] flex items-center justify-center">
                <Link className="td-btn-circle" href="/about" aria-label="About Us">
                  <FaArrowRight aria-hidden="true" />
                </Link>
                <Link className="td-btn-2 td-btn-primary" href="/about">
                  ABOUT US
                </Link>
                <Link className="td-btn-circle" href="/about" aria-label="About Us">
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
