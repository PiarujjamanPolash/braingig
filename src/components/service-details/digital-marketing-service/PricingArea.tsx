"use client"

import { pricingData } from "@/utils/fakeData/pricingData";
import Link from "next/link";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
// const pricingData = [
//   {
//     package: "Full-package",
//     description: "Tailored service for large enterprises",
//     price: "$ 7,500/",
//     duration: "mo",
//     buttonClass: "price-btn",
//     features: [
//       "API integrations and automation",
//       "Dedicated account manager",
//       "UX/UI design for digital products",
//       "Ongoing support & maintenance",
//     ],
//   },
//   {
//     package: "Full-package",
//     description: "Tailored service for large enterprises",
//     price: "$ 8,500/",
//     duration: "mo",
//     buttonClass: "price-btn greens !text-black",
//     features: [
//       "API integrations and automation",
//       "Dedicated account manager",
//       "UX/UI design for digital products",
//       "Ongoing support & maintenance",
//     ],
//   },
//   {
//     package: "Full-package",
//     description: "Tailored service for large enterprises",
//     price: "$ 9,500/",
//     duration: "mo",
//     buttonClass: "price-btn",
//     features: [
//       "API integrations and automation",
//       "Dedicated account manager",
//       "UX/UI design for digital products",
//       "Ongoing support & maintenance",
//     ],
//   },
// ];
// const pricingData = [
//   {
//     package: "SEO Core Bundle",
//     description: "Perfect for small websites to establish a strong SEO foundation.",
//     price: "Starter— $240/",
//     duration: "one-time",
//     buttonClass: "price-btn",
//     sections: [
//       {
//         title: "What we do",
//         items: [
//           "Full SEO Website Audit (speed, mobile, crawl, index) + SSL/HTTPS check",
//           "Google Search Console & Google Business Profile setup (if missing)",
//           "XML sitemap & robots.txt (if missing)",
//           "On-page & technical SEO for up to 7 pages (titles, metas, headers, slugs, basic schema, internal links)",
//         ],
//       },
//       {
//         title: "What you get",
//         items: [
//           "Clean technical baseline + indexation fixed",
//           "Clear fixes to increase organic traffic",
//           "30-day next steps checklist",
//         ],
//       },
//       {
//         title: "Add-On",
//         items: ["GEO optimization — $20/page"],
//       },
//     ],
//   },
//   {
//     package: "SEO Core Bundle",
//     description: "Best for growing websites wanting more visibility and local reach.",
//     price: "Growth— $310/",
//     tag: "Most Popular",
//     duration: "one-time",
//     buttonClass: "price-btn greens !text-black",
//     sections: [
//       {
//         title: "What we do",
//         items: [
//           "Everything in Starter",
//           "On-page & technical SEO for 10–12 pages",
//           "Natural keyword inclusion + GEO optimization ×4 pages",
//           "90-day SEO action plan (SEO Audit and Optimization)",
//         ],
//       },
//       {
//         title: "What you get",
//         items: [
//           "More pages ranking + stronger UX signals",
//           "Local reach via GEO pages",
//           "Clear roadmap & priorities",
//         ],
//       },
//       {
//         title: "Add-On",
//         items: ["Extra GEO pages — $20/page"],
//       },
//     ],
//   },
//   {
//     package: "SEO Core Bundle",
//     description: "Ideal for larger sites aiming for top-tier SEO performance and scalability.",
//     price: "Pro$— 410/",
//     duration: "one-time",
//     buttonClass: "price-btn",
//     sections: [
//       {
//         title: "What we do",
//         items: [
//           "Everything in Growth",
//           "Deep checklist for 12+ priority pages (schema opportunities, speed tasks)",
//           "GEO optimization ×6 pages",
//           "Implementation guidance + QA support",
//         ],
//       },
//       {
//         title: "What you get",
//         items: [
//           "Site-wide strength & scale",
//           "Broader rich keyword coverage",
//           "Faster pages + richer snippets",
//         ],
//       },
//       {
//         title: "Add-On",
//         items: ["Extra GEO pages — $20/page"],
//       },
//     ],
//   },
// ];

const PricingArea: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("SEO");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAddOn = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const categories = [...new Set(pricingData.map((item) => item.category))];

  // ✅ Filter data based on current active tab
  const filteredData = pricingData.filter(
    (item) => item.category === activeCategory
  );

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
        <div className="flex gap-4 mb-6">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => {
        setActiveCategory(cat);
        setOpenIndex(null); // reset Add-On toggle on category change
      }}
      className={`
        relative px-4 py-2 font-semibold transition-all duration-300
        text-gray-700 hover:text-[#FF5722]
      `}
    >
      {cat}
      {/* Active underline */}
      {activeCategory === cat && (
        <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FF5722] rounded-full"></span>
      )}
    </button>
  ))}
</div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {filteredData.map((item, idx) => (
            <div
              key={idx}
              className={`md:col-span-3 lg:col-span-2 wow ${idx === 0 ? "fadeInLeft" : idx === 1 ? "fadeInUp" : "fadeInRight"
                }`}
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="td-pricing-6-wrap mb-[30px] border rounded-lg shadow-sm flex flex-col h-full">
                <div className="td-pricing-6-top relative">
                  <span className="package mb-[20px] inline-block font-semibold">
                    {item.package}
                  </span>
                  {item.tag && (
                    <span className="absolute top-4 right-4 bg-[#FF5722] text-white rounded-md px-2 py-1 text-xs font-semibold shadow-sm">
                      {item.tag}
                    </span>
                  )}
                  <h6 className="price mb-[20px]">
                    {item.price}
                    <span>{item.duration}</span>
                  </h6>
                  <Link href="/contact" className={item.buttonClass}>
                    Get Started
                  </Link>
                </div>

                <div className="td-pricing-6-list mt-[30px] flex-1">
                  {item.sections
                    .filter((s) => s.title !== "Add-On")
                    .map((section, i) => (
                      <div key={i} className="mb-[20px]">
                        <h5 className="font-semibold mb-[10px]">
                          {section.title}
                        </h5>
                        <ul className="list-disc list-inside space-y-1">
                          {section.items.map((feature, j) => (
                            <li key={j}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {/* Add-On section toggle */}
                  <div className="border-t pt-4 mt-4">
                    <button
                      onClick={() => toggleAddOn(idx)}
                      className="flex items-center gap-2 font-semibold text-sm hover:text-primary transition-all"
                    >
                      {openIndex === idx ? (
                        <>
                          <FiMinus className="text-lg" />
                          Hide Add-On
                        </>
                      ) : (
                        <>
                          <FiPlus className="text-lg" />
                          Show Add-On
                        </>
                      )}
                    </button>

                    {openIndex === idx && (
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {item.sections
                          .find((s) => s.title === "Add-On")
                          ?.items.map((addon, k) => (
                            <li key={k} className="text-gray-700">
                              {addon}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
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
