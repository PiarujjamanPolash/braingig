"use client"
import Link from 'next/link';
const services = [
  { title: "Custom Directory Design", number: "S/01", delay: ".3s" },
  { title: "Smart Listing Management", number: "S/02", delay: ".5s" },
  { title: "Advanced Search & Filters", number: "S/03", delay: ".7s" },
  { title: "Map & Location Tools", number: "S/04", delay: ".3s" },
  { title: "SEO & Monetization", number: "S/05", delay: ".5s" },
  { title: "Maintenance & Support", number: "S/06", delay: ".7s" },
];
const Partners: React.FC = () => {

  return (
    <div className="td-service-3-area pt-[150px] pb-[130px] grey-bg-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="xl:w-8/12">
            <div
              className="td-service-3-title-wrap ml-16 mb-20 relative wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <img
                className="td-service-3-ok"
                src="/images/index-3/services-ok.png"
                alt=""
              />
              <h2 className="td-section-3-title">
                Empowering communities <br /> through{" "}
                <span>next-gen directories</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div
                className="td-service-3-wrap mb-[30px] wow fadeInUp"
                data-wow-delay={item.delay}
                data-wow-duration="1s"
              >
                <div className="td-service-3-shape">
                  <svg width="88" height="12" viewBox="0 0 88 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0H10.5L3 11.5H0L7.5 0Z" fill="currentColor"></path>
                    <path d="M14.5 0H17.5L10 11.5H7L14.5 0Z" fill="currentColor"></path>
                    <path d="M21.5 0H24.5L17 11.5H14L21.5 0Z" fill="currentColor"></path>
                    <path d="M28.5 0H31.5L24 11.5H21L28.5 0Z" fill="currentColor"></path>
                    <path d="M35.5 0H38.5L31 11.5H28L35.5 0Z" fill="currentColor"></path>
                    <path d="M42.5 0H45.5L38 11.5H35L42.5 0Z" fill="currentColor"></path>
                    <path d="M49.5 0H52.5L45 11.5H42L49.5 0Z" fill="currentColor"></path>
                    <path d="M56.5 0H59.5L52 11.5H49L56.5 0Z" fill="currentColor"></path>
                    <path d="M63.5 0H66.5L59 11.5H56L63.5 0Z" fill="currentColor"></path>
                    <path d="M70.5 0H73.5L66 11.5H63L70.5 0Z" fill="currentColor"></path>
                    <path d="M77.5 0H80.5L73 11.5H70L77.5 0Z" fill="currentColor"></path>
                    <path d="M84.5 0H87.5L80 11.5H77L84.5 0Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="td-service-3-content flex justify-between items-center">
                  <h3>
                    <Link
                      href=""
                    >{item.title}</Link>
                  </h3>
                  <span>{item.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
