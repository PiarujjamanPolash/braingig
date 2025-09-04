"use client"; 

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TextLineAnimation = () => {
  useLayoutEffect(() => {
    const split = new SplitText(".td-text-invert, .td-text-opacity", {
      type: "lines",
    });

    split.lines.forEach((line) => {
      gsap.fromTo(
        line,
        { backgroundPositionX: "100%" },
        {
          backgroundPositionX: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: line,
            scrub: 1,
            start: "top 85%",
            end: "bottom center",
          },
        }
      );
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null; 
};

export default TextLineAnimation;
