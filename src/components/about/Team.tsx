"use client"
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
        name: "Piarujjaman Polash",
        role: "Founder & CEO",
        img: "/images/about/polash.jpeg",
    },
    {
        id: 2,
        name: "Fahad Al Faisal",
        role: "Co-Founder & COO",
        img: "/images/about/fahad.jpeg",
    },
    {
        id: 3,
        name: "Sadman Sakib",
        role: "SEO & Marketing",
        img: "/images/about/Sadman.jpeg",


    },
    {
        id: 4,
        name: "Shahriar Karim",
        role: "UI/UX Desinger",
        img: "/images/about/Korim.jpeg",
    },
    {
        id: 5,
        name: "Nusrat Nova",
        role: "Frontend Developer",
        img: "/images/about/nova.jpeg",
    },
    {
        id: 6,
        name: "Mahathir Gunjon",
        role: "Developer",
        img: "/images/about/gunjan.jpeg",
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
                        430: { slidesPerView: 1.5 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                        1700: { slidesPerView: 5 },
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
