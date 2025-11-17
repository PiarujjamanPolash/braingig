"use client";

import { teamData } from "@/components/about/Team";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Team: React.FC = () => {
  const doubledTeamData = [...teamData];

  return (
    <section className="td-team-area">
      <div className="container mb-[10px]">
        <div className="flex flex-wrap mb-[15px]">
          <div className="lg:w-3/12 w-full">
            <div className="td-team-6-subtitle mb-[20px]">
              <span className="marketing-testimonial-team-subtitle uppercase">Our experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Slider */}
      <div className="container-fluid overflow-hidden">
        <Swiper id="marketing-team-swiper"
          modules={[Autoplay]}
          spaceBetween={16}          
          slidesPerView={5}
          loop={true}                
          speed={5000}              
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
              0: {                
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {              
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}           
        >
          {doubledTeamData.map((member, index) => (
            <SwiperSlide key={index} className="w-48 flex-shrink-0">
              <div className="td-team-6-wrap flex flex-col justify-between">
                <div className="td-team-6-thumb mb-[20px]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="td-team-6-content text-left flex-1">
                  <Link href={''} className="name inline-block mb-[5px]">
                    {member.name}
                  </Link>
                  <span className="tag block">{member.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
