"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import thumb1 from "../../../public/images/about/about-sec-thumb1.webp"
import thumb2 from "../../../public/images/about/about-sec-thumb2.webp"
import shape from "../../../public/images/about/shape.webp"

const AboutUs: React.FC = () => {
  
  return (
    <div className="td-about-area w-[90%] mx-auto pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="td-about-left mb-[30px]">
              <span>WHO WE ARE</span>
              <div className="td-about-left-thumb ml-[60px] fix td-rounded-10">
                <Image
                data-speed='.9'
                  src={thumb1}
                  alt="About Thumbnail"
                  width={280}
                  height={280}
                  className="rounded-[10px] w-full md:w-[280px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            <div className="td-about-content mb-[30px]">
              <h2 className="td-testimonial-title mb-[30px] td-text-invert">
                Grow your brand with <span className="inline-block">BrainGig</span>
              </h2>
              <p className="mb-[45px]">
                Grow your brand with Brain Gig, a visionary digital marketing agency and web design agency known for pushing boundaries. Our passion lies in blending innovation with strategy, delivering professional website design and custom website development that sparks growth and leaves lasting impressions.
              </p>

              {/* Button Group */}
              <div className="td-btn-group mb-[35px]">
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

              {/* Thumbs + Shape */}
              <div className="td-about-thumb-wrap flex items-center justify-end gap-12">
                <div className="mr-[150px] td-about-shape">
                  <Image
                    src={shape}
                    alt="About Shape"
                    width={150}
                    height={150}
                    className="td-live-anim-spin"
                  />
                </div>
                <div className="td-about-thumb fix td-rounded-10">
                  <Image
                    data-speed='.9'
                    src={thumb2}
                    alt="About Thumbnail 2"
                    width={220}
                    height={308}
                    className="rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
