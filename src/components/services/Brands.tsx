"use client";

import { clientLogoData } from "@/utils/fakeData/clientLogoData";
import Marquee from "react-fast-marquee";

const Brands = () => {
    return (
        <div className="w-full overflow-hidden p-10">
            <Marquee gradient={false} speed={50}>
                {clientLogoData.map(({ id, img }) => (
                    <img
                        key={id}
                        src={img}
                        alt="company logo"
                        className="w-56 sm:w-44 mx-4 object-contain"
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Brands;
