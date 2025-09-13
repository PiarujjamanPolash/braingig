'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  selector?: string;          // elements to animate inside the scope
  rootRef?: React.RefObject<HTMLElement>; // optional external scope
  once?: boolean;             // run only first time element enters
};

const AnimateFadeInLeft = ({ selector = '.fade-in-left', rootRef, once = false }: Props) => {
  const internalScope = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // Prefer external scope when provided; else fall back to internal wrapper
    const scopeEl = (rootRef?.current ?? internalScope.current) as Element | null;
    if (!scopeEl) return;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(selector);

      els.forEach((el) => {
        gsap.fromTo(
          el,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom center',
              once, // if true, auto-kills after first play
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Ensure measurements are correct after route/image/font changes
      requestAnimationFrame(() => {
        try {
          ScrollTrigger.refresh();
        } catch {}
      });
    }, scopeEl);

    // Cleanly remove ONLY the animations/triggers created in this context
    return () => ctx.revert();
  }, [selector, rootRef, once]);

  // If no external rootRef supplied, render an invisible wrapper to scope to
  if (!rootRef) return <div ref={internalScope} style={{ display: 'contents' }} />;
  return null;
};

export default AnimateFadeInLeft;
