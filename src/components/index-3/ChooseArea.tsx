"use client"
import Image from 'next/image';
import FadeInUp from '@/components/animations/index-3/FadeInUp';
import { useRef } from 'react';
const ChooseArea: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="td-chose-area pt-[150px] pb-[80px]">
      <div className="px-4">
        <div className="container w-[90%] mx-auto flex flex-wrap">
          {/* Title */}
          <div className="w-[60%]">
            <div
              className="td-chose-3-title-wrap mb-[75px]"
            >
              <h2 ref={textRef} className="td-section-3-title">
                We Build {" "}
                <span>Directory Solutions</span> That Help Businesses Sell and Grow.
              </h2>
            </div>
          </div>
          <FadeInUp targetRef={textRef} delay={0.3} duration={1} />

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
                  <h6 className="mb-[20px]">Simplified Discovery</h6>
                  <p>
                    Our platforms make it easy for customers to find businesses, services, and products quickly with advanced search, smart filters, and interactive maps.
                  </p>
                </div>
                <div className="td-chose-3-list mb-[55px]">
                  <h6 className="mb-[20px]">Boosted Growth</h6>
                  <p>
                    With premium listings, promoted spots, and subscription options, we help businesses increase visibility and attract more clients.
                  </p>
                </div>
                <div className="td-chose-3-list">
                  <h6 className="mb-[20px]">Reliable Performance & Support</h6>
                  <p>
                    Intuitive design, seamless performance, and ongoing support ensure businesses can manage listings efficiently and deliver an exceptional customer experience.
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
