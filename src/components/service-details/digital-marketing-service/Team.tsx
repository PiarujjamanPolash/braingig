"use client";

import { teamData } from "@/components/about/Team";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Team: React.FC = () => {
  const doubledTeamData = [...teamData, ...teamData];

  return (
    <div className="td-team-area fix px-5 md:px-0">
      <div className="container w-[90%] mx-auto mb-[10px]">
        <div className="flex flex-wrap mb-[15px]">
          <div className="lg:w-3/12 w-full">
            <div className="td-team-6-subtitle mb-[20px]">
              <span className="td-section-6-subtitle uppercase">Our experts</span>
            </div>
          </div>
          {/* <div className="lg:w-9/12 w-full">
            <div className="td-team-6-title-wrap mb-[50px]">
              <h2 className="td-section-6-bigtitle td-text-invert">
                EXPERIENCED TEAM MEMBERS
              </h2>
            </div>
          </div> */}
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
          {doubledTeamData.map((member, index) => (
            <div key={index} className="td-team-6-wrap flex flex-col w-48 mx-4">
              <div className="td-team-6-thumb mb-[20px]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full"
                  />
              </div>
              <div className="td-team-6-content text-left flex-1">
                <Link href={''} className="name inline-block mb-[5px]">
                  {member.name}
                </Link>
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
