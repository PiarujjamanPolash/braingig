import { portfolioData } from "./portfolioData";

export type Projects = {
  title: string;
  img: string;
  link: string;
  id: number;
  year: string;
  category: string[];
};

export type Services = {
  id: number;
  title: string;
  highlight?: string;
  description: string;
  path: string;
  slug: string;
  img: string;
  features?: string[]; 
  projects?: Projects[]; 
  projectsTitle?: string; 
};

export const servicesData: Services[] = [
  {
    id: 1,
    title: "Business Website Development",
    highlight: "Development",
    description: "Grow your brand with bespoke professional website design and custom-made development made to accelerate your business growth and leave a lasting impact.",
    path: "/services/business-website-development",
    slug: "business-website-development",
    img: "/images/services/business.webp",
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
      .filter(p => p.category.some(c => c.includes("Business")))
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year,category })) || [])
  },
  {
    id: 2,
    title: "Emerging Ecommerce Solutions",
    highlight: "Solutions",
    description: "Unlock your store’s full potential with custom ecommerce experiences developed for seamless scalability, effortless shopping journeys, and measurable sales growth.",
    path: "/services/ecommerce-website-development",
    slug: "ecommerce-website-development",
    img: "/images/services/ecommerce.webp",
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
      .filter(p => p.category.some(c => c.includes("eCommerce")))
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })) || [])
  },
  {
    id: 3,
    title: "Directory & Listing Platforms",
    highlight: "Platforms",
    description: "Innovative, user-centric digital platforms designed for maximum discoverability and effortless navigation — driving engagement and expanding your reach.",
    path: "/services/directory-listing-website-development",
    slug: "directory-listing-website-development",
    img: "/images/services/directory.webp",
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
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })) || [])
  },
  {
    id: 4,
    title: "SEO Website Optimization",
    highlight: "Optimization",
    description: "Powerful, SEO-optimized websites built to dominate search rankings, deliver lightning-fast performance, and convert visitors into loyal customers.",
    path: "/services/seo-website-optimization",
    slug: "seo-website-optimization",
    img: "/images/services/seo.webp",
    features: [
      "Keyword Research",
      "Performance Optimization",
      "Technical SEO Audit",
      "On-Page SEO",
      "Link Building Strategy",
      "Analytics & Reporting"
    ],
    projectsTitle: "SEO",
    projects: portfolioData
      .sort(() => 0.5 - Math.random()) 
      .slice(0, 8) 
      .map(({ title, img, link, id, year,category }) => ({ title, img, link, id, year,category }))
  },
  {
    id: 5,
    title: "UI/UX & Brand Design",
    highlight: "Design",
    description: "World-class UI/UX design and brand visuals meticulously developed to reflect your unique identity and captivate your audience.",
    path: "/services/brand-design",
    slug: "brand-design",
    img: "/images/services/uiux.webp",
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
      .filter(p => p.category.some(c => c.includes("Graphics")))
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })) || [])
  },
  {
    id: 6,
    title: "Digital Marketing Strategy",
    highlight: "Strategy",
    description: "Strategic, full-spectrum digital marketing solutions customized to target your ideal customers and fuel sustainable, data-driven growth.",
    path: "/services/digital-marketing-strategy",
    slug: "digital-marketing-strategy",
    img: "/images/services/marketing.webp",
    features: [
      "Social Media Marketing",
      "Email Campaigns",
      "Data Analytics & Reporting",
      "Content Marketing",
      "PPC Advertising",
      "Lead Generation Strategy"
    ],
    projectsTitle: "Marketing",
    projects: portfolioData
      .sort(() => 0.5 - Math.random())
      .slice(0, 8) 
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category }))
  }
];
