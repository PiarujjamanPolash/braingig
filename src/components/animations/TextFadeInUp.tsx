"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextFadeInUpProps = {
  textRef: React.RefObject<HTMLElement | null>;
};

const TextFadeInUp: React.FC<TextFadeInUpProps> = ({ textRef }) => {
  useEffect(() => {
    if (!textRef?.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, textRef);

    return () => ctx.revert(); 
  }, [textRef]);

  return null; 
};

export default TextFadeInUp;
