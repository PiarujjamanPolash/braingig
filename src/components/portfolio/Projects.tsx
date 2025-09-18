"use client"

import { portfolioData } from "@/utils/fakeData/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";


const Projects: React.FC = () => {
    const [filter, setFilter] = useState<string>("*");
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredData =
        filter === "*"
            ? portfolioData
            : portfolioData.filter((item) =>
                item.category.some((cat) => cat.toLowerCase() === filter)
            );
    const categories = ["business", "ecommerce", "directory", "graphics"];
    useEffect(() => {
        setVisibleCount(6);
    }, [filter]);

    return (
        <div className="td-portfolio-filter-area td-portfolio-filter-three">
            <div className="container-1830 mx-auto">
                <div className="">
                    <div
                        className="col-lg-12 mb-[50px]"
                    >
                        <div className="td-portfolio-filter-btn text-center masonary-menu">
                            <button type="button"
                                className={filter === "*" ? "active" : ""}
                                onClick={() => setFilter("*")}
                            >
                                SHOW ALL
                            </button>
                            {categories.map((cat) => (
                                <button type="button"
                                    key={cat}
                                    className={filter === cat ? "active" : ""}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filteredData.slice(0, visibleCount).map((item) => (
                        <div
                            key={item.id}
                            className={`grid-item ${item.category.map(() => "prof").join(" ")}`}
                        >
                            <div className="td-portfolio-2-item relative h-full">
                                <div className="td-portfolio-2-thumb overflow-hidden h-full !rounded-none">
                                    <Image width={488} height={274} className="!w-full aspect-[3/2] object-cover !rounded-none" src={item.img} alt={item.title} />
                                </div>
                                <div className="td-portfolio-2-content">
                                    <span className="mb-2 block text-white ">{item.category.join(", ")}</span>
                                    <h3 className="!text-white font-semibold">
                                        <Link href={item.link} className="title" target="_blank" rel="noopener noreferrer">
                                            {item.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < filteredData.length && (
                    <div className="w-full">
                        <div className="flex justify-center mt-12">
                            <div className="td-btn-group">
                                <Link className="td-btn-circle" href="">
                                    <FaArrowRight />
                                </Link>
                                <button type="button" onClick={() => setVisibleCount(visibleCount + 10)} className="td-btn-2 td-btn-primary cursor-pointer">
                                    SEE MORE PROJECT
                                </button>
                                <Link className="td-btn-circle" href="">
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
