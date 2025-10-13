"use client"

import Image from "next/image";
import Brands from "../shared/Brands";
import type { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useRef } from "react";

const testimonialData = {
  sectionSubtitle: "OUR SUITABLE PRICING PLANS",
  sectionTitle: "CLIENTS FEEDBACK",
  testimonials: [
    {
      text: `Some definitions of marketing highlight marketing's ability to produce 
             value of the firm as well. In this context, marketing can be defined 
             as "the that seeks to maximize returns to shareholders"`,
      position: "Developer",
      name: "Jonathon Marry",
    },
    {
      text: `Some definitions of marketing highlight marketing's ability to produce 
             value of the firm as well. In this context, marketing can be defined 
             as "the that seeks to maximize returns to shareholders"`,
      position: "Designer",
      name: "Amanda K.",
    },
    {
      text: `Some definitions of marketing highlight marketing's ability to produce 
             value of the firm as well. In this context, marketing can be defined 
             as "the that seeks to maximize returns to shareholders"`,
      position: "Project Manager",
      name: "Robert T.",
    },
  ],
  thumbs: ["/images/index-6/testimonial-author-1.png", 
    "/images/index-6/testimonial-author-1.png", 
    "/images/index-6/testimonial-author-1.png"],
  brands: [
    "logo.png",
    "logo-2.png",
    "logo-3.png",
    "logo-4.png",
    "logo-5.png",
    "logo-6.png",
    "logo-7.png",
    "logo-8.png",
  ],
};

const Testimonial: React.FC = () => {
const thumbsRef = useRef<SwiperType | null>(null);
    return (
        <div className="td-testimonial-area pb-[100px] td-testimonial-6-bg p-5 md:p-0">
      <div className="container w-[90%] mx-auto pt-[155px]">
        <div className="grid grid-cols-12">
          {/* LEFT SIDE - Text & Testimonials */}
          <div className="col-span-12 lg:col-span-8">
            <div className="td-testimonial-6-wrap">
              <div className="td-testimonial-6-title-wrap mb-[55px] text-left">
                <span className="td-section-6-subtitle !text-[#8bea7c] inline-block mb-[15px]">
                  {testimonialData.sectionSubtitle}
                </span>
                <h2 className="title">{testimonialData.sectionTitle}</h2>
              </div>

              {/* Swiper for testimonial text */}
              <Swiper
                modules={[Navigation, Thumbs]}
              thumbs={{ swiper: thumbsRef.current }}
                className="td-testimonial-6-content-active"
              >
                {testimonialData.testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="td-testimonial-6-text">
                      <p className="mb-40">{item.text}</p>
                      <div className="td-testimonial-6-author">
                        <span className="position !text-[#8bea7c]">{item.position}</span>
                        <h6 className="name">{item.name}</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* RIGHT SIDE - Thumbnail Slider */}
          <div className="col-span-12 lg:col-span-4 flex justify-end lg:justify-center items-end mr-[115px] lg:mr-0">
            <div className="td-testimonial-6-slider">
              <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                onSwiper={(s) => { thumbsRef.current = s; }} // store instance in ref
              watchSlidesProgress
                slidesPerView={3}
                spaceBetween={10}
                className="td-testimonial-6-thumb-active"
              >
                {testimonialData.thumbs.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="td-testimonial-bottom-thumb">
                      <Image
                        src={`${img}`}
                        alt={`testimonial-thumb-${index}`}
                        width={200}
                        height={200}
                        className="w-auto h-auto"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND SLIDER */}
      <div className="pt-[70px]">
        <div className="container-fluid container-1650">
          <Brands />
        </div>
      </div>
    </div>
    );
};

export default Testimonial;
