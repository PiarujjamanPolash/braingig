"use client"
import Image from "next/image";
export type TeamType = {
    id: number;
    name: string;
    role?: string;
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
        img: "/images/about/sadman.webp",


    },
    {
        id: 4,
        name: "Shahriar Karim",
        role: "UI/UX Desinger",
        img: "/images/about/korim.webp",
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
    {
        id: 7,
        name: "buddy",
        // role: "WordPress Developer",
        img: "/images/about/buddy.jpeg",
    },
];
const Team: React.FC = () => {

    return (
        <section>
            <div className="td-team-area td-team-about-wrap">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-4 lg:mb-7 w-[90%] mx-auto">
                    <h2 className="font-medium text-[40px] lg:text-[60px] td-text-invert-orange">
                        Our Experts
                    </h2>
                    <p className="text-base md:text-lg font-normal lg:font-medium text-primary lg:w-[70%]">Our strength is the synergy of passionate experts. Led by Piarujjaman Polash and Fahad Al Faisal, our team pushes creative boundaries and delivers measurable results, embodying a shared commitment to excellence as your trusted digital marketing and web development partner.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {teamData.map((member) => (
                        <div key={member.id} className="w-full md:[width:calc(50%-12px)] lg:[width:calc(33.333%-16px)] h-full">
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
        </section>

    );
};

export default Team;
