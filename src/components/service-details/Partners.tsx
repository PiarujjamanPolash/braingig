"use client"

import Brands from "../shared/Brands";

const Partners: React.FC = () => {

    return (
        <div className="w-[90%] mx-auto">
            <div className="w-full pt-16">
                <h2 className="uppercase text-base text-center text-black mb-[30px] tracking-[5px] font-medium">
                    Top companies trust us with their websites
                </h2>
                <Brands />
            </div>

        </div>
    );
};

export default Partners;
