"use client";
import { workProcessData } from "@/utils/fakeData/workProcessData";
import Image from "next/image";
import ScrollPinAnimation from "@/components/animations/ScrollPinAnimation";
import { useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const steps = [
  {
    id: "01",
    title: "Research",
    description: "Modern and unique design practically point of view",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Your first SVG path */}
        <path
          d="M32.806 40.281C32.4277 39.7188 31.5723 39.7188 31.194 40.281L24.154 50.7425C24.0057 50.9629 23.962 51.2336 24.0338 51.4869L25.8878 58.0234L24.6687 62.7124C24.5171 63.295 24.9755 63.8594 25.6 63.8594H38.4C39.0246 63.8594 39.4828 63.295 39.3313 62.7124L38.1122 58.0234L39.9661 51.4869C40.038 51.2337 39.9943 50.963 39.846 50.7425L32.806 40.281ZM26.8295 62.0132L27.6295 58.9363H36.3704L37.1704 62.0132H26.8295Z"
          fill="#1C1D1F"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Implement",
    description: "Modern and unique design practically point of view",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* Second SVG icon */}
        <circle cx="32" cy="32" r="32" fill="#1C1D1F" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Testing",
    description: "Modern and unique design practically point of view",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* Third SVG icon */}
        <rect width="64" height="64" fill="#1C1D1F" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Final Result",
    description: "Modern and unique design practically point of view",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* Fourth SVG icon */}
        <polygon points="32,0 64,64 0,64" fill="#1C1D1F" />
      </svg>
    ),
  },
];
const BraingigProcess: React.FC = () => {
    const imageRef = useRef<HTMLImageElement | null>(null);

    return (
 
    <div className="flex flex-wrap -mx-0">
      {/* Step 01 */}
      <div className="w-full sm:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
        <div className="td-service-process-item mt-30 lg:mt-120">
          <span className="icons mb-15 lg:mb-60 flex items-start justify-between">
            {/* SVG Icon */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Paste your first SVG paths here */}
            </svg>
            <span className="number">01</span>
          </span>
          <h5 className="title mb-4 lg:mb-15">Research</h5>
          <p className="para">Modern and unique design practically point of view</p>
        </div>
      </div>

      {/* Step 02 */}
      <div className="w-full sm:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
        <div className="td-service-process-item">
          <span className="icons mb-15 lg:mb-60 flex items-start justify-between">
            {/* SVG Icon */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Paste your second SVG paths here */}
            </svg>
            <span className="number">02</span>
          </span>
          <h5 className="title mb-4 lg:mb-15">Implement</h5>
          <p className="para">Modern and unique design practically point of view</p>
        </div>
      </div>

      {/* Step 03 */}
      <div className="w-full sm:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
        <div className="td-service-process-item mt-30 lg:mt-120">
          <span className="icons mb-15 lg:mb-60 flex items-start justify-between">
            {/* SVG Icon */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Paste your third SVG paths here */}
            </svg>
            <span className="number">03</span>
          </span>
          <h5 className="title mb-4 lg:mb-15">Testing</h5>
          <p className="para">Modern and unique design practically point of view</p>
        </div>
      </div>

      {/* Step 04 */}
      <div className="w-full sm:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
        <div className="td-service-process-item">
          <span className="icons mb-15 lg:mb-60 flex items-start justify-between">
            {/* SVG Icon */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Paste your fourth SVG paths here */}
            </svg>
            <span className="number">04</span>
          </span>
          <h5 className="title mb-4 lg:mb-15">Final result</h5>
          <p className="para">Modern and unique design practically point of view</p>
        </div>
      </div>
    </div>

    );
};

export default BraingigProcess;
