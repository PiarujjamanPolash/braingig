type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Discover",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-shake-hands-line",
        description: "We begin with a conversation to understand your business goals, audience, and vision.",
    },
    {
        id: 2,
        title: "Design & Build",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-global-fill",
        description: "Our team creates a custom website or solution tailored to your needs — beautifully and strategically.",
    },
    {
        id: 3,
        title: "Launch & Support",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-stack-line",
        description: "Once everything’s ready, we launch your site and provide ongoing support to keep things running smoothly.",
    },
]