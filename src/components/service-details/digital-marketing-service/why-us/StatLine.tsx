"use client";
import React from "react";
import CountUp from "react-countup";

interface StatLineProps {
  label: string;
  start?: number;
  end?: number;
  gain?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  showArrow?: boolean; // show "→"
  showGain?: boolean;  // show "(↑x)"
}

const StatLine: React.FC<StatLineProps> = ({
  label,
  start = 0,
  end = 0,
  gain,
  suffix = "",
  prefix = "",
  decimals = 0,
  showArrow = true,
  showGain = false,
}) => {
  // Make sure CountUp never gets undefined/null
  const safeStart = typeof start === "number" && !isNaN(start) ? start : 0;
  const safeEnd = typeof end === "number" && !isNaN(end) ? end : 0;

  return (
    <div className="flex text-sm md:text-base justify-between md:justify-start lg:justify-between items-center gap-3 lg:gap-0">
      <span className="text-gray-600">{label}:</span>
      <span className="text-green-600 font-semibold">
        {showArrow && (
          <span className="text-gray-500 mr-2">
            {safeStart.toLocaleString()} →
          </span>
        )}
        {prefix}
        <CountUp
          start={0}
          end={safeEnd}
          duration={1.5}
          enableScrollSpy
          separator=","
          decimals={decimals}
        />
        {suffix}
        {showGain && (
          <span className="text-gray-500 ml-2">(↑{gain ?? 0})</span>
        )}
      </span>
    </div>
  );
};

export default StatLine;
