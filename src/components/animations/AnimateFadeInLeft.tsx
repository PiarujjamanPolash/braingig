"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimateFadeInLeftProps = {
  children: React.ReactNode;
};

const AnimateFadeInLeft: React.FC<AnimateFadeInLeftProps> = ({ children }) => {
  const animRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!animRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        animRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: animRef.current,
            start: "top 85%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, animRef);

    return () => ctx.revert();
  }, []);

  return <div ref={animRef}>{children}</div>;
};

export default AnimateFadeInLeft;
