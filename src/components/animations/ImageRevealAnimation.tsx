"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  imageWrapperRef: React.RefObject<HTMLDivElement | null>;
}

const ImageRevealAnimation: React.FC<Props> = ({ imageWrapperRef }) => {
  useLayoutEffect(() => {
    if (!imageWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const imgReveal = imageWrapperRef.current!;
      const image = imgReveal.querySelector("img");
      if (!image) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imgReveal,
          start: "top 70%",
        },
      });

      tl.set(imgReveal, { autoAlpha: 1 });
      tl.from(imgReveal, {
        duration: 1.5,
        xPercent: -100,
        ease: "Power2.out",
      });
      tl.from(
        image,
        {
          duration: 1.5,
          xPercent: 100,
          scale: 1.5,
          ease: "Power2.out",
        },
        "-=1.5"
      );
    }, imageWrapperRef);

    return () => ctx.revert();
  }, [imageWrapperRef]);

  return null;
};

export default ImageRevealAnimation;