"use client"

import Image from "next/image";
import thumb from "../../../public/images/faq/thumb.jpg"
const FaqSearch: React.FC = () => {

    return (
        <div className="td-faq-2-thumb td-faq-main-thumb mt-10 lg:mt-16 lg:mr-28 mb-8">
        <Image width={420} height={240} className="td-rounded-10 w-full" src={thumb} alt="faq" />
            <div className="td-faq-main-form pt-12">
                <form action="#" className="relative">
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Search product"
                    />
                    <button
                        className="td-faq-main-btn px-[6px] py-[1px]"
                        type="submit"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.8889 15.2222C5.96154 15.2222 2.7778 12.0385 2.7778 8.1111C2.7778 4.18375 5.96154 1 9.8889 1C13.8163 1 17 4.18375 17 8.1111C17 12.0385 13.8163 15.2222 9.8889 15.2222Z"
                                stroke="#1C1D1F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.00053 17.0001L4.86719 13.1334"
                                stroke="#1C1D1F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FaqSearch;
