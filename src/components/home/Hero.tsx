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
      <div className="container px-4">
        <div className="td-hero-3-title-wrap">
          <h1 ref={textRef} className="text-[55px] sm:text-[80px] md:text-[110px] lg:text-[110px] xl:text-[130px] 2xl:text-[150px] text-center text-4xl md:text-5xl font-medium lg:font-semibold leading-tight">
            Our Team Work, Makes <span>Your Dream Work</span>
          </h1>
          <p className="text-lg font-medium xl:text-2xl 2xl:font-semibold !text-center md:w-[50%] mx-auto lg:text-start leading-relaxed">
           Premier web design and development agency creating conversion-focused websites.
          </p>
          <div
            className="td-hero-3-content pt-18 lg:pt-15 relative flex justify-end"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <Link href={'/contact'} className="mr-[10%] md:mr-[8%] lg:mr-[15%]">
              <div className="relative mb-8 inline-block">
                <Image width={106} height={106}
                  className="likes w-[80px] md:w-[106px]"
                  src="/images/service-details/directory-service/hero-like.png"
                  alt=""
                />
                <Image width={143} height={143}
                  className="round-text td-live-anim-spin w-[100px] md:w-[143px]"
                  src="/images/service-details/directory-service/hero-text.png"
                  alt=""
                />
              </div>
            </Link>
            <SplitTextAnimation textRef={textRef} direction="right" />
            <Image width={178} height={172}
              className="td-hero-3-shape w-[50px] md:w-[70px] 2xl:w-auto absolute top-[15%] sm:top-[10%] md:top-[5%] right-0 lg:right-[10%] 2xl:top-[-30%] 2xl:right-[4%]"
              src="/images/service-details/directory-service/hero-icon.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;