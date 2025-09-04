"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimateFadeInLeft = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll(".scroll-reveal-left");

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom center",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert(); 
  }, []);

  return null; 
};

export default AnimateFadeInLeft;
