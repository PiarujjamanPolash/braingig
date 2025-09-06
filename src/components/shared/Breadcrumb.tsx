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
    <div className="pt-[150px] lg:pt-[215px] mb-[40px] lg:mb-[75px]">
      <AnimateBreadcrumb
        subtitleRef={subtitleRef as React.RefObject<HTMLElement>}
        titleRef={titleRef as React.RefObject<HTMLElement>}
        paraRef={paraRef as React.RefObject<HTMLElement>}
      />
      <div className="container w-[90%] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-9/12">
            <div className="td-breadcrumb-wrap">
              {subtitle && (
                <span
                  ref={subtitleRef}
                  className="subtitle inline-block mb-2 lg:mb-[10px]"
                >
                  {subtitle}
                </span>
              )}

              <h2
                ref={titleRef}
                className={`td-section-page-title mb-5`}
              >
                {title}
              </h2>

              {description && (
                <p ref={paraRef} className="text">
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
