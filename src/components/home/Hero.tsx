"use client"

import { useRef } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/animations/SplitTextAnimation";
import Link from "next/link";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="td-hero-area td-hero-3-spacing bg-gradient-to-b from-accent to-secondary/90"
    >
      <div className="container w-[90%] mx-auto px-4">
        <div className="td-hero-3-title-wrap">
          <h2 ref={textRef} className="td-hero-3-title text-center text-4xl md:text-5xl font-medium lg:font-semibold leading-tight">
            Our Team Work, Makes <span>Your Dream Work</span>
          </h2>
          <p className="text-lg font-medium xl:text-2xl 2xl:font-semibold !text-center md:w-[50%] mx-auto lg:text-start leading-relaxed">
           Premier web design and development agency creating conversion-focused websites.
          </p>
          <div
            className="td-hero-3-content pt-18 lg:pt-15 relative flex justify-end"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <Link href={'/contact'} className="mr-[15%] md:mr-[8%] lg:mr-[15%]">
              <div className="relative mb-8 inline-block">
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
              </div>
            </Link>
            <SplitTextAnimation textRef={textRef} direction="right" />
            <Image width={178} height={172}
              className="td-hero-3-shape"
              src="/images/service-details/directory-service/hero-icon.png"
              alt=""
            />

            {/* <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <Link href={'/contact'} className="lg:col-span-2">
                <div className="relative mb-8 inline-block">
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
                </div>
              </Link>
              <SplitTextAnimation textRef={textRef} direction="right" />

              <div className="hidden sm:block col-span-6">
                <div className="td-hero-3-border mb-8 block border-b border-gray-300"></div>
              </div>

              <div className="lg:col-span-4">
                <div className="td-hero-3-content-para mb-8">
                  <p className="text-lg font-medium 2xl:text-xl 2xl:font-semibold text-center lg:text-start leading-relaxed">
                    As a premier web design and development agency creating conversion-focused websites.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;