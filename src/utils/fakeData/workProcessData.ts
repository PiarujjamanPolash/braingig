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
        description: "We discuss your vision, needs, and audience to shape your project..",
    },
    {
        id: 2,
        title: "Design & Build",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-global-fill",
        description: "Our skilled UI/UX design agency creates visually stunning, intuitive, and responsive web design solutions.",
    },
    {
        id: 3,
        title: "Launch & Support",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-stack-line",
        description: "From flawless deployment to ongoing website maintenance services, we ensure seamless performance and growth.",
    },
]