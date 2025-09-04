import { portfolioData } from "./portfolioData";

export type Projects = {
  title: string;
  img: string;
  link: string;
  id: number;
  year: string;
};

export type Services = {
  id: number;
  title: string;
  highlight?: string;
  description: string;
  path: string;
  slug: string;
  img?: string;
  features?: string[]; // 6 features per service
  projects?: Projects[]; // Related projects
  projectsTitle?: string; // Heading for the project section
};

export const servicesData: Services[] = [
  {
    id: 1,
    title: "Business Website",
    highlight: "Development",
    description: "Professional, conversion-focused websites that build trust and grow your brand online.",
    path: "/services/business-website-development",
    slug: "business-website-development",
    img: "/images/services/thumb-1.jpg",
    features: [
      "Responsive & Mobile-friendly",
      "Custom Design",
      "SEO Optimized",
      "Fast Loading Pages",
      "Secure Architecture",
      "Analytics & Tracking Setup"
    ],
    projectsTitle: "Business",
    projects: (portfolioData
      // .filter(p => p.category.includes("Business Website"))
      .filter(p => p.category.some(c => c.includes("Business Website")))
      .map(({ title, img, link, id, year }) => ({ title, img, link, id, year })) || [])
  },
  {
    id: 2,
    title: "Emerging eCommerce",
    highlight: "Solutions",
    description: "Custom online stores designed to sell your products and scale with your business.",
    path: "/services/ecommerce-website-development",
    slug: "ecommerce-website-development",
    img: "/images/services/thumb-2.jpg",
    features: [
      "Secure Payment Integration",
      "Inventory Management",
      "User-Friendly Checkout",
      "Discount & Coupon Management",
      "Order Tracking",
      "Customer Reviews & Ratings"
    ],
    projectsTitle: "eCommerce",
    projects: (portfolioData
      // .filter(p => p.category.includes("eCommerce"))
      .filter(p => p.category.some(c => c.includes("eCommerce")))
      .map(({ title, img, link, id, year }) => ({ title, img, link, id, year })) || [])
  },
  {
    id: 3,
    title: "Directory & Listing",
    highlight: "Platforms",
    description: "Smart, searchable directories built for usability, monetization, and growth.",
    path: "/services/directory-listing-website-development",
    slug: "directory-listing-website-development",
    img: "/images/services/thumb-3.jpg",
    features: [
      "Advanced Search & Filters",
      "Monetization Options",
      "User Reviews & Ratings",
      "Custom Categories",
      "Map Integration",
      "Profile Management"
    ],
    projectsTitle: "Directory",
    projects: (portfolioData
      .filter(p => p.category.some(c => c.includes("Directory")))
      .map(({ title, img, link, id, year }) => ({ title, img, link, id, year })) || [])
  },
  {
    id: 4,
    title: "SEO & Performance",
    highlight: "Optimization",
    description: "Rank higher, load faster, and get found by the right audience with our expert SEO services.",
    path: "/services/seo-website-optimization",
    slug: "seo-website-optimization",
    img: "/images/services/thumb-1.jpg",
    features: [
      "Keyword Research",
      "Performance Optimization",
      "Technical SEO Audit",
      "On-Page SEO",
      "Link Building Strategy",
      "Analytics & Reporting"
    ],
    projectsTitle: "SEO",
    projects: (portfolioData
      // .filter(p => p.category.includes("SEO"))
      .filter(p => p.category.some(c => c.includes("SEO")))
      .map(({ title, img, link, id, year }) => ({ title, img, link, id, year })) || [])
  },
  {
    id: 5,
    title: "Graphics, UI/UX & Brand",
    highlight: "Design",
    description: "From logos to UI/UX, we create visuals that speak your brand’s language.",
    path: "/services/graphic-brand-design",
    slug: "graphic-brand-design",
    img: "/images/services/thumb-2.jpg",
    features: [
      "UI/UX Design",
      "Logo & Branding",
      "Marketing Collateral",
      "Wireframing & Prototyping",
      "Illustrations & Icons",
      "Brand Guidelines"
    ],
    projectsTitle: "Design",
    projects: (portfolioData
      .filter(p => p.category.some(c => c.includes("Graphic")))
      .map(({ title, img, link, id, year }) => ({ title, img, link, id, year })) || [])
  },
  {
    id: 6,
    title: "Digital Marketing",
    highlight: "Strategy",
    description: "Targeted campaigns and data-driven growth strategies to get your business in front of the right people.",
    path: "/services/digital-marketing-strategy",
    slug: "digital-marketing-strategy",
    img: "/images/services/thumb-3.jpg",
    features: [
      "Social Media Marketing",
      "Email Campaigns",
      "Data Analytics & Reporting",
      "Content Marketing",
      "PPC Advertising",
      "Lead Generation Strategy"
    ],
    projectsTitle: "Marketing",
    projects: (portfolioData
      .filter(p => p.category.some(c => c.includes("Marketing")))
      .map(({ title, img, link, id, year }) => ({ title, img, link, id, year })) || [])
  }
];
