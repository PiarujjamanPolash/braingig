"use client";

import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";

interface Section {
  title: string;
  items: string[];
}

interface PricingItem {
  package: string;
  description?: string;
  price: string;
  duration?: string;
  tag?: string;
  buttonClass: string;
  sections: Section[];
}

interface PricingCardProps {
  item: PricingItem;
  idx: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ item, idx }) => {
  const [showAddOn, setShowAddOn] = useState(false);
  const addOnSection = item.sections.find((s) => s.title === "Add-On");

  return (
    <div
      className="md:col-span-3 lg:col-span-2"
    >
      <div className="td-pricing-6-wrap mb-[30px] border rounded-lg shadow-sm flex flex-col h-full">
        {/* Top Section */}
        <div className="td-pricing-6-top relative p-4">
          <span className="package text-[26px] mb-[20px] font-semibold">
            {item.package}
          </span>
          {item.tag && (
            <span className="absolute top-4 right-4 bg-secondary text-white rounded-md px-2 py-1 text-xs font-semibold shadow-sm">
              {item.tag}
            </span>
          )}
          <h6 className="mt-5 mb-[20px] text-2xl font-medium text-secondary tracking-[-0.01em] leading-relaxed">
            {item.price}
            <span>{item.duration}</span>
          </h6>
          <Link href="/contact" className={item.buttonClass}>
            Get Started
          </Link>
        </div>

        <div className="marketing-pricing-list mt-[30px] flex-1 p-4 overflow-auto leading-loose">
          {item.sections
            .filter((s) => s.title !== "Add-On")
            .map((section, i) => (
              <div key={i} className="mb-[20px]">
                <h5 className="text-xl font-medium mb-[10px]">{section.title}</h5>
                <ul className="list-disc list-inside space-y-1">
                  {section.items.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Bottom Section - Add-On Button */}
        {addOnSection && addOnSection.items.length > 0 && (
          <div className="border-t border-slate-900/15 w-[90%] mx-auto pt-4 mt-4 p-4">
            <button
              onClick={() => setShowAddOn(!showAddOn)}
              className="flex items-center gap-2 font-semibold text-sm hover:text-primary transition-all cursor-pointer"
            >
              {showAddOn ? (
                <div className="flex justify-center items-center gap-1">
                  <FiMinus className="text-lg text-[#ff5712]" />
                  <span className="text-[#ff5712]">Hide Add-On</span>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-1">
                  <FiPlus className="text-lg text-[#ff5712]" />
                  <span className="text-[#ff5712]">Show Add-On</span>
                </div>
              )}
            </button>

            {showAddOn && (
              <ul className="list-disc list-inside mt-2 space-y-1">
                {addOnSection.items.map((addon, k) => (
                  <li key={k} className="text-gray-700">
                    {addon}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default PricingCard;
