"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  targetRef: React.RefObject<HTMLDivElement | null>;
  delay?: number;
  duration?: number;
}

const FadeInUp: React.FC<Props> = ({ targetRef, delay = 0.3, duration = 1 }) => {
  useEffect(() => {
    if (!targetRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(targetRef.current, {
        opacity: 0,
        y: 50,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [targetRef, delay, duration]);

  return null;
};

export default FadeInUp;