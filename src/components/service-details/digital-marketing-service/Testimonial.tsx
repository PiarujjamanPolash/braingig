"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Brands from "@/components/shared/Brands";
import type { Swiper as SwiperType } from "swiper/types";
import { testimonialsData } from "@/utils/fakeData/testimonialsData";

const testimonialData = {
  sectionSubtitle: "WHAT OUR CLIENTS SAY",
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
  thumbs: [
    "/images/service-details/digital-marketing-service/testimonial-author-1.png",
    "/images/service-details/digital-marketing-service/testimonial-author-2.png",
    "/images/service-details/digital-marketing-service/testimonial-author-3.png",
  ],
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
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="td-testimonial-area bg-secondary pb-10 lg:pb-[100px] td-testimonial-6-bg p-5 md:p-0">
      <div className="container w-[90%] mx-auto pt-20 lg:pt-[155px]">

        <div className="td-testimonial-6-wrap">
          <div className="td-testimonial-6-title-wrap mb-[55px] text-left">
            <span className="td-section-6-subtitle !text-[#8bea7c]  mb-[15px]">
              {testimonialData.sectionTitle}
            </span>
            {/* <h2 className="title">{testimonialData.sectionTitle}</h2> */}
          </div>

          {/* MAIN TESTIMONIAL SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            breakpoints={{
              0: {                
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {              
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            spaceBetween={20}
            className="td-testimonial-6-content-active"
          >
            {testimonialsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="td-testimonial-6-text">
                  <div>
                    <p className="mb-15 lg:mb-30 !text-white">{item.review}</p>
                    <div className="td-testimonial-6-author">
                      <span className="position !text-white">{item.position}</span>
                      <h6 className="name !text-white">{item.name}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* THUMBNAIL SWIPER */}
      {/* <div className="col-span-12 lg:col-span-4 flex justify-end lg:justify-center items-end mr-[115px] lg:mr-0">
            <div className="td-testimonial-6-slider">
              <Swiper
                modules={[Navigation, Thumbs]}
                onSwiper={setThumbsSwiper} // <-- set the thumbs swiper instance
                watchSlidesProgress
                slidesPerView={3}
                spaceBetween={10}
                className="td-testimonial-6-thumb-active"
              >
                {testimonialData.thumbs.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="td-testimonial-bottom-thumb cursor-pointer">
                      <Image
                        src={img}
                        alt={`testimonial-thumb-${index}`}
                        width={200}
                        height={200}
                        className="w-auto h-auto rounded-full"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div> */}


      {/* BRAND SLIDER */}
      <div className="pt-10 lg:pt-[70px]">
          <Brands />
      </div>
    </div>
  );
};

export default Testimonial;
