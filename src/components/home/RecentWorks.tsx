"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Link from "next/link";
import { portfolioData } from "@/utils/fakeData/portfolioData";
import Image from "next/image";
const shuffleArray = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

const RecentWorks: React.FC = () => {
  const shuffledProjects = shuffleArray(portfolioData);

  const half = Math.ceil(shuffledProjects.length / 2);
  const firstSliderProjects = shuffledProjects.slice(0, half);
  const secondSliderProjects = shuffledProjects.slice(half);
  return (
    <div className="td-portfolio-area pt-[125px]">
      <h2 className="td-portfolio-2-bigtitle td-split-text td-split-in-right">Work</h2>

      <div id="recent-works-swiper-1" className="td-portfolio-2-slider-wrap mb-[20px]">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={15}
          slidesPerView="auto"
          loop={true}
          speed={6500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="td-portfolio-2-slider">
          {firstSliderProjects.map((item) => (
            <SwiperSlide className="!w-auto"
              key={item.id}>
              <div className="td-portfolio-2-item relative h-full">
                <div className="td-portfolio-2-thumb overflow-hidden h-full">
                  <Image width={500} height={310} className="h-full" src={item.img} alt={item.title} />
                </div>
                <div className="td-portfolio-2-content">
                  <div className="dates mb-[10px] flex items-center gap-2">
                    <span>{item.year}</span>
                    <span className="dot"></span>
                    <span>{item.category}</span>
                  </div>
                  <Link className="title" href={item.link}>{item.title}</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="td-portfolio-2-slider-wrap">
        <Swiper id="recent-works-swiper-2"
          modules={[Autoplay, FreeMode]}
          spaceBetween={15}
          slidesPerView="auto"
          loop={true}
          speed={6500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="td-portfolio-2-slider-2" dir="rtl">
          {secondSliderProjects.map((item) => (
            <SwiperSlide className="!w-auto" key={item.id}>
              <div className="td-portfolio-2-item relative h-full">
                <div className="td-portfolio-2-thumb overflow-hidden h-full">
                  <Image width={500} height={310} className="h-full" src={item.img} alt={item.title} />
                </div>
                <div className="td-portfolio-2-content">
                  <div className="dates mb-[10px] flex items-center gap-2">
                    <span>{item.year}</span>
                    <span className="dot"></span>
                    <span>{item.category}</span>
                  </div>
                  <Link className="title" href={item.link}>{item.title}</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentWorks;
