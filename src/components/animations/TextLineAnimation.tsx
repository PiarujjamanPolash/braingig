"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TextLineAnimation = () => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {});
    let splitInstance: SplitText | null = null;

    const animationTimeout = setTimeout(() => {
      ctx = gsap.context(() => {
        splitInstance = new SplitText(
          ".td-text-invert, .td-text-invert-orange, .td-text-opacity",
          {
            type: "lines",
            tag: "span",
            linesClass: "split-line",
          }
        );

        splitInstance.lines.forEach((line) => {
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

        ScrollTrigger.refresh();
      });
    }, 100);

    return () => {
      clearTimeout(animationTimeout);

      try {
        if (splitInstance) splitInstance.revert();
      } catch {}
      ctx.revert();
    };
  }, [pathname]);

  return null;
};

export default TextLineAnimation;
