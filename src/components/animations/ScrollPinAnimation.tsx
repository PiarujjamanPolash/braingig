import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const images = [
  "/images/working-process/thumb-1.jpg",
  "/images/working-process/thumb-2.png",
  "/images/working-process/thumb-3.png",
];

type ScrollPinAnimationProps = {
  children: React.ReactNode;
  imageRef?: React.RefObject<HTMLImageElement | null>;
};

const ScrollPinAnimation: React.FC<ScrollPinAnimationProps> = ({ children, imageRef }) => {
  const pinRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!pinRef.current) return;

    let ctx: gsap.Context;
    let matchMediaInstance: gsap.MatchMedia;

    ctx = gsap.context(() => {
      matchMediaInstance = gsap.matchMedia();

      matchMediaInstance.add("(min-width: 1024px)", () => {
        // pin the div
        ScrollTrigger.create({
          trigger: pinRef.current,
          pin: true,
          start: "top top",
          end: "+=280",
          markers: false,
        });

        // swap images on scroll
        if (imageRef?.current) {
          ScrollTrigger.create({
            trigger: pinRef.current,
            start: "top top",
            end: "+=280",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const index = Math.floor(progress * images.length);
              imageRef.current!.src = images[Math.min(index, images.length - 1)];
            },
            // onUpdate: (self) => {
            //   const progress = self.progress;
            //   const index = Math.floor(progress * images.length);

            //   if (!imageRef.current) return;

            //   // Only change if the index changed
            //   if (imageRef.current.dataset.currentIndex !== index.toString()) {
            //     imageRef.current.dataset.currentIndex = index.toString();

            //     // Smooth fade transition
            //     gsap.to(imageRef.current, {
            //       opacity: 0,
            //       duration: 0.2,
            //       onComplete: () => {
            //         imageRef.current!.src = images[Math.min(index, images.length - 1)];
            //         gsap.to(imageRef.current, { opacity: 1, duration: 0.2 });
            //       },
            //     });
            //   }
            // },
          });
        }
      });

      ScrollTrigger.refresh();
    }, pinRef);

    return () => {
      if (ctx) ctx.revert();
      if (matchMediaInstance) matchMediaInstance.revert();
    };
  }, [imageRef]);

  return <div ref={pinRef}>{children}</div>;
};

export default ScrollPinAnimation;
