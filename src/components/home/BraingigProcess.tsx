"use client";
import { FiActivity, FiCheckCircle, FiSearch, FiSettings } from "react-icons/fi";
const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We discuss your vision, needs, and audience to shape your project.",
        icon: <FiSearch size={64} />,
        mt: "mt-[120px]",
        delay: ".3s",
    },
    {
        number: "02",
        title: "Design & Build",
        description: "Our skilled UI/UX design agency creates visually stunning, intuitive, and responsive web design solutions.",
        icon: <FiSettings size={64} />,
        mt: "",
        delay: ".5s",
    },
    {
        number: "03",
        title: "Launch & Support",
        description: "From flawless deployment to ongoing website maintenance services, we ensure seamless performance and growth.",
        icon: <FiActivity size={64} />,
        mt: "mt-[120px]",
        delay: ".7s",
    },
    {
        number: "04",
        title: "Final result",
        description: "Modern and unique design practically point of view",
        icon: <FiCheckCircle size={64} />,
        mt: "",
        delay: ".9s",
    },
];
const BraingigProcess: React.FC = () => {

    return (
        <section className="pt-[120px]">
            <div className="container w-[90%] mx-auto td-service-process-area td-service-2-main-wrap">
                        <h2 className="font-medium text-[40px] text-center lg:text-[60px] mb-7 td-text-invert-orange">
                            The braingig way
                        </h2>

                    <div className="flex flex-wrap -mx-0">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`w-full sm:w-1/2 lg:w-1/4 px-0 wow fadeInUp ${step.mt}`}
                                data-wow-delay={step.delay}
                                data-wow-duration="1s"
                            >
                                <div className="td-service-process-item">
                                    <span className="icons mb-[60px] flex items-start justify-between">
                                        {step.icon}
                                        <span className="number">{step.number}</span>
                                    </span>
                                    <h5 className="text-[26px] font-medium tracking-wide mb-[15px]">{step.title}</h5>
                                    <p className="para">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
};

export default BraingigProcess;
