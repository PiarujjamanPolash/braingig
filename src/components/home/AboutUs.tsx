"use client"

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AboutUs: React.FC = () => {

  return (
    <section className="w-[90%] mx-auto mt-15 lg:my-[120px] mb-15">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-right w-2/5">
          <h2 className="text-4xl leading-normal font-jakarta!">
            Grow your brand with
             <br />
            <span className="text-8xl text-secondary font-bebas! tracking-[8px]">Brain gig</span>
          </h2>
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="hidden md:block w-[2px] h-25 bg-secondary mx-7"></div>

        {/* Right Section */}
        <div className="flex-1 px-20">
          <p className="mb-4 text-gray-700 leading-6">
            Grow your brand with Brain Gig, a visionary digital marketing agency and web design agency known for pushing boundaries.
          </p>
          <p className="text-gray-700 leading-6">
           Grow your brand with Brain Gig, a visionary digital marketing agency and web design agency known for pushing boundaries. Our passion lies in blending innovation with strategy, delivering professional website design and custom website development that sparks growth and leaves lasting impressions.
          </p>
          <div className="td-btn-group mt-[35px]">
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
