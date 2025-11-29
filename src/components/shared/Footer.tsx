"use client"

import Link from "next/link";
import { useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TextFadeInUp from "../animations/TextFadeInUp";
gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <footer className="">
      <div className="td-footer-area pt-[80px] md:pt-[110px] pb-[15px] bg-accent">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 px-4 mb-[30px]">
              <div className="td-footer-3-widget">
                <h2 ref={textRef} className="text-[40px] lg:text-[60px] tracking-[-0.03em] text-primary text-center lg:text-start">
                  Our Team Work, Makes 
                  <br /> Your <span className="italic font-base">Dream Work!</span>
                </h2>
              </div>
              <TextFadeInUp textRef={textRef} />
            </div>

            {/* Middle Section */}
            <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-[30px] flex justify-center lg:justify-start text-primary">
              <div className="td-footer-3-widget text-center md:text-start">
                <h4 className="td-footer-3-title font-medium text-[24px] tracking-[-0.02em] mb-[15px]">Our Headquarter</h4>
                <Link className="font-normal text-[17px] mb-5 md:mb-[40px] inline-block" href="https://maps.app.goo.gl/gEGMdJo73A6GjNCS9" target="_blank">
                  4th Floor of NRB Bank Building<br />
                  Station Rd, Rajshahi 6100, Bangladesh
                </Link>
                <div className="td-footer-3-social flex space-x-4 flex justify-center md:justify-start">
                  <Link href="https://www.facebook.com/braingigllc" aria-label="Facebook" target="_blank"><FaFacebookF aria-hidden="true" /></Link>
                  <Link href="https://www.linkedin.com/company/99014556" aria-label="LinkedIn" target="_blank"><FaLinkedinIn aria-hidden="true" /></Link>
                  <Link href="https://www.instagram.com/braingigllc/" aria-label="Instagram" target="_blank"><FaInstagram aria-hidden="true" /></Link>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-[30px] flex justify-center lg:justify-start mt-7 md:mt-0 text-primary">
              <div className="td-footer-3-widget text-center md:text-end lg:text-start">
                <h4 className="td-footer-3-title font-medium text-[24px] tracking-[-0.02em] mb-[15px]">Say hello!</h4>
                <Link className="links links-3 text-[rgba(17,34,78,0.65)] text-[17px] block mb-[5px]" href="mailto:braingigllc@gmail.com" target="_blank">
                  braingigllc@gmail.com
                </Link>
                <Link className="font-semibold text-[20px] tracking-[-0.02em]" href="https://wa.me/+8801701064640" target="_blank">
                  +1 (307) 999-4766
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Title */}
        <div className="">
          <div className="flex justify-center">
            <div className="w-full lg:w-12/12">
              <div className="text-center pt-[20px]">
                <h2 className="td-footer-3-middle-title">BrainGig LLC</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="container">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-2/3 px-1">
              <div className="td-footer-3-menu mb-[30px] flex justify-center lg:justify-start">
                <ul className="flex flex-wrap justify-center gap-4">
                  <li><Link href="/portfolio">Our Portfolio</Link></li>
                  <li><Link href="/services">Our Services</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="td-footer-3-copyright text-[17px] font-medium text-primary mb-[30px] text-center lg:text-right">
                <p>
                  © 2025 <Link href="/">BrainGig LLC</Link> All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
