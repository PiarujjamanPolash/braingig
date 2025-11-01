"use client"

import Link from "next/link";
const pricingData = [
  {
    package: "Full-package",
    description: "Tailored service for large enterprises",
    price: "$ 7,500/",
    duration: "mo",
    buttonClass: "price-btn",
    features: [
      "API integrations and automation",
      "Dedicated account manager",
      "UX/UI design for digital products",
      "Ongoing support & maintenance",
    ],
  },
  {
    package: "Full-package",
    description: "Tailored service for large enterprises",
    price: "$ 8,500/",
    duration: "mo",
    buttonClass: "price-btn greens !text-black",
    features: [
      "API integrations and automation",
      "Dedicated account manager",
      "UX/UI design for digital products",
      "Ongoing support & maintenance",
    ],
  },
  {
    package: "Full-package",
    description: "Tailored service for large enterprises",
    price: "$ 9,500/",
    duration: "mo",
    buttonClass: "price-btn",
    features: [
      "API integrations and automation",
      "Dedicated account manager",
      "UX/UI design for digital products",
      "Ongoing support & maintenance",
    ],
  },
];
const PricingArea: React.FC = () => {

    return (
       <div className="td-pricing-area pt-[155px] pb-[130px] px-5 md:px-0">
      <div className="container w-[90%] mx-auto">
        <div className="flex justify-center">
            <div className="td-pricing-6-title-wrap flex flex-col items-center text-center mb-[65px]">
              <span className="td-section-6-subtitle inline-block mb-[15px]">
                OUR SUITABLE PRICING PLANS
              </span>
              <h2 className="td-section-6-bigtitle td-text-invert">
                CUSTOMIZABLE PRICING OPTIONS
              </h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {pricingData.map((item, idx) => (
            <div
              key={idx}
              className={`md:col-span-3 lg:col-span-2 wow ${
                idx === 0
                  ? "fadeInLeft"
                  : idx === 1
                  ? "fadeInUp"
                  : "fadeInRight"
              }`}
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="td-pricing-6-wrap mb-[30px]">
                <div className="td-pricing-6-top">
                  <span className="package mb-[35px] inline-block">{item.package}</span>
                  <p className="para mb-[55px]">{item.description}</p>
                  <h6 className="price mb-[30px]">
                    {item.price}
                    <span>{item.duration}</span>
                  </h6>
                  <Link href="/contact" className={item.buttonClass}>
                    Get Started
                  </Link>
                </div>
                <div className="td-pricing-6-list">
                  <ul>
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        );
};

export default PricingArea;
