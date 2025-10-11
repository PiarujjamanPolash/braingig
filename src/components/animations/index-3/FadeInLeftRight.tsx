"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimateFadeInLeftProps {
  selector: string;
  direction: "left" | "right";
  delay?: number;
  duration?: number;
}

const AnimateFadeInLeft: React.FC<AnimateFadeInLeftProps> = ({
  selector,
  direction,
  delay = 0,
  duration = 1,
}) => {
  useLayoutEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(selector);

    elements.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        x: direction === "left" ? -50 : 50,
        duration,
        delay: delay + i * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });
  }, [selector, direction, delay, duration]);

  return null;
};

export default AnimateFadeInLeft;
