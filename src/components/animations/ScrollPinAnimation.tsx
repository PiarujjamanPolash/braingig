"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollPinAnimationProps = {
  children: React.ReactNode;
};

const ScrollPinAnimation: React.FC<ScrollPinAnimationProps> = ({ children }) => {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!pinRef.current) return;

    let ctx: gsap.Context;
    let matchMediaInstance: gsap.MatchMedia;

    const timeoutId = setTimeout(() => {
      ctx = gsap.context(() => {
        matchMediaInstance = gsap.matchMedia();

        matchMediaInstance.add("(min-width: 1024px)", () => {
          ScrollTrigger.create({
            trigger: pinRef.current,
            pin: true,
            start: "top top",
            end: "+=280",
            markers: false,
          });
        });

        ScrollTrigger.refresh();
      }, pinRef);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (ctx) {
        ctx.revert();
      }
      if (matchMediaInstance) {
        matchMediaInstance.revert();
      }
    };
  }, [pathname]);

  return <div ref={pinRef}>{children}</div>;
};

export default ScrollPinAnimation;