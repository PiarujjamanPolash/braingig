"use client";
import { FiActivity, FiCheckCircle, FiSearch, FiSettings } from "react-icons/fi";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We discuss your vision, needs, and audience to shape your project.",
        icon: <FiSearch size={64} />,
        mt: "sm:mt-[120px]",
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
        mt: "sm:mt-[120px]",
        delay: ".7s",
    },
    {
        number: "04",
        title: "Performance & Maintenance",
        description: "Continuous updates, backups, and optimizations to keep everything fast and stable.",
        icon: <FiCheckCircle size={64} />,
        mt: "",
        delay: ".9s",
    },
];
const BraingigProcess: React.FC = () => {

    return (
        <section>
            <div className="container td-service-process-area td-service-2-main-wrap">
                <h2 className="font-medium text-[40px] text-center lg:text-[60px] mb-4 lg:mb-7 td-text-invert-orange">
                    The braingig way
                </h2>
                <div className="lg:hidden">
                    <Swiper id="process-slider"
                        modules={[Pagination, Autoplay]}
                        autoplay
                        loop
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            480: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                        }}
                        className='pb-10'
                    >
                        {steps.map((step, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`w-full h-full`}
                                    data-wow-delay={step.delay}
                                    data-wow-duration="1s"
                                >
                                    <div className="td-service-process-item h-full">
                                        <span className="icons mb-[60px] flex items-start justify-between">
                                            {step.icon}
                                            <span className="number">{step.number}</span>
                                        </span>
                                        <h5 className="text-[26px] font-medium tracking-wide mb-[15px]">
                                            {step.title}
                                        </h5>
                                        <p className="para">{step.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`w-full px-0 wow fadeInUp ${step.mt}`}
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
