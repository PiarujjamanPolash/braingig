"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesPinAnimation: React.FC = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Only for large screens
    mm.add("(min-width: 991px)", () => {
      // Use GSAP context to scope selectors
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
              pinSpacing: false, // prevents extra space
              markers: false,
            },
          });
        });
      });

      return () => ctx.revert(); // cleanup
    });

    return () => mm.revert(); // cleanup matchMedia
  }, []);

  return null; // This component doesn't render anything
};

export default ServicesPinAnimation;
