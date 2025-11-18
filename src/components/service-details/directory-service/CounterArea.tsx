"use client"
import SplitTextAnimation from '@/components/animations/SplitTextAnimation';
import Image from 'next/image';
import { useRef } from 'react';
import CountUp from 'react-countup';
const counters = [
    {
        shape: "/images/service-details/directory-service/counter-shape-1.png",
        count: 5,
        suffix: "+",
        text: "Years of expert <br> directory development",
    },
    {
        shape: "/images/service-details/directory-service/counter-shape-1.png",
        count: 15,
        suffix: "K",
        text: "Listings<br> successfully managed",
    },
    {
        shape: "/images/service-details/directory-service/counter-shape-2.png",
        count: 98,
        suffix: "%",
        text: "User<br> satisfaction rate",
    },
];

const CounterArea: React.FC = () => {
    const textRef = useRef<HTMLDivElement | null>(null);

    return (
        <section>
            <div className="td-counter-3-area grey-bg-3 pt-15 lg:py-20">
                <div className="container w-[90%] mx-auto px-4">
                {/* Title */}
                <div className="flex justify-center">
                    <div className="w-full lg:w-[70%] text-center mb-8">
                        <div className="td-counter-3-title-wrap">
                            <span className="td-section-3-subtitle inline-block !text-secondary mb-[15px]">
                                Our Proven Impact
                            </span>
                            <h2 ref={textRef} className="td-section-3-title td-split-text td-split-in-right">Directory Platforms <span>Delivering Real </span>Growth and Engagement.
                            </h2>
                        </div>
                        <SplitTextAnimation textRef={textRef} direction="right" />
                    </div>
                </div>

                {/* Counter Items */}
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                    {counters.map((item, index) => (
                        <div
                            key={index}
                            className={`td-counter-3-item relative mb-[30px]`}
                        >
                            <span className="td-counter-3-shape">
                                <Image
                                    src={item.shape}
                                    alt=""
                                    width={226}
                                    height={201}
                                    className='hidden sm:block'
                                />
                            </span>
                            <h2 className="title mb-20 sm:mb-[180px]">
                                <CountUp
                                    end={item.count}
                                    duration={2.5}
                                    enableScrollSpy
                                    scrollSpyOnce
                                     />
                                {item.suffix}
                            </h2>
                            <span
                                className="para sm:justify-end text-2xl sm:text-xl"
                                dangerouslySetInnerHTML={{ __html: item.text }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
};

export default CounterArea;