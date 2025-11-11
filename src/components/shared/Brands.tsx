"use client";
import { clientLogoData } from "@/utils/fakeData/clientLogoData";
import Image from "next/image";
import Marquee from "react-fast-marquee";
type BrandsProps = {
    customClass?: string;
};
const Brands = ({ customClass = "p-10" }: BrandsProps) => {
    const doubledclientLogoData = [...clientLogoData, ...clientLogoData];

    return (
        <div className={`w-full overflow-hidden ${customClass}`}>
            <Marquee gradient={false} speed={50}>
                {doubledclientLogoData.map(({ id, img, isLight }, index) => (
                    <Image width={110} height={44}
                        key={`${id}-${index}`}
                        src={img}
                        alt="company logo"
                        className={`lg:w-56 w-44 h-20 sm:h-25 md:h-30 lg:h-full mx-4 object-contain ${id === 2
                            ? "mix-blend-difference"
                            : isLight
                                ? "filter brightness-[60%]"
                                : ""
                            }`}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Brands;
