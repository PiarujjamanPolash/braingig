"use client"

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
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
        name: "Nusrat Jahan",
        role: "Junior Frontend Developer",
        img: "/images/about/nova.jpg",
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
            <div className="2xl:container 2xl:mx-auto mb-[40px] md:mb-[80px]">
                <Swiper id="team-swiper"
                    modules={[Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={true}
                    spaceBetween={30}
                    breakpoints={{
                        // 430: { slidesPerView: 1.5 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                        // 1700: { slidesPerView: 5 },
                    }}
                >
                    {teamData.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div className="w-full h-full">
                                <div className="td-team-4-wrap p-relative h-full">
                                    <div className="td-team-4-thumb h-full">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={member.img}
                                            alt={member.name}
                                        />
                                    </div>
                                    <div className="td-team-4-content text-center">
                                        <span className="td-team-4-subtitle">{member.role}</span>
                                        <h3 className="td-team-4-title">
                                            {member.name}
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
