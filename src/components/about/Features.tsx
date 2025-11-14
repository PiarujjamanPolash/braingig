"use client"
import { LuHandshake, LuLayers, LuLightbulb, LuPenTool, LuRadar, LuTrendingUp } from "react-icons/lu";
const features = [
    {
        title: "Experienced Marketing Experts",
        description:
            "Skilled specialists with a proven track record in boosting brands across industries.",
        icon: LuTrendingUp,
    },
    {
        title: "Creative Digital Solutions",
        description:
            "Custom, innovative approaches that align with your unique business goals.",
        icon: LuLightbulb,
    },
    {
        title: "Trusted Full-Service Digital Agency",
        description:
            "Comprehensive offerings from <strong>business website development</strong> to <strong>digital marketing services,</strong> ensuring seamless integration.",
        icon: LuLayers,
    },
    {
        title: "Brand Strategy Experts",
        description:
            "We help create and communicate your brand story with clarity and impact.",
        icon: LuPenTool,
    },
    {
        title: "Reliable Digital Marketing Partner",
        description:
            "Transparent, honest collaboration focused on long-term success.",
        icon: LuHandshake,
    },
    {
        title: "Future-Ready Mindset",
        description:
            "We stay ahead of trends to keep your brand competitive in a fast-evolving digital landscape.",
        icon: LuRadar,
    },
];


const Features: React.FC = () => {

    return (
        <section className="my-15 lg:my-[120px] bg-white">
            <div className="container w-[90%] mx-auto px-6">
                <h2 className="font-medium text-[40px] lg:text-[60px] text-center mb-2 td-text-invert-orange">
                    What Sets Us Apart
                </h2>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-5">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 border border-gray-200 rounded-xl hover:shadow-sm transition"
                            >
                                <Icon className="text-5xl text-secondary mb-4" />
                                <h3 className="text-2xl font-medium mb-2">
                                    {item.title}
                                </h3>

                                <p
                                    className="lg:text-lg"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
