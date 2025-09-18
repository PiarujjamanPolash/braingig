"use client";
import Image from "next/image";
import Link from "next/link";
import leafShape from "../../../public/images/hero/shape.png"
import eyeShape from "../../../public/images/hero/eye.svg"
import heroThumb from "../../../public/images/hero/thumb.jpg"
const Hero: React.FC = () => {
  return (
    <div className="td-hero-area pt-[150px] lg:pt-[215px] mb-[80px] md:mb-[140px] td-btn-trigger bg-[#D8D9D5]">
      <div className="container w-[90%] mx-auto px-4">
        <div className="td-hero-5-top pb-[55px] lg:pb-[85px]">
          <div className="flex flex-wrap items-end">
            {/* Left Content */}
            <div className="w-full xl:w-10/12">
              <div
                className="td-hero-5-title-wrap relative z-[1]"
              >
                <Image
                  className="td-hero-5-shape hidden xl:block"
                  src={leafShape}
                  alt="leaf Shape"
                  width={150}
                  height={175}
                />
                <h2 className="td-hero-5-title text-center lg:text-start">
                  Our Team Work{" "}
                  <Image
                    className="hidden lg:inline-block"
                    src={eyeShape}
                    alt="Eye Shape"
                    width={231}
                    height={100}
                    priority
                  />{" "}
                  Makes <span>Your Dream </span>Work
                </h2>
              </div>
            </div>

            {/* Right Button */}
            <div className="w-full xl:w-2/12 pt-[30px] flex justify-center lg:justify-start">
              <div className="td-hero-5-btn mb-[30px] xl:text-right td-btn-bounce">
                <Link href="/services" className="td-btn-7 flex flex-col gap-2 items-center">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Thumb */}
      <div className="td-hero-5-bottom-thumb overflow-hidden">
        <Image
          width={1520}
          height={506}
          priority
          data-speed="0.6"
          className="w-full rounded-2xl !object-contain md:!object-cover lg:!object-contain xl:!object-cover"
          src={heroThumb}
          alt="Hero Thumb"
        />
      </div>
    </div>
  );
};

export default Hero;
