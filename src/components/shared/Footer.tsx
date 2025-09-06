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
      <div className="td-footer-area pt-[80px] md:pt-[110px] pb-[15px] td-footer-3-bg">
        <div className="container w-[90%] mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 px-4 mb-[30px]">
              <TextFadeInUp textRef={textRef} />
              <div ref={textRef} className="td-footer-3-widget footer-anim">
                <h2 className="td-footer-3-bigtitle text-center lg:text-start">
                  We Build Websites<br /> that <span>Works!</span>
                </h2>
              </div>
            </div>

            {/* Middle Section */}
            <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-[30px] flex justify-center lg:justify-start">
              <div className="td-footer-3-widget text-center md:text-start">
                <h4 className="td-footer-3-title mb-[15px]">Our Headquarter</h4>
                <Link className="links mb-5 md:mb-[40px] inline-block" href="https://maps.app.goo.gl/gEGMdJo73A6GjNCS9" target="_blank">
                  4th Floor of NRB Bank Building<br />
                  Station Rd, Rajshahi 6100, Bangladesh
                </Link>
                <div className="td-footer-3-social flex space-x-4 flex justify-center md:justify-start">
                  <Link href="https://www.facebook.com/braingigllc" target="_blank"><FaFacebookF /></Link>
                  <Link href="https://www.linkedin.com/company/99014556" target="_blank"><FaLinkedinIn /></Link>
                  <Link href="https://www.instagram.com/braingigllc/" target="_blank"><FaInstagram /></Link>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-[30px] flex justify-center lg:justify-start mt-7 md:mt-0">
              <div className="td-footer-3-widget text-center md:text-end lg:text-start">
                <h4 className="td-footer-3-title mb-[15px]">Say hello!</h4>
                <Link className="links links-3 block mb-[5px]" href="mailto:braingigllc@gmail.com" target="_blank">
                  braingigllc@gmail.com
                </Link>
                <Link className="links-2" href="https://wa.me/+8801701064640" target="_blank">
                  +8801701-064640
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Title */}
        <div className="container-fluid">
          <div className="flex justify-center">
            <div className="w-full lg:w-12/12">
              <div className="text-center pt-[20px]">
                <h2 className="td-footer-3-middle-title">BrainGig LLC</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="container w-[90%] mx-auto">
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
              <div className="td-footer-3-copyright mb-[30px] text-center lg:text-right">
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
