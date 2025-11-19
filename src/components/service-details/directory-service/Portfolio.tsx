"use client"
import { useRef, useState } from 'react';
import { portfolioData } from '@/utils/fakeData/portfolioData';
import PortfolioItem from './PortfolioItem';
import SplitTextAnimation from '@/components/animations/SplitTextAnimation';

const Portfolio: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  const directoryProjects = portfolioData.filter((item) =>
    item.category.includes("Directory")
  );

  const [visibleCount, setVisibleCount] = useState(6);
  const visibleProjects = directoryProjects.slice(0, visibleCount);

  const middleIndex = Math.ceil(visibleProjects.length / 2);
  const leftColumn = visibleProjects.slice(0, middleIndex);
  const rightColumn = visibleProjects.slice(middleIndex);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className='pt-0 pb-0'>
      <div className="td-portfolio-area td-portfolio-3-bg pt-15 lg:py-[200px] px-5 md:px-0">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-5 items-center pb-[80px] gap-8 lg:gap-0">
          <div className="col-span-5 lg:col-span-3">
            <div ref={textRef} className="td-portfolio-3-title-wrap">
              <h2 className="td-section-3-title td-section-3-title-white">
                From Listings to Lasting Impact
              </h2>
            </div>
            <SplitTextAnimation textRef={textRef} direction="right" />
          </div>
          <div className="col-span-5 lg:col-span-2">
            <div
              className="td-portfolio-3-title-para"
            >
              <p className='text-base lg:text-lg font-medium'>Our projects showcase how directory websites transform simple listings into powerful tools for growth, engagement, and business success.</p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-[80px]">
          {/* Left Column */}
          <div>
            {leftColumn.map((item,index) => (
              <PortfolioItem
                key={item.id}
                item={item}
                direction="left"
                delayOffset={index * 0.2}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="pt-0 lg:pt-[140px]">
            {rightColumn.map((item, index) => (
              <PortfolioItem
                key={item.id}
                item={item}
                direction="right"
                delayOffset={index * 0.2}
              />
            ))}
          </div>
        </div>


        {/* View All Button */}
        {visibleCount < directoryProjects.length && (
          <div className="flex justify-start text-center">
            <button
              onClick={handleViewMore}
              className="td-header-2-btn ml-[10px] flex justify-center items-center cursor-pointer mb-10 lg:mb-0"
            >
              <span className="icon flex justify-center items-center">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7767 7.47384C15.9198 7.62604 16 7.8316 16 8.04582C16 8.26004 15.9198 8.4656 15.7767 8.61781L8.92138 15.8429C8.77516 15.9903 8.58094 16.0729 8.37867 16.0737C8.27759 16.0732 8.17746 16.0529 8.08351 16.0134C7.94489 15.9522 7.8266 15.8488 7.74358 15.7167C7.66056 15.5845 7.61651 15.4294 7.61698 15.2709V8.84861H0.761697C0.559684 8.84861 0.365942 8.76404 0.223096 8.61348C0.0802502 8.46292 0 8.25874 0 8.04582C0 7.83291 0.0802502 7.62871 0.223096 7.47817C0.365942 7.32761 0.559684 7.24304 0.761697 7.24304H7.61698V0.820711C7.61651 0.662221 7.66056 0.507129 7.74358 0.374983C7.8266 0.242834 7.94489 0.139545 8.08351 0.0781301C8.2242 0.0202932 8.37756 0.00562 8.52585 0.0358103C8.67412 0.065999 8.81125 0.139818 8.92138 0.248724L15.7767 7.47384Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>View More</span>
            </button>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Portfolio;