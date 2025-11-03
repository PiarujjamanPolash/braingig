"use client";

import CountUp from "react-countup";

// Counter data
const counterData = [
  { count: 25, suffix: "k", text: "Happy<br> customers", delay: 0.3 },
  { count: 11, suffix: "k", text: "Projects<br> completed", delay: 0.5 },
  { count: 20, suffix: "", text: "Awards <br> achievement", delay: 0.5 },
  { count: 25, suffix: "", text: "Years of <br> experience", delay: 0.3 },
];

const Counter: React.FC = () => {
  // const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="td-counter-area pt-[155px] pb-[140px] px-5 md:px-0">
      <div className="container w-[90%] mx-auto">
        <div className="row align-items-end mb-[70px] flex flex-wrap">
          <div className="col-lg-8 w-full lg:w-8/12">
            <div className="td-service-6-title-wrap flex flex-col mb-[30px]">
              <span className="td-section-6-subtitle mb-[20px] inline-block">
                DIGITAL MARKETING POWER MOVES
              </span>
              <h2 className="td-section-6-bigtitle td-text-invert">
                DRIVING RESULTS <br /> ONE CLICK AT A TIME
              </h2>
            </div>
          </div>
          <div className="col-lg-4 w-full lg:w-4/12">
            <div className="td-service-6-title-text mr-[80px] mb-[35px]">
              <p className="td-section-6-text mb-[30px]">
                We’re a digital marketing studio that blends creativity with data-driven strategy.
              </p>
              <p className="td-section-6-text">
                Our mission? To help brands grow online with campaigns that captivate, convert, and leave a lasting impact.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 w-full">
          <div className="td-counter-6-wrap flex flex-wrap justify-between">
            {counterData.map((item, idx) => (
              <div
                key={idx}
                className={`td-counter-6-item wow ${
                  idx % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                }`}
                data-wow-delay={`${item.delay}s`}
                data-wow-duration="1s"
              >
                <h3 className="count d-flex align-items-center justify-content-center">
                    <CountUp end={item.count} duration={3} enableScrollSpy/>
                  
                  {item.suffix}
                </h3>
                <span
                  className="text"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
