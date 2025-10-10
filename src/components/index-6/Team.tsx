"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

// Team data object
const teamData = {
  members: [
    { name: "Liza Olivarez", role: "Engineer", img: "/images/index-6/team-1.jpg", link: "#" },
    { name: "Laura Leipina", role: "Designer", img: "/images/index-6/team-1.jpg", link: "#" },
    { name: "Laura Leipina", role: "Designer", img: "/images/index-6/team-1.jpg", link: "#" },
    { name: "Laura Leipina", role: "Designer", img: "/images/index-6/team-1.jpg", link: "#" },
    { name: "Liza Olivarez", role: "Engineer", img: "/images/index-6/team-1.jpg", link: "#" },
    { name: "Richar Handyamn", role: "Designer", img: "/images/index-6/team-1.jpg", link: "#" },
    { name: "Bob Merly", role: "Developer", img: "/images/index-6/team-1.jpg", link: "#" },
  ],
};

const Team: React.FC = () => {
  return (
    <div className="td-team-area pt-[105px] fix px-5 md:px-0">
      <div className="container mx-auto mb-[10px]">
        <div className="flex flex-wrap mb-[15px]">
          <div className="lg:w-3/12 w-full">
            <div className="td-team-6-subtitle mb-[20px]">
              <span className="td-section-6-subtitle">WHO WE ARE</span>
            </div>
          </div>
          <div className="lg:w-9/12 w-full">
            <div className="td-team-6-title-wrap mb-[50px]">
              <h2 className="td-section-6-bigtitle td-text-opacity">
                EXPERIENCED TEAM MEMBERS
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Slider */}
      <div className="container-fluid overflow-hidden">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="td-team-6-slider"
        >
          {teamData.members.map((member, index) => (
            <div key={index} className="td-team-6-wrap flex-shrink-0 w-48 mx-4">
              <div className="td-team-6-thumb mb-[20px]">
                <a href={member.link}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full"
                  />
                </a>
              </div>
              <div className="td-team-6-content text-left">
                <a href={member.link} className="name inline-block mb-[5px]">
                  {member.name}
                </a>
                <span className="tag block">{member.role}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Team;
