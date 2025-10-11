"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  targetRef: React.RefObject<HTMLDivElement | null>;
  delay?: number;
  duration?: number;
}

const FadeInUp: React.FC<Props> = ({ targetRef, delay = 0.3, duration = 1 }) => {
  useLayoutEffect(() => {
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
        },
      });
    }, targetRef);

    return () => ctx.revert(); // 🔥 cleanup like your other animations
  }, [targetRef, delay, duration]);

  return null; // ⚡ no JSX rendered
};

export default FadeInUp;
