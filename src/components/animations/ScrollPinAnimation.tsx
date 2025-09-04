"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollPinAnimation = () => {
  useEffect(() => {
    let triggers: ScrollTrigger[] = [];

    const initPins = () => {
      // Kill previous triggers
      triggers.forEach((t) => t.kill());
      triggers = [];

      if (window.innerWidth >= 1024) {
        const pinSections = document.querySelectorAll(".td-scroll-pin");
        pinSections.forEach((section) => {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              pin: true,
              start: "top top",
              end: "+=280",
              markers: false,
            })
          );
        });
      }
    };

    // Run after page load
    window.addEventListener("load", initPins);
    // Run on resize
    window.addEventListener("resize", initPins);

    return () => {
      // Cleanup triggers and listeners
      triggers.forEach((t) => t.kill());
      window.removeEventListener("load", initPins);
      window.removeEventListener("resize", initPins);
    };
  }, []);

  return null;
};

export default ScrollPinAnimation;
