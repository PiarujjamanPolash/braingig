"use client"

import Image from "next/image";
import Link from "next/link";
import FadeInLeftRight from "@/components/animations/index-3/FadeInLeftRight";

const portfolioItems = [
    {
        id: 1,
        transparent: "01",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        animation: "fade-item-left",
        extraClass: "mt-[90px] mr-[80px]",
    },
    {
        id: 2,
        transparent: "02",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        animation: "fade-item-right",
        extraClass: "spacing ml-[80px]",
    },
    {
        id: 3,
        transparent: "03",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        animation: "fade-item-left",
        extraClass: "item-3",
    },
    {
        id: 4,
        transparent: "04",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        animation: "fade-item-right",
        extraClass: "item-4",
    },
    {
        id: 5,
        transparent: "05",
        img: "/images/index-6/portfolio-1.jpg",
        tag: "Identity",
        title: "Stellar vibes",
        link: "/portfolio-details",
        animation: "fade-item-left",
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
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="col-span-6">
                            <div
                                className={`td-portfolio-6-thumb-wrap ${item.extraClass} mb-[40px] p-relative z-index-1 ${item.animation}`}
                            >
                                <h2 className="td-portfolio-6-transparent">{item.transparent}</h2>

                                <div className="td-portfolio-6-thumb ml-[110px]">
                                    <div className="roun fix mb-[25px] relative">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={455}
                                            height={576}
                                            className=""
                                        />
                                        <Link href={item.link} className="td-portfolio-6-btn flex justify-center items-center">
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 13L13 1"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M1 1H13V13"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className="td-portfolio-6-content">
                                        <span className="tag">{item.tag}</span>
                                        <h5 className="title">
                                            <Link href={item.link}>{item.title}</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <FadeInLeftRight selector=".fade-item-left" direction="left" />
        <FadeInLeftRight selector=".fade-item-right" direction="right" />
            </div>
        </div>);
};

export default Portfolio;
