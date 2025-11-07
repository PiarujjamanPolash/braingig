"use client"

import Brands from "../shared/Brands";


const Partners: React.FC = () => {

    return (
        <div className="w-[90%] mx-auto">
            <div className="w-full pt-20">
                <h2 className="uppercase text-[40px] text-center td-text-invert-orange tracking-[5px] font-medium">
                    Top companies trust us with their websites
                </h2>
                <Brands />
            </div>

        </div>
    );
};

export default Partners;
