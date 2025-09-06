"use client"

import Image from "next/image";

export type SocialIconType = "twitter" | "facebook" | "instagram" | "linkedin";

export type TeamType = {
    id: number;
    name: string;
    role: string;
    img: string;
    socials: { href: string; type: SocialIconType }[];
};
export const teamData: TeamType[] = [
    {
        id: 1,
        name: "PITTERSON",
        role: "Developer",
        img: "/images/about/member_1.jpg",
        socials: [
            { href: "#", type: "twitter" },
            { href: "#", type: "facebook" },
            { href: "#", type: "instagram" },
            { href: "#", type: "linkedin" },
        ]
    },
    {
        id: 2,
        name: "JOTIN",
        role: "Developer",
        img: "/images/about/member_1.jpg",
        socials: [
            { href: "#", type: "twitter" },
            { href: "#", type: "facebook" },
            { href: "#", type: "instagram" },
            { href: "#", type: "linkedin" },
        ]

    },
    {
        id: 3,
        name: "DANDU",
        role: "Developer",
        img: "/images/about/member_1.jpg",
        socials: [
            { href: "#", type: "twitter" },
            { href: "#", type: "facebook" },
            { href: "#", type: "instagram" },
            { href: "#", type: "linkedin" },
        ]

    },
    {
        id: 4,
        name: "SAMIR",
        role: "Developer",
        img: "/images/about/member_1.jpg",
        socials: [
            { href: "#", type: "twitter" },
            { href: "#", type: "facebook" },
            { href: "#", type: "instagram" },
            { href: "#", type: "linkedin" },
        ]

    },
];
const Team: React.FC = () => {

    return (
        <div className="td-team-area td-team-about-wrap">
            <div className="container-fluid mx-auto">
                <div className="flex flex-wrap -mx-4">
                    {teamData.map((member) => (
                        <div
                            key={member.id}
                            className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-[40px] md:mb-[80px]"
                        >
                            <div className="td-team-4-wrap p-relative">
                                <div className="td-team-4-thumb">
                                    <Image width={350} height={445} className="w-full" src={member.img} alt={member.name} />
                                </div>
                                <div className="td-team-4-content text-center">
                                    <span className="td-team-4-subtitle">{member.role}</span>
                                    <h3 className="td-team-4-title">
                                        <a href="team-details.html">{member.name}</a>
                                    </h3>
                                    <div className="td-team-4-social flex justify-center space-x-2 mt-2">
                                        {member.socials.map((social, idx) => {
                                            let svg;
                                            switch (social.type) {
                                                case "twitter":
                                                    svg = (
                                                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486Z" fill="currentColor" />
                                                        </svg>
                                                    );
                                                    break;
                                                case "facebook":
                                                    svg = (
                                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z" fill="currentColor" />
                                                        </svg>
                                                    );
                                                    break;
                                                case "instagram":
                                                    svg = (
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11.8477 4.15039H11.8577" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    );
                                                    break;
                                                case "linkedin":
                                                    svg = (
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z" fill="currentColor" />
                                                            <path d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z" fill="currentColor" />
                                                            <path d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z" fill="currentColor" />
                                                        </svg>
                                                    );
                                                    break;
                                                default:
                                                    svg = null;
                                            }

                                            return <a key={idx} href={social.href}>{svg}</a>;
                                        })}
                                    </div>

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
