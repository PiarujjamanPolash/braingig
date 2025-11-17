"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Brands from "@/components/shared/Brands";
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

  return (
    <div className="td-testimonial-area bg-secondary pb-5 md:pb-10 p-5 md:p-0">
      <div className="container pt-10 md:pt-15 lg:pt-[100px]">

        <div className="">
          <div className="td-testimonial-6-title-wrap mb-[55px] text-left">
            <span className="marketing-testimonial-team-subtitle text-blue-900 mb-[15px]">
              {testimonialData.sectionTitle}
            </span>
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
            spaceBetween={50}
            className="td-testimonial-6-content-active"
          >
            {testimonialsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <div>
                    <p className="mb-10 md:mb-15 lg:mb-20 font-medium text-xl sm:text-2xl tracking-[-0.01em]">{item.review}</p>
                    <div className="td-testimonial-6-author border-t border-white/25 pt-8">
                      <span className="text-lg font-medium tracking-[-0.01em]">{item.position}</span>
                      <h6 className="text-[26px] font-medium tracking-[-0.01em]">{item.name}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* BRAND SLIDER */}
      <div className="md:pt-4 lg:pt-8">
          <Brands />
      </div>
    </div>
  );
};

export default Testimonial;
