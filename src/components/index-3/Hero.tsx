"use client"

import { useRef } from "react";
import SplitTextAnimation from "@/components/animations/index-3/SplitTextAnimation";
import Image from "next/image";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="td-hero-area td-hero-3-spacing fix include-bg bg-[url('/images/index-3/hero-bg.png')]"
    >
      <div className="container w-[90%] mx-auto px-4">
        <div className="td-hero-3-title-wrap">
          <h2 ref={textRef} className="td-hero-3-title text-center text-4xl md:text-5xl font-bold leading-tight">
            List Smarter. Reach Further. <span>Grow Faster.</span>
          </h2>

          <div
            className="td-hero-3-content pt-[100px] relative"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <Image width={178} height={172}
              className="td-hero-3-shape"
              src="/images/index-3/hero-icon.png"
              alt=""
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-2">
                <div className="relative mb-8 inline-block">
                  <Image width={106} height={106}
                    className="likes"
                    src="/images/index-3/hero-like.png"
                    alt=""
                  />
                  <Image width={143} height={143}
                    className="round-text td-live-anim-spin"
                    src="/images/index-3/hero-text.png"
                    alt=""
                  />
                </div>
              </div>
              <SplitTextAnimation textRef={textRef} direction="right" />

              {/* Middle Column */}
              <div className="hidden sm:block col-span-6">
                <div className="td-hero-3-border mb-8 block border-b border-gray-300"></div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4">
                <div className="td-hero-3-content-para mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Transform the way your business gets discovered. With a sleek directory system built for visibility and trust, you can showcase your brand, connect with real customers, and make every click count.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
