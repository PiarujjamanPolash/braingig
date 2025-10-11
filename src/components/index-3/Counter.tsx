"use client"
import Image from 'next/image';
import { useRef } from 'react';
import SplitTextAnimation from '@/components/animations/index-3/SplitTextAnimation';
const counters = [
  {
    shape: "/images/index-3/counter-shape-1.png",
    count: "5",
    suffix: "+",
    text: "Years of<br> directory expertise",
  },
  {
    shape: "/images/index-3/counter-shape-1.png",
    count: "10",
    suffix: "K",
    text: "Listing<br> managed",
  },
  {
    shape: "/images/index-3/counter-shape-2.png",
    count: "96",
    suffix: "%",
    text: "user <br> Satisfaction",
  },
];
const Counter: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="td-counter-3-area grey-bg-3 pt-[155px] pb-[130px]">
      <div className="container w-[90%] mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 xl:w-7/12 text-center mb-[70px]">
            <div className="td-counter-3-title-wrap">
              <span className="td-section-3-subtitle inline-block mb-[15px]">
                OUR IMPACT
              </span>
              <h2 ref={textRef} className="td-section-3-title td-split-text td-split-in-right">
                Building smarter <span>directory platforms</span> for growth
              </h2>
            </div>
            <SplitTextAnimation textRef={textRef} direction="right" />
          </div>
        </div>

        {/* Counter Items */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {counters.map((item, index) => (
            <div
              key={index}
              className={`td-counter-3-item relative mb-[30px]`}
            >
              <span className="td-counter-3-shape">
                <Image
                  src={item.shape}
                  alt=""
                  width={226}
                  height={201}
                />
              </span>
              <h2 className="title">
                <span className="" data-count={item.count}>
                  {item.count}
                </span>
                {item.suffix}
              </h2>
              <span
                className="para"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
