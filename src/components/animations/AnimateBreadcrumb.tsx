"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimateBreadcrumbProps = {
  subtitleRef?: React.RefObject<HTMLElement>;
  titleRef?: React.RefObject<HTMLElement>;
  paraRef?: React.RefObject<HTMLElement>;
};


const AnimateBreadcrumb: React.FC<AnimateBreadcrumbProps> = ({
  subtitleRef,
  titleRef,
  paraRef,
}) => {
  useEffect(() => {
    const elements: { el: HTMLElement; delay: number }[] = [];

    if (subtitleRef?.current) elements.push({ el: subtitleRef.current!, delay: 0.2 });
    if (titleRef?.current) elements.push({ el: titleRef.current!, delay: 0.4 });
    if (paraRef?.current) elements.push({ el: paraRef.current!, delay: 0.6 });

    const anims = elements.map(({ el, delay }) =>
      gsap.fromTo(
        el,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom center",
            scrub: false,
          },
        }
      )
    );

    return () => {
      anims.forEach((anim) => anim.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [subtitleRef, titleRef, paraRef]);

  return null;
};

export default AnimateBreadcrumb;
