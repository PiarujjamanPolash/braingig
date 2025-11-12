"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesPinAnimation: React.FC = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 991px)", () => {
      const ctx = gsap.context(() => {
        const projectPanels = document.querySelectorAll(".td-service-pin-item-panel");

        mm.add("(min-width: 991px)", () => {
            const ctx = gsap.context(() => {
                const projectPanels = gsap.utils.toArray<HTMLElement>(".td-service-pin-item-panel");

                projectPanels.forEach((section, i) => {
                    const sectionHeight = section.offsetHeight;
                    const isLast = i === projectPanels.length - 1;

                    gsap.to(section, {
                        scrollTrigger: {
                            trigger: section,
                            start: "top top+=200",
                            end: () => {
                                return `+=${(sectionHeight * (3 - i)) - (i * 130)}`;
                            },
                            pin: true,
                            pinSpacing: isLast,
                            scrub: true,
                            markers: false,
                        },
                    });
                });
            });

            return () => ctx.revert();
        });
      });

      const images = document.querySelectorAll(".td-service-pin-thumb img");
      if (images.length === 0) {
        ScrollTrigger.refresh();
      } else {
        let loaded = 0;
        images.forEach((img) => {
          if ((img as HTMLImageElement).complete) {
            loaded++;
            if (loaded === images.length) ScrollTrigger.refresh();
          } else {
            img.addEventListener("load", () => {
              loaded++;
              if (loaded === images.length) ScrollTrigger.refresh();
            });
          }
        });
      }

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return null;
};

export default ServicesPinAnimation;
