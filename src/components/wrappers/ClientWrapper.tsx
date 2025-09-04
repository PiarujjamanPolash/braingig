"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Footer from "../shared/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const smoothWrapperRef = useRef<HTMLDivElement | null>(null);
  const smoothContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (smoothWrapperRef.current && smoothContentRef.current) {
      const smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: smoothContentRef.current,
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      return () => {
        smoother.kill();
      };
    }
  }, []);

  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper">
      <div ref={smoothContentRef} id="smooth-content">
        {children}
      <Footer />
      </div>
    </div>
  );
};

export default ClientWrapper;
