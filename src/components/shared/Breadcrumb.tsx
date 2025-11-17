"use client";
import React, { useRef } from "react";
import AnimateBreadcrumb from "@/components/animations/AnimateBreadcrumb";


type BreadcrumbProps = {
  subtitle?: string;
  title: React.ReactNode;
  description?: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  subtitle,
  title,
  description,
}) => {
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="pt-[100px] lg:pt-[150px] mb-[40px] lg:mb-15">
      <AnimateBreadcrumb
        subtitleRef={subtitleRef as React.RefObject<HTMLElement>}
        titleRef={titleRef as React.RefObject<HTMLElement>}
        paraRef={paraRef as React.RefObject<HTMLElement>}
      />
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-9/12">
            <div className="td-breadcrumb-wrap flex flex-col items-center md:items-start">
              {subtitle && (
                <span
                  ref={subtitleRef}
                  className="text-lg text-secondary font-medium inline-block mb-2 lg:mb-[10px] text-center md:text-start"
                >
                  {subtitle}
                </span>
              )}

              <h2
                ref={titleRef}
                className={`text-6xl lg:text-[80px] w-full lg:w-[60%] text-primary mb-5 text-center md:text-start`}
              >
                {title}
              </h2>

              {description && (
                <p ref={paraRef} className="text text-base lg:text-lg font-medium text-center md:text-start">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
