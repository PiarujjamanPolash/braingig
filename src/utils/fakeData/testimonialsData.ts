type DataType = {
    id: number,
    img: string,
    name: string,
    review: string,
    position?: string
}[]

export const testimonialsData: DataType = [
    {
        id: 1,
        img: "/images/testimonials/author-5.jpg",
        name: "Sarah M.",
        position: "Small Business Owner",
        review: `"Brain Gig made the entire process so easy. I had no idea where to start, and they guided me from day one. The final website looks amazing and actually works!"`
    },
    {
        id: 2,
        img: "/images/testimonials/author-1.jpg",
        name: "James R.",
        position: "Online Store Founder",
        review: `"I’ve worked with other agencies before, but no one matched the communication and quality Brain Gig delivered. Highly recommended!"`
    },
    {
        id: 3,
        img: "/images/testimonials/author-2.png",
        name: "Amina K.",
        position: "Consultant",
        review: `"Fast, professional, and reliable. Brain Gig helped me launch my website in under 3 weeks — and I’ve already seen an increase in leads."`
    },
    {
        id: 4,
        img: "/images/testimonials/author-3.png",
        name: "Rizwan A.",
        position: "Marketing Manager",
        review: `"We wanted a site that was easy to manage and looked clean. Brain Gig nailed it and provided great support even after launch."`
    },
    {
        id: 5,
        img: "/images/testimonials/author-4.jpg",
        name: "David L.",
        position: "Restaurant Owner",
        review: `"They listened, understood our business, and built something that truly represents our brand. Couldn’t be happier with the results."`
    },
]