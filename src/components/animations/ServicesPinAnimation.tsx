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
              markers: false,
            },
          });
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
