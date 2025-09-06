"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaAngleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaXmark, FaYoutube } from "react-icons/fa6";
import { menuList } from "@/utils/fakeData/menuList";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
    const pathname = usePathname();

    const mainMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuOuterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mainMenuRef.current && mobileMenuOuterRef.current) {
            // Clone the main menu into mobile menu
            mobileMenuOuterRef.current.innerHTML = mainMenuRef.current.innerHTML;
        }
        const hasChildresElements = document.querySelectorAll('.menu-item-has-children');
        hasChildresElements.forEach(el => {
            el.insertAdjacentHTML('beforeend', '<div class="dropdown-btn"><span class="plus-line"></span></div>');
        });

        function slideToggle(element: HTMLElement, duration = 300) {
            if (!element) return;

            const computedStyle = window.getComputedStyle(element);
            const display = computedStyle.height;

            // Show the element if hidden
            if (display === "0px") {
                element.style.removeProperty('display');
                const height = element.scrollHeight + "px";
                element.style.height = "0";
                element.style.overflow = "hidden";
                element.style.transition = `height ${duration}ms`;

                requestAnimationFrame(() => {
                    element.style.height = height;
                });

                setTimeout(() => {
                    element.style.height = height;
                    element.style.removeProperty('overflow');
                }, duration);
            }
            // Hide the element if visible
            else {
                element.style.height = element.scrollHeight + "px";
                element.style.overflow = "hidden";
                element.style.transition = `height ${duration}ms`;

                setTimeout(() => {
                    element.style.height = "0px";
                    element.style.removeProperty('overflow');
                }, duration);
            }
        }

        document.querySelectorAll('.dropdown-btn').forEach((btn) => {
            btn.addEventListener('click', (event) => {
                const target = event.currentTarget as HTMLElement;
                target.classList.toggle('open');

                const prevUl = target.previousElementSibling as HTMLElement | null;
                if (prevUl && prevUl.tagName === 'UL') {
                    slideToggle(prevUl, 300);
                }
            });
        });
    }, []);
    useEffect(() => {
        const body = document.querySelector("body");
        const toggler = document.querySelector(".mobile-nav-toggler");
        const closeBtn = document.querySelector(".tdmobile__menu .close-btn");
        const backdrop = document.querySelector(".tdmobile__menu-backdrop");

        const openMenu = () => body?.classList.add("mobile-menu-visible");
        const closeMenu = () => body?.classList.remove("mobile-menu-visible");

        toggler?.addEventListener("click", openMenu);
        closeBtn?.addEventListener("click", closeMenu);
        backdrop?.addEventListener("click", closeMenu);

        return () => {
            toggler?.removeEventListener("click", openMenu);
            closeBtn?.removeEventListener("click", closeMenu);
            backdrop?.removeEventListener("click", closeMenu);
        };
    }, []);



    return (
        <div className="px-[15px]">
            {/* Search Popup */}
            <div className="search__popup">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="search__wrapper">
                                {/* Close Button */}
                                <div className="search__close">
                                    <button type="button" className="search-close-btn">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17 1L1 17"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M1 1L17 17"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Search Form */}
                                <div className="search__form">
                                    <form action="#">
                                        <div className="search__input relative">
                                            <input
                                                className="search-input-field"
                                                type="text"
                                                placeholder="Type keywords here"
                                            />
                                            <span className="search-focus-border"></span>
                                            <button
                                                type="submit"
                                                className="absolute right-3 top-1/2 -translate-y-1/2"
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M19.0002 19.0002L17.2002 17.2002"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search-popup-overlay"></div>

            {/* Header */}
            <header className="">
                <div
                    id="header-sticky"
                    className="td-header__area td-header-spacing td-header-2-wrapper td-header-3-wrapper td-header-5-wrapper p-relative z-index-1"
                >
                    <div className="container-fluid container-1750 mx-auto">
                        <div className="flex flex-wrap items-center">
                            {/* Logo */}
                            <div className="xl:w-2/12 w-4/12">
                                <div className="logo">
                                    <Link className="logo-1" href="/">
                                        <Image
                                            width="150"
                                            height="96"
                                            src="/images/logos/logo.png"
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Menu */}
                            <div className="xl:w-8/12 hidden xl:block">
                                <div className="tdmenu__wrap tdmenu-2-wrap text-center">
                                    <nav className="tdmenu__nav">
                                        <div
                                            ref={mainMenuRef}
                                            className="tdmenu__navbar-wrap tdmenu__main-menu"
                                        >
                                            <ul className="navigation">
                                                {menuList.map((menu) => (
                                                    <li
                                                        key={menu.id}
                                                        className={`${menu.children ? "menu-item-has-children" : ""} ${menu.path === "/"
                                                                ? pathname === "/" 
                                                                    ? "active"
                                                                    : ""
                                                                : pathname.startsWith(menu.path) 
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                    >
                                                        <Link href={menu.path}>{menu.label}</Link>

                                                        {menu.children && (
                                                            <ul className="sub-menu">
                                                                {menu.children.map((child) => (
                                                                    <li key={child.id}>
                                                                        <Link href={child.path}>{child.label}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className="xl:w-2/12 w-8/12">
                                <div className="td-header-right text-right">
                                    <div className="inline-block ml-5">
                                        <div className="tdmenu-offcanvas-open-btn mobile-nav-toggler">
                                            <div className="tdmenu-offcanvas-open-bar">
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="tdmobile__menu td-menu-large">
                    <nav className="tdmobile__menu-box">
                        {/* Close Button */}
                        <div className="close-btn">
                            <FaXmark />
                        </div>

                        {/* Logo */}
                        <div className="nav-logo">
                            <Link href="index.html">
                                <Image width={110} height={30} src="/images/logos/logo.png" alt="logo" />
                            </Link>
                        </div>

                        {/* Mobile Menu (hidden on xl and up) */}
                        <div ref={mobileMenuOuterRef} className="tdmobile__menu-outer xl:hidden"></div>

                        {/* Sidebar Info */}
                        <div className="offCanvas__side-info mb-7 hidden xl:block mx-6">
                            <div className="contact-list mb-7">
                                <h4>Office Address</h4>
                                <h5 className="mt-7">Bangladesh</h5>
                                <p>
                                    4th Floor of NRB Bank Building, Station Rd, Rajshahi 6100
                                </p>

                                <h5 className="mt-5">Sheridan</h5>
                                <p>
                                    30 N Gould St, Sheridan, WY 82801, USA
                                </p>
                            </div>
                            <div className="contact-list mb-7">
                                <h4>Phone Number</h4>
                                <p>+8801701-064640</p>
                            </div>
                            <div className="contact-list mb-7">
                                <h4>Email Address</h4>
                                <p>braingigllc@gmail.com</p>
                            </div>
                        </div>

                        {/* Contact Button */}
                        <div className="mt-7 mx-6">
                            <div
                                className="td-btn td-btn-menu-black w-full inline-block td-btn-switch-animation ml-2.5"
                            >
                                <span className="flex items-center justify-center">
                                    <Link href='/contact' className="btn-text">Contact Us</Link>
                                    <Link href='/contact' className="btn-icon">
                                        <FaAngleRight />
                                    </Link>
                                    <Link href='/contact' className="btn-icon">
                                        <FaAngleRight />
                                    </Link>
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="social-links">
                            <ul className="list-wrap">
                                <li>
                                    <Link href="https://www.facebook.com/braingigllc" target="_blank">
                                        <FaFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/braingigllc/" target="_blank">
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/company/99014556" target="_blank">
                                        <FaLinkedin />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="tdmobile__menu-backdrop"></div>
            </header>
        </div>
    );
};

export default Header;
