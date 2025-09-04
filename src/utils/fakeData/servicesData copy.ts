type DataType = {
    id: number,
    title: string,
    description: string,
    path: string,
    slug: string,
    img?: string
}[]
 export const servicesData: DataType = [
     {
         id: 1,
         title: "Business Website Development",
         description: "Professional, conversion-focused websites that build trust and grow your brand online.",
         path: "/services/business-website-development",
         slug: "business-website-development",
     },
     {
         id: 2,
         title: "Emerging eCommerce Solutions",
         description: "Custom online stores designed to sell your products and scale with your business.",
         path: "/services/ecommerce-website-development",
         slug: "ecommerce-website-development",
     },
     {
         id: 3,
         title: "Directory & Listing Platforms",
         description: "Smart, searchable directories built for usability, monetization, and growth.",
         path: "/services/directory-listing-website-development",
         slug: "directory-listing-website-development",
     },
      {
         id: 4,
         title: "SEO & Performance Optimization",
         description: "Rank higher, load faster, and get found by the right audience with our expert SEO services.",
         path: "/services/seo-website-optimization",
         slug: "seo-website-optimization",
     },
      {
         id: 5,
         title: "Graphics, UI/UX & Brand Design",
         description: "From logos to UI/UX, we create visuals that speak your brand’s language.",
         path: "/services/graphic-brand-design",
         slug: "graphic-brand-design",
     },
      {
         id: 6,
         title: "Digital Marketing Strategy",
         description: "Targeted campaigns and data-driven growth strategies to get your business in front of the right people.",
         path: "/services/digital-marketing-strategy",
         slug: "digital-marketing-strategy",
     },
 ]