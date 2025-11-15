"use client"

import { useRef } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/animations/SplitTextAnimation";
import Link from "next/link";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="td-hero-area td-hero-3-spacing fix include-bg bg-[url('/images/service-details/directory-service/hero-bg.png')]"
    >
      <div className="container w-[90%] mx-auto px-4">
        <div className="td-hero-3-title-wrap">
          <h2 ref={textRef} className="td-hero-3-title text-center text-4xl md:text-5xl font-bold leading-tight">
            Build Powerful Directory Websites with <span>Our Expert Services.</span>
          </h2>

          <div
            className="td-hero-3-content pt-[100px] relative"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <Image width={178} height={172}
              className="td-hero-3-shape"
              src="/images/service-details/directory-service/hero-icon.png"
              alt=""
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-2">
                <Link href={'/contact'} className="relative mb-8 inline-block">
                  <Image width={106} height={106}
                    className="likes"
                    src="/images/service-details/directory-service/hero-like.png"
                    alt=""
                  />
                  <Image width={143} height={143}
                    className="round-text td-live-anim-spin"
                    src="/images/service-details/directory-service/hero-text.png"
                    alt=""
                  />
                </Link>
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
                    Our complete directory website services offer elegant design, smooth navigation, and feature-rich performance to create platforms that engage users and grow your business.
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