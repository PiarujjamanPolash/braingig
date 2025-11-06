"use client";
import Image from "next/image";
import Link from "next/link";
import leafShape from "../../../public/images/hero/shape.webp"
import eyeShape from "../../../public/images/hero/eye-shape.webp"
import heroThumb from "../../../public/images/hero/thumb.webp"
import { FaArrowRight } from "react-icons/fa";
const Hero: React.FC = () => {
  return (
    <div
      className="td-hero-area td-btn-trigger td-hero-2-spacing relative z-[1] bg-gradient-to-t from-[#EEEEEE] to-[#CBD99B] text-[#11224E] bg-cover bg-center"
    >
      <div className="container w-[90%] mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-7/12">
            <div className="td-hero-2-title-wrap">
              <h2 className="td-hero-2-title mb-[100px]">
                <span className="flex items-center td-split-text td-split-in-right">
                  Our Team Work <i className="fa-sharp fa-solid fa-arrow-right ml-2 flex justify-center items-center"><FaArrowRight /></i>
                </span>
                <span className="td-split-text td-split-in-right block">Makes <strong className="text-secondary">Your Dream</strong></span>
                <span className="td-split-text td-split-in-right block">Work.</span>
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-5/12">
            <div className="td-hero-2-thumb relative z-[1]">
              <div className="td-btn-bounce">
                <Image
                  className="thumb-3"
                  src="/images/hero/shape-1.png"
                  alt=""
                  width={163}
                  height={155}
                />
              </div>
              <Image
                className="thumb-4 td-btn-bounce"
                src="/images/hero/shape-2.png"
                alt=""
                width={119}
                height={97}
              />
              <Image
                className="thumb-1"
                src="/images/hero/image-13.jpg"
                alt=""
                width={295}
                height={319}
              />
              <Image
                className="thumb-2 hidden sm:inline-block"
                src="/images/hero/thumb-2.jpg"
                alt=""
                width={119}
                height={97}
              />
            </div>
          </div>

          {/* Big Title */}
          <div className="w-full">
            <div className="td-hero-2-bigtitle">
              <h2 className="td-split-text td-split-in-right !text-secondary">SPARKUP</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
