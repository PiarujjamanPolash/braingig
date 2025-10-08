"use client"
import Image from 'next/image';
const counters = [
  {
    shape: "/images/index-3/counter-shape-1.png",
    count: "11",
    suffix: "+",
    text: "Years of<br> experience",
    animation: "fadeInRight",
  },
  {
    shape: "/images/index-3/counter-shape-1.png",
    count: "25",
    suffix: "K",
    text: "Paid<br> customers",
    animation: "fadeInUp",
  },
  {
    shape: "/images/index-3/counter-shape-2.png",
    count: "99",
    suffix: "%",
    text: "Satisfaction<br> rate",
    animation: "fadeInLeft",
  },
];
const Counter: React.FC = () => {
  return (
    <section className="td-counter-3-area grey-bg-3 pt-[155px] pb-[130px]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 xl:w-7/12 text-center mb-[70px]">
            <div className="td-counter-3-title-wrap">
              <span className="td-section-3-subtitle inline-block mb-[15px]">
                OUR STATE
              </span>
              <h2 className="td-section-3-title td-split-text td-split-in-right">
                Bundle with our digital studio <span>experience</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Counter Items */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {counters.map((item, index) => (
            <div
              key={index}
              className={`td-counter-3-item relative mb-[30px] wow ${item.animation}`}
              data-wow-delay=".7s"
              data-wow-duration="1s"
            >
              <span className="td-counter-3-shape">
                <Image
                  src={item.shape}
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
              <h2 className="title">
                <span className="odometer" data-count={item.count}>
                  0
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
