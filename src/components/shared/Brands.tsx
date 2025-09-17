"use client";
import { clientLogoData } from "@/utils/fakeData/clientLogoData";
import Image from "next/image";
import Marquee from "react-fast-marquee";
type BrandsProps = {
  customClass?: string;
};
const Brands = ({ customClass = "p-10" }: BrandsProps) => {
    return (
        <div className={`w-full overflow-hidden ${customClass}`}>
            <Marquee gradient={false} speed={50}>
                {clientLogoData.map(({ id, img, isLight }) => (
                    <Image width={110} height={44}
                        key={id}
                        src={img}
                        alt="company logo"
                        className={`w-56 sm:w-44 mx-4 object-contain ${isLight ? "filter brightness-[60%]" : ""
                            }`}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Brands;
