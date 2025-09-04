"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimateTwoContentProps = {
  thumbRef?: React.RefObject<HTMLElement | null>;
  contentRef?: React.RefObject<HTMLElement | null>;
};

const AnimateTwoContent: React.FC<AnimateTwoContentProps> = ({ thumbRef, contentRef }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (thumbRef?.current) {
        gsap.from(thumbRef.current, {
          scrollTrigger: {
            trigger: thumbRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }

      if (contentRef?.current) {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, [thumbRef, contentRef]);

  return null;
};

export default AnimateTwoContent;
