"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FadeInLeftRight from "@/components/animations/index-3/FadeInLeftRight";

interface PortfolioItemProps {
  item: {
    id: number;
    transparent: string;
    img: string;
    tag: string;
    title: string;
    link: string;
    extraClass?: string;
  };
  direction: "left" | "right";
  delayOffset: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  item,
  direction,
  delayOffset,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={cardRef}
      className={`td-portfolio-6-thumb-wrap ${item.extraClass} mb-[40px] p-relative z-index-1`}
    >
      <h2 className="td-portfolio-6-transparent">{item.transparent}</h2>

      <div className="td-portfolio-6-thumb ml-[110px]">
        <div className="roun fix mb-[25px] relative">
          <Image
            src={item.img}
            alt={item.title}
            width={455}
            height={576}
            className=""
          />
          <Link
            href={item.link}
            className="td-portfolio-6-btn flex justify-center items-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L13 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1H13V13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="td-portfolio-6-content">
          <span className="tag">{item.tag}</span>
          <h5 className="title">
            <Link href={item.link}>{item.title}</Link>
          </h5>
        </div>
      </div>

      {/* Animation */}
      <FadeInLeftRight
        targetRef={cardRef}
        direction={direction}
        delay={delayOffset}
        duration={1}
      />
    </div>
  );
};

export default PortfolioItem;
