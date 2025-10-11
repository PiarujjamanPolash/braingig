"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type SplitTextAnimProps = {
  textRef: React.RefObject<HTMLElement | null>;
  direction?: "right" | "left";
};

const SplitTextAnimation: React.FC<SplitTextAnimProps> = ({ textRef, direction = "right" }) => {
  useEffect(() => {
    if (!textRef?.current) return;

    const ctx = gsap.context(() => {
      const el = textRef.current!;
      // Split text into lines, words, and chars
      const split = new SplitText(el, {
        type: "lines,words,chars",
        linesClass: "td-split-line",
      });

      gsap.set(el, { perspective: 400 });

      // Set initial state
      const xOffset = direction === "right" ? 50 : -50;
      gsap.set(split.chars, {
        opacity: 0,
        x: xOffset,
        ease: "back.out(1.7)",
      });

      // Animate on scroll
      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        y: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
      });

      // Cleanup
      return () => split.revert();
    }, textRef);

    return () => ctx.revert();
  }, [textRef, direction]);

  return null;
};

export default SplitTextAnimation;
