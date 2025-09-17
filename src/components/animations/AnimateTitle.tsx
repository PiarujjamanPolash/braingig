"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimateTitle: React.FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = document.querySelectorAll<HTMLElement>(".td-title-anim");

      titles.forEach((title) => {
        const split = new SplitText(title, { type: "lines, words" });
        gsap.set(title, { perspective: 300 });

        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            markers: false,
          },
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -50,
          transformOrigin: "top center -50",
          force3D: true,
          stagger: 0.2,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default AnimateTitle;