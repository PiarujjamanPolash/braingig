"use client"

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
export type TeamType = {
    id: number;
    name: string;
    role: string;
    img: string;
};
export const teamData: TeamType[] = [
    {
        id: 1,
        name: "PITTERSON",
        role: "Developer",
        img: "/images/about/member_1.jpg",
    },
    {
        id: 2,
        name: "JOTIN",
        role: "Developer",
        img: "/images/about/member_1.jpg",
    },
    {
        id: 3,
        name: "DANDU",
        role: "Developer",
        img: "/images/about/member_1.jpg",


    },
    {
        id: 4,
        name: "SAMIR",
        role: "Developer",
        img: "/images/about/member_1.jpg",
    },
    {
        id: 4,
        name: "SAMIR",
        role: "Developer",
        img: "/images/about/member_1.jpg",
    },
    {
        id: 4,
        name: "SAMIR",
        role: "Developer",
        img: "/images/about/member_1.jpg",
    },
];
const Team: React.FC = () => {

    return (
        <div className="td-team-area td-team-about-wrap">
            <div className="container-fluid mx-auto">
                <Swiper
                    modules={[]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {teamData.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div className="w-full mb-[40px] md:mb-[80px]">
                                <div className="td-team-4-wrap p-relative">
                                    <div className="td-team-4-thumb">
                                        <Image
                                            width={350}
                                            height={445}
                                            className="w-full h-[445px] object-cover"
                                            src={member.img}
                                            alt={member.name}
                                        />
                                    </div>
                                    <div className="td-team-4-content text-center">
                                        <span className="td-team-4-subtitle">{member.role}</span>
                                        <h3 className="td-team-4-title">
                                            <Link href="team-details.html">{member.name}</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Team;
