"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealLeftProps = {
  children: React.ReactNode;
};

const ScrollRevealLeft: React.FC<ScrollRevealLeftProps> = ({ children }) => {
  const animRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!animRef.current) return;

    const timeoutId = setTimeout(() => {
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
        ScrollTrigger.refresh();
      }, animRef);
      
      return () => {
        ctx.revert();
      };
    }, 100); 

    return () => clearTimeout(timeoutId);

  }, [pathname]);

  return <div ref={animRef}>{children}</div>;
};

export default ScrollRevealLeft;