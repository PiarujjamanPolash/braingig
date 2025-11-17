"use client"

import { pricingData } from "@/utils/fakeData/pricingData";
import Link from "next/link";
import { useState } from "react";
import PricingCard from "./PricingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const PricingArea: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Bundles");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAddOn = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const categories = [...new Set(pricingData.map((item) => item.category))];

  const filteredData = pricingData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section>
      <div className="td-pricing-area ">
        <div className="flex justify-center mb-3 lg:mb-5">
            <h2 className="text-[40px] lg:!text-[60px] font-medium tracking-wide td-text-invert-orange">
              CUSTOMIZABLE PRICING OPTIONS
            </h2>
        </div>

        {/* tab */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className="relative px-4 py-2 font-semibold transition-all duration-300 text-gray-700 hover:text-secondary"
            >
              {cat}
              {/* Active underline */}
              {activeCategory === cat && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-secondary rounded-full"></span>
              )}
            </button>
          ))}
        </div>


        <div className="container hidden xl:grid grid-cols-1 xl:grid-cols-6 gap-6">
          {filteredData.map((item, idx) => (
            <PricingCard key={idx} item={item} idx={idx} />
          ))}
        </div> 
        <div className="container xl:hidden">
          <Swiper id="pricing-swiper"
           modules={[Navigation, Pagination ]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2.2 },
            }}
          >
            {filteredData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <PricingCard item={item} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container lg:mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-y-8 mt-5">
          <div className="flex flex-col border-l-5 border-secondary">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 ml-3 leading-normal">
              Need something Customized?
            </h2>
            <p className="text-gray-700 text-lg md:text-xl ml-3 !mb-0">
              We also offer custom packages and pricing—tell us your goals, and we’ll build the right plan.
            </p>
          </div>
          <Link
            href="/contact"
            className="!bg-secondary hover:bg-[#E64A19] !text-white font-semibold px-6 py-4 rounded-lg transition-colors duration-300 capitalize"
          >
            I&apos;m ready to grow
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingArea;
