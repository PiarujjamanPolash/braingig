"use client";

import FadeInUp from "@/components/animations/FadeInUp";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  number: string;
  delay: string;
}

const ServiceItems: React.FC<CardProps> = ({ title, number, delay }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div ref={cardRef} className="td-service-3-wrap mb-[30px]">
        <div className="td-service-3-shape">
          <svg width="88" height="12" viewBox="0 0 88 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.5 0H10.5L3 11.5H0L7.5 0Z" fill="currentColor"></path> <path d="M14.5 0H17.5L10 11.5H7L14.5 0Z" fill="currentColor"></path> <path d="M21.5 0H24.5L17 11.5H14L21.5 0Z" fill="currentColor"></path> <path d="M28.5 0H31.5L24 11.5H21L28.5 0Z" fill="currentColor"></path> <path d="M35.5 0H38.5L31 11.5H28L35.5 0Z" fill="currentColor"></path> <path d="M42.5 0H45.5L38 11.5H35L42.5 0Z" fill="currentColor"></path> <path d="M49.5 0H52.5L45 11.5H42L49.5 0Z" fill="currentColor"></path> <path d="M56.5 0H59.5L52 11.5H49L56.5 0Z" fill="currentColor"></path> <path d="M63.5 0H66.5L59 11.5H56L63.5 0Z" fill="currentColor"></path> <path d="M70.5 0H73.5L66 11.5H63L70.5 0Z" fill="currentColor"></path> <path d="M77.5 0H80.5L73 11.5H70L77.5 0Z" fill="currentColor"></path> <path d="M84.5 0H87.5L80 11.5H77L84.5 0Z" fill="currentColor"></path> </svg>
        </div>
        <div className="td-service-3-content flex justify-between items-center">
          <h3>
            <Link href="#" dangerouslySetInnerHTML={{ __html: title }} />
          </h3>
          <span>{number}</span>
        </div>
        <FadeInUp targetRef={cardRef} delay={parseFloat(delay)} duration={1} />
      </div>
    </div>
  );
};

export default ServiceItems;