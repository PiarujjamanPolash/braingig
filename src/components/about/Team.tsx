"use client"
import Image from "next/image";
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
        img: "/images/about/polash.webp",
    },
    {
        id: 2,
        name: "Fahad Al Faisal",
        role: "Co-Founder & COO",
        img: "/images/about/fahad.webp",
    },
    {
        id: 3,
        name: "Sadman Sakib",
        role: "SEO & Marketing",
        img: "/images/about/Sadman.webp",


    },
    {
        id: 4,
        name: "Shahriar Karim",
        role: "UI/UX Desinger",
        img: "/images/about/Korim.webp",
    },
    {
        id: 5,
        name: "Nusrat Nova",
        role: "Frontend Developer",
        img: "/images/about/nova.webp",
    },
    {
        id: 6,
        name: "Mahathir Gunjon",
        role: "WordPress Developer",
        img: "/images/about/gunjan.webp",
    },
];
const Team: React.FC = () => {

    return (
        <div className="td-team-area td-team-about-wrap">
            <div className="2xl:container 2xl:mx-auto mb-[40px] md:mb-[80px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamData.map((member) => (
                        <div key={member.id} className="w-full h-full">
                            <div className="td-team-4-wrap p-relative h-full">
                                <div className="td-team-4-thumb h-full">
                                    <Image width={490} height={490}
                                        className="w-full h-full object-cover"
                                        src={member.img}
                                        alt={member.name}
                                    />
                                </div>
                                <div className="td-team-4-content text-center">
                                    <span className="td-team-4-subtitle">{member.role}</span>
                                    <h3 className="td-team-4-title">{member.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Team;
