"use client"
import Image from 'next/image';
import FadeInUp from '@/components/animations/index-3/FadeInUp';
import { useRef } from 'react';
const ChooseArea: React.FC = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="td-chose-area pt-[100px] lg:pt-[150px] pb-[80px]">
      <div className="px-4">
        <div className="container w-[90%] mx-auto flex flex-wrap">
          {/* Title */}
          <div className="w-full lg:w-[70%]">
            <div
              className="td-chose-3-title-wrap mb-[75px]"
            >
              <h2 ref={titleRef} className="td-section-3-title text-center md:text-start">
                Turn Your Directory into a <span>Growth Engine </span>for Your Business
              </h2>
              <FadeInUp targetRef={titleRef} delay={0.3} duration={1} />
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12'>
            {/* Image */}
            <div className="col-span-6">
              <div className="td-chose-3-thumb flex justify-center mb-[30px]">
                <Image
                  src="/images/index-3/choose-img.png"
                  alt=""
                  width={275}
                  height={359}
                />
              </div>
            </div>

            {/* List */}
            <div className="col-span-6">
              <div className="td-chose-3-list-wrap mr-[110px] mb-[30px]">
                <div className="td-chose-3-list mb-[55px]">
                  <h6 className="mb-[20px]">Tailored for Your Business Goals</h6>
                  <p>
                    Every business is unique. We create directories that fit your exact needs—whether it’s expanding categories, integrating new features, or scaling to handle high traffic—ensuring your platform evolves as your business grows.
                  </p>
                </div>
                <div className="td-chose-3-list mb-[55px]">
                  <h6 className="mb-[20px]">Boost Engagement and Visibility</h6>
                  <p>
                    Your listings get noticed. With smart search tools, interactive maps, and clear categorization, users find exactly what they need quickly, turning visits into meaningful interactions and keeping your audience coming back.
                  </p>
                </div>
                <div className="td-chose-3-list">
                  <h6 className="mb-[20px]">Revenue-Driven Features</h6>
                  <p>
                    We help you turn your directory into a profitable platform. With options like premium listings, featured spots, and subscription models, your website isn’t just informative—it’s a growth engine for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseArea;
