"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Hero: React.FC = () => {
  return (
    <div
      className="td-hero-area td-btn-trigger td-hero-2-spacing relative z-[1] bg-gradient-to-t from-secondary/90 to-accent text-[#11224E] bg-cover bg-center"
    >
      <div className="container w-[90%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          {/* Left Column */}
          <div className="w-full lg:col-span-7">
            <div className="td-hero-2-title-wrap">
              <h2 className="font-bold text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] leading-[1.14] tracking-[0.02em] text-primary mb-[100px]">
                <span className="flex items-center td-split-text td-split-in-right">
                  Our Team Work
                  <Link href="/contact">
                    <div className="hidden w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-secondary ml-[20px] lg:flex justify-center items-center transform -rotate-45">
                      <FaArrowRight className="text-[10px] lg:text-xl" />
                    </div>
                  </Link>
                </span>
                <span className="td-split-text td-split-in-right block">Makes <strong className="text-secondary">Your Dream</strong></span>
                <span className="td-split-text td-split-in-right block">Work.</span>
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:col-span-5">
            <div className="td-hero-2-thumb relative z-[1]">
              <div className="td-btn-bounce">
                <Image
                  className="thumb-3"
                  src="/images/hero/shape-1.png"
                  alt=""
                  width={163}
                  height={155}
                  priority
                />
              </div>
              <Image
                className="thumb-4 td-btn-bounce"
                src="/images/hero/shape-2.png"
                alt=""
                width={119}
                height={97}
                priority
              />
              <Image
                className="thumb-1"
                src="/images/hero/image-13.jpg"
                alt=""
                width={295}
                height={319}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
