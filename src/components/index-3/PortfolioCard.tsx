"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FadeInLeftRight from "../animations/index-3/FadeInLeftRight";

interface PortfolioCardProps {
    item: {
        id: string | number;
        img: string;
        title: string;
        link: string;
    };
    direction: "left" | "right";
    delayOffset: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, direction, delayOffset }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={cardRef} className="td-portfolio-3-wrap mb-[90px]">
            <div className="td-portfolio-3-thumb mb-[20px]">
                <Image
                    className="w-full"
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                />
            </div>
            <div className="td-portfolio-3-content flex justify-between items-end">
                <div className="td-portfolio-3-title">
                    <h6 className="title mb-0">
                        <Link href={item.link} className="underline-white">
                            {item.title}
                        </Link>
                    </h6>
                </div>
                <Link className="icon flex justify-center items-center" href={item.link} target="_blank">
                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M0.75293 7.49988H17.7416" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /> <path d="M11.0513 0C11.0513 4.14553 14.6064 7.5 18.9998 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /> <path d="M18.9998 7.49988C14.6064 7.49988 11.0513 10.8543 11.0513 14.9999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /> </svg>
                </Link>
            </div>

            {/* Animation Component */}
            <FadeInLeftRight targetRef={cardRef} direction={direction} delay={delayOffset} duration={1} />
        </div>
    );
};

export default PortfolioCard;
