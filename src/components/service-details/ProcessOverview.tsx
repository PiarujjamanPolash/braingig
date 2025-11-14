import React from "react";
import { FiActivity, FiCheckCircle, FiSearch, FiSettings } from "react-icons/fi";

type ProcessStep = {
    number: string;
    title: string;
    description: string;
    icon?: string;
    mt?: string;
    delay?: string;
};
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FiSearch,
    FiSettings,
    FiActivity,
    FiCheckCircle,
};

const ProcessOverview = ({ process }: { process?: ProcessStep[] }) => {
    if (!process || process.length === 0) return null;
    return (
        <section className="pt-[120px]">
            <div className="container w-[90%] mx-auto td-service-process-area td-service-2-main-wrap">
                <h2 className="font-medium text-[40px] text-center lg:text-[60px] mb-7 td-text-invert-orange">
                    Process Overview
                </h2>
                <div className="flex flex-wrap -mx-0 gap-6 sm:gap-0">
                    {process.map((step, index) => {
                        const IconComponent = step.icon ? IconMap[step.icon] : null;

                        return (
                            <div
                                key={index}
                                className={`w-full sm:w-1/2 lg:w-1/4 px-0 ${step.mt || ""} wow fadeInUp`}
                                data-wow-delay={step.delay || ".1s"}
                                data-wow-duration="1s"
                            >
                                <div className="td-service-process-item">
                                    <span className="icons mb-[60px] flex items-start justify-between">
                                        <span className="number">{step.number}</span>
                                        {IconComponent && <IconComponent className="text-5xl text-secondary mb-4" />}
                                    </span>
                                    <h5 className="text-[26px] font-medium tracking-wide mb-[15px]">
                                        {step.title}
                                    </h5>
                                    <p className="para">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}


                </div>
            </div>
        </section>
    );
};

export default ProcessOverview;
