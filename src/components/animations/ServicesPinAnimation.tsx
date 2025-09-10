"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesPinAnimation: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();
    let ctx: gsap.Context | null = null;

    mm.add("(min-width: 991px)", () => {
      const initAnimation = () => {
        ctx = gsap.context(() => {
          const projectPanels = document.querySelectorAll(".td-service-pin-item-panel");

          projectPanels.forEach((section) => {
            gsap.to(section, {
              scrollTrigger: {
                trigger: section,
                pin: section,
                scrub: 1,
                start: "top top",
                end: "bottom 100%",
                endTrigger: ".td-service-pin-items",
                pinSpacing: false,
                pinType: "transform",
                markers: false,
              },
            });
          });

          // Refresh ScrollTrigger to ensure correct positions
          ScrollTrigger.refresh();
        });
      };

      // Wait for all images to load
      const images = document.querySelectorAll(".td-service-pin-thumb img");
      let loadedCount = 0;

      if (images.length === 0) {
        requestAnimationFrame(initAnimation);
      } else {
        images.forEach((img) => {
          const image = img as HTMLImageElement;
          if (image.complete) {
            loadedCount++;
            if (loadedCount === images.length) {
              requestAnimationFrame(initAnimation);
            }
          } else {
            image.addEventListener("load", () => {
              loadedCount++;
              if (loadedCount === images.length) {
                requestAnimationFrame(initAnimation);
              }
            });
          }
        });
      }

      return () => ctx?.revert();
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [pathname]);

  return null;
};

export default ServicesPinAnimation;
