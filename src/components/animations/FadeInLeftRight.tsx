"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInLeftRightProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
  direction: "left" | "right";
  delay?: number;
  duration?: number;
}

const FadeInLeftRight: React.FC<FadeInLeftRightProps> = ({
  targetRef,
  direction,
  delay = 0,
  duration = 1,
}) => {
  useEffect(() => {
    if (!targetRef.current) return;

    gsap.from(targetRef.current, {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top 80%",
      },
    });
  }, [targetRef, direction, delay, duration]);

  return null;
};

export default FadeInLeftRight;