"use client"

import Image from "next/image";
import Link from "next/link";
import FadeInLeftRight from "@/components/animations/index-3/FadeInLeftRight";
import PortfolioItem from "./PortfolioItem";

const portfolioItems = [
    {
        id: 1,
        transparent: "01",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        direction: "left",
        extraClass: "mt-[90px] mr-[80px]",
    },
    {
        id: 2,
        transparent: "02",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        direction: "right",
        extraClass: "spacing ml-[80px]",
    },
    {
        id: 3,
        transparent: "03",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        direction: "left",
        extraClass: "item-3",
    },
    {
        id: 4,
        transparent: "04",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        direction: "right",
        extraClass: "item-4",
    },
    {
        id: 5,
        transparent: "05",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        direction: "left",
        extraClass: "item-5 mr-[px]",
    },
];
const Portfolio: React.FC = () => {

    return (
        <div className="td-portfolio-area pt-[150px] pb-[115px] px-5 lg:px-0">
            <div className="container w-[90%] mx-auto">
                <div className="grid gride-cols-1 lg:grid-cols-12">
                    {/* Section Header */}
                    <div className="col-span-4">
                        <div className="td-portfolio-6-subtitle mb-[20px]">
                            <span className="td-section-6-subtitle">WHO WE ARE</span>
                        </div>
                    </div>
                    <div className="col-span-8">
                        <div className="td-portfolio-6-title-wrap mb-[50px]">
                            <h2 className="td-section-6-bigtitle td-text-invert">
                                WE’VE DONE PERFECT WORKS
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Portfolio Items */}
                    {portfolioItems.map((item,index) => (
                        <div key={item.id} className="col-span-6">
                            <PortfolioItem
                                item={item}
                                direction={item.direction as "left" | "right"}
                                delayOffset={index * 0.2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>);
};

export default Portfolio;
