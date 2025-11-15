"use client"

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const WhoWeAre: React.FC = () => {

  return (
    <section className="container w-[90%] mx-auto lg:pt-[120px]">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center lg:text-right w-full lg:w-2/5">
          <h2 className="hidden lg:block text-3xl lg:text-[80px] font-medium leading-none tracking-widest">
            <span className="text-secondary">Who</span>
             <br />
             we
             <br />
             Are
          </h2>
          <h2 className="block lg:hidden text-3xl lg:text-[80px] font-medium leading-none tracking-widest">
            <span className="text-secondary">Who </span>
            we Are
          </h2>
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="w-40 h-[3px] lg:w-[2px] lg:h-25 bg-secondary mt-2 lg:mt-5 mb-3 lg:mb-7 lg:mx-7"></div>

        {/* Right Section */}
        <div className="flex-1 px-5 lg:px-20">
          <p className="mb-4 leading-6 text-center font-medium lg:text-start text-base lg:text-lg leading-7">
            Brain Gig was founded by visionary experts Piarujjaman Polash and Fahad Al Faisal, united by a passion for digital innovation. Fahad’s deep WordPress expertise and Piarujjaman’s visionary leadership drive our focus on <strong>creative digital solutions.</strong> They carefully handpicked a team that shares their dedication to honesty, creativity, and delivering exceptional results. Together, they built Brain Gig as a trusted leader in the digital space.
          </p>
          {/* <p className="text-gray-700 leading-6 text-center lg:text-start">
           Our passion lies in blending innovation with strategy, delivering professional website design and custom website development that sparks growth and leaves lasting impressions.
          </p>
          <div className="td-btn-group mt-[35px] flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0">
                <Link className="td-btn-circle" href="/about" aria-label="About Us">
                  <FaArrowRight aria-hidden="true" />
                </Link>
                <Link className="td-btn-2 td-btn-primary" href="/about">
                  ABOUT US
                </Link>
                <Link className="td-btn-circle" href="/about" aria-label="About Us">
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div> */}
        </div>
      </div>

    </section>
  );
};

export default WhoWeAre;
