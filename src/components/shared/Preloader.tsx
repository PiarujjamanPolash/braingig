"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Preloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // detects route changes

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div id="preloader" className="preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="P" className="letters-loading">B</span>
              <span data-text-preloader="A" className="letters-loading">R</span>
              <span data-text-preloader="R" className="letters-loading">A</span>
              <span data-text-preloader="O" className="letters-loading">I</span>
              <span data-text-preloader="D" className="letters-loading">N</span>
              <span data-text-preloader="Y" className="letters-loading">G</span>
              <span data-text-preloader="Y" className="letters-loading">I</span>
              <span data-text-preloader="Y" className="letters-loading">G</span>
            </div>
            <p className="text-center">Loading</p>
          </div>

          <div className="loader">
            <div className="flex w-full">
              <div className="w-1/4 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="w-1/4 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="w-1/4 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="w-1/4 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && children}
    </>
  );
};

export default Preloader;
