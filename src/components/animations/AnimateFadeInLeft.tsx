"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimateFadeInLeft = ({ selector = ".fade-in-left" }) => {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom center",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [selector]);

  return null; 
};

export default AnimateFadeInLeft;
