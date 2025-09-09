"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollPinAnimation = () => {
  useEffect(() => {
    let ctx: gsap.Context;

    const initPins = () => {
      // Kill previous context before re-initializing
      ctx?.revert();

      if (window.innerWidth >= 1024) {
        ctx = gsap.context(() => {
          const pinSections = document.querySelectorAll(".td-scroll-pin");
          pinSections.forEach((section) => {
            ScrollTrigger.create({
              trigger: section,
              pin: true,
              start: "top top",
              end: "+=280",
              markers: false,
            });
          });
        });
      }
    };

    initPins();
    window.addEventListener("resize", initPins);

    return () => {
      ctx?.revert(); // cleanup on unmount
      window.removeEventListener("resize", initPins);
    };
  }, []);

  return null;
};

export default ScrollPinAnimation;
