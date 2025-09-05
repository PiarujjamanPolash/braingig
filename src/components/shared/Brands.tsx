"use client"

import { clientLogoData } from "@/utils/fakeData/clientLogoData";
import Marquee from "react-fast-marquee";

const Brands: React.FC = () => {

    return (
        <div className="w-full overflow-hidden">
            <Marquee gradient={false} speed={50}>
                {clientLogoData.map(({ id, img }) => (
                    <img
                        key={id}
                        src={img}
                        alt="company logo"
                        className="w-56 h-[60px] sm:w-44 mx-4 object-contain"
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Brands;
