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
  projectsDescription?: string;
  whyUs?: {
    title: string;
    description: string;
  };
  process?: {
    number: string;
    title: string;
    description: string;
    icon?: string;
    mt?: string;
    delay?: string;
  }[];
  benefitsTitle?: string;
  benefits?: string[];
  cta?: {
    text: string;
    buttonLabel: string;
    buttonLink: string;
  };
};

export const servicesData: Services[] = [
  {
    id: 1,
    title: "Business Website Development",
    // highlight: "Development",
    description: "Grow your brand online with masterful business website development for lasting impact.",
    path: "/services/business-website-development",
    slug: "business-website-development",
    img: "/images/services/business.webp",
    features: [
      "Custom Business Website Design",
      "Responsive Business Website",
      "Conversion-Focused Business Website",
      "SEO Optimized Business Website",
      "SEO Optimized Business Website",
      "Business Website Maintenance",
      "Affordable Business Website Solutions",
    ],
    benefitsTitle: "Benefits of Our Business Website Solutions",
    benefits: [
      "Enhanced brand credibility with bespoke professional website design.",
      "Engage customers through a flawless, responsive business website.",
      "Boost sales and loyalty with a conversion-focused business website.",
      "Gain visibility with an expertly developed SEO optimized business website.",
      "Enjoy peace of mind with proactive business website maintenance.",
      "Achieve all this with cost-effective, affordable business website services."
    ],
    projectsTitle: "Business",
    projectsDescription: "Dig into how we helped businesses like yours grow with custom business website development. Each project demonstrates our commitment to quality, innovation, and results.",
    projects: (portfolioData
      .filter(p => p.category.some(c => c.includes("Business")))
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })) || []),
    whyUs: {
      title: "Why Choose Us for Business Website Development?",
      description: "Partner with Brain Gig for a refined business website design experience. We specialize in building responsive business websites that combine stunning visuals with seamless functionality. Our commitment to quality and affordable business website solutions ensures your digital presence reflects your brand’s prestige while maximizing ROI."
    },
    process: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep to understand your business goals and audience.",
        icon: "FiSearch",
        mt: "sm:mt-[120px]",
        delay: ".3s",
      },
      {
        number: "02",
        title: "Design & Development",
        description: "Creating elegant, professional website design customized for conversion and brand impact.",
        icon: "FiSettings",
        mt: "",
        delay: ".5s",
      },
      {
        number: "03",
        title: "Testing & Launch",
        description: "Delivering a flawless, responsive business website optimized for performance.",
        icon: "FiActivity",
        mt: "sm:mt-[120px]",
        delay: ".7s",
      },
      {
        number: "04",
        title: "Maintenance & Support",
        description: "Providing reliable & dependable business website maintenance for long-term success.",
        icon: "FiCheckCircle",
        mt: "",
        delay: ".9s",
      }
    ],
    cta: {
      text: "Ready to transform your business with a Conversion-Focused Business Website?",
      buttonLabel: "Contact Brain Gig today ",
      buttonLink: "/contact"
    }
  },
  {
    id: 2,
    title: "Emerging Ecommerce Solutions",
    // highlight: "Solutions",
    description: "Unlock your online sales potential with expert ecommerce website development from Brain Gig.",
    path: "/services/ecommerce-website-development",
    slug: "ecommerce-website-development",
    img: "/images/services/ecommerce.webp",
    features: [
      "Custom Ecommerce Website Design",
      "Responsive Ecommerce Website",
      "Conversion-Focused Ecommerce Website",
      "SEO Optimized Ecommerce Website",
      "Ecommerce Website Maintenance",
      "Affordable Ecommerce Website Solutions"
    ],
    benefitsTitle: "Benefits of Our Ecommerce Website Solutions",
    benefits: [
      "Boost your brand with exquisite custom ecommerce website design.",
      "Engage and convert visitors with conversion-focused ecommerce websites.",
      "Seamless shopping on any device through a responsive ecommerce website.",
      "Boost organic traffic via expertly built SEO optimized ecommerce websites.",
      "Enjoy peace of mind with dependable ecommerce website maintenance.",
      "Achieve your goals affordably without sacrificing quality."
    ],
    projectsTitle: "eCommerce",
    projectsDescription: "See how we helped businesses succeed online with custom made ecommerce website development services. Each project shows our commitment to quality, innovation, and measurable results.",
    projects: (portfolioData
      .filter(p => p.category.some(c => c.includes("eCommerce")))
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })) || []),
    whyUs: {
      title: "Why Choose Us for Ecommerce Website Development?",
      description: "We stand out as a trusted ecommerce web development partner offering affordable ecommerce website solutions without compromising quality. Our team builds responsive ecommerce websites that perform seamlessly across devices, combined with SEO optimized ecommerce website practices to ensure your store ranks high and attracts customers worldwide."
    },
    process: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description: "Deep dive into your brand, products, and target customers.",
        icon: "FiSearch",
        mt: "sm:mt-[120px]",
        delay: ".3s",
      },
      {
        number: "02",
        title: "Design & Development",
        description: "Developing a visually stunning, intuitive, and professional ecommerce website design.",
        icon: "FiSettings",
        mt: "",
        delay: ".5s",
      },
      {
        number: "03",
        title: "Testing & Launch",
        description: "Rigorous quality assurance ensuring your responsive ecommerce website delivers flawless performance.",
        icon: "FiActivity",
        mt: "sm:mt-[120px]",
        delay: ".7s",
      },
      {
        number: "04",
        title: "Maintenance & Support",
        description: "Ongoing care and optimization to sustain success and scalability.",
        icon: "FiCheckCircle",
        mt: "",
        delay: ".9s",
      }
    ],
    cta: {
      text: "Ready to grow your online store with a Conversion-Focused Ecommerce Website?",
      buttonLabel: "I'm Ready To Grow",
      buttonLink: "/contact"
    }
  },
  {
    id: 3,
    title: "Directory & Listing Platforms",
    // highlight: "Platforms",
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
    benefitsTitle: "Benefits of Our Business Website Solutions",
    projectsDescription: "Dig into how we helped businesses like yours grow with custom business website development. Each project demonstrates our commitment to quality, innovation, and results.",
    benefits: [
      "Enhanced brand credibility with bespoke professional website design.",
      "Engage customers through a flawless, responsive business website.",
      "Boost sales and loyalty with a conversion-focused business website.",
      "Gain visibility with an expertly developed SEO optimized business website.",
      "Enjoy peace of mind with proactive business website maintenance.",
      "Achieve all this with cost-effective, affordable business website services."
    ],
    projectsTitle: "Directory",
    projects: (portfolioData
      .filter(p => p.category.some(c => c.includes("Directory")))
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })) || []),
    whyUs: {
      title: "Why Choose Us for Business Websites?",
      description: "We deliver tailor-made business websites that not only look professional but also convert visitors into customers. Our focus on performance, SEO, and responsive design ensures your business stands out online."
    },
    process: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description: "We analyze your brand vision, user behavior, and design requirements.",
        icon: "FiSearch",
        mt: "sm:mt-[120px]",
        delay: ".3s",
      },
      {
        number: "02",
        title: "Design & Development",
        description: "We create UI/UX concepts, branding assets, and prototypes tailored to your identity.",
        icon: "FiSettings",
        mt: "",
        delay: ".5s",
      },
      {
        number: "03",
        title: "Testing & Launch",
        description: "We validate user flows, accessibility, and usability across devices.",
        icon: "FiActivity",
        mt: "sm:mt-[120px]",
        delay: ".7s",
      },
      {
        number: "04",
        title: "Maintenance & Support",
        description: "We refine visuals, maintain consistency, and support ongoing brand evolution.",
        icon: "FiCheckCircle",
        mt: "",
        delay: ".9s",
      }
    ]

  },
  {
    id: 4,
    title: "SEO Website Optimization",
    // highlight: "Optimization",
    description: "Unlock your site’s full potential with expert SEO website optimization.",
    path: "/services/seo-website-optimization",
    slug: "seo-website-optimization",
    img: "/images/services/seo.webp",
    features: [
      "SEO Website Audit",
      "Technical SEO Service",
      "On-Page SEO Optimization",
      "SEO Strategy Services",
      "Organic SEO Services",
      "SEO Optimization Services"
    ],
    benefitsTitle: "Benefits of Our SEO Website Optimization",
    benefits: [
      "Increase organic traffic through targeted and ethical SEO practices.",
      "Enhance user experience with faster, more accessible website performance.",
      "Gain long-term search visibility with expert SEO optimization services.",
      "Receive actionable insights and reports from thorough SEO website audits.",
      "Stay ahead with adaptable, data-driven SEO strategy services.",
      "Trust in sustainable organic SEO services that build lasting value."
    ],
    projectsTitle: "SEO",
    projectsDescription: "Check out how we’ve transformed digital footprints with precision SEO website optimization, driving measurable traffic and business growth.",
    projects: portfolioData
      .sort(() => 0.5 - Math.random())
      .slice(0, 8)
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })),
    whyUs: {
      title: "Why Choose Us for SEO Website Optimization?",
      description: "Brain Gig offers top-tier custom website SEO services to grow your digital presence. From meticulous SEO audits and optimization to advanced technical SEO services, we create full strategies that align with your business goals. Our focus on organic SEO services ensures sustainable growth by enhancing search rankings and user experience."
    },
    process: [
      {
        number: "01",
        title: "Comprehensive SEO Website Audit",
        description: "Identifying strengths, weaknesses, and growth opportunities.",
        icon: "FiSearch",
        mt: "sm:mt-[120px]",
        delay: ".3s",
      },
      {
        number: "02",
        title: "Strategy Development",
        description: "Adjusting SEO strategy services to your unique market and goals.",
        icon: "FiSettings",
        mt: "",
        delay: ".5s",
      },
      {
        number: "03",
        title: "Implementation",
        description: "Deploying technical SEO services and on-page SEO improvements.",
        icon: "FiActivity",
        mt: "sm:mt-[120px]",
        delay: ".7s",
      },
      {
        number: "04",
        title: "Monitoring & Optimization",
        description: "Ongoing adjustments to maximize organic traffic and ROI.",
        icon: "FiCheckCircle",
        mt: "",
        delay: ".9s",
      }
    ],
    cta: {
      text: "Ready to grow your online presence with professional SEO website optimization?",
      buttonLabel: "I'm Ready To Grow",
      buttonLink: "/contact"
    }

  },
  {
    id: 5,
    title: "UI/UX & Brand Design",
    // highlight: "Design",
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
    benefitsTitle: "Benefits of Our Business Website Solutions",
    benefits: [
      "Enhanced brand credibility with bespoke professional website design.",
      "Engage customers through a flawless, responsive business website.",
      "Boost sales and loyalty with a conversion-focused business website.",
      "Gain visibility with an expertly developed SEO optimized business website.",
      "Enjoy peace of mind with proactive business website maintenance.",
      "Achieve all this with cost-effective, affordable business website services."
    ],
    projectsTitle: "Design",
    projectsDescription: "Dig into how we helped businesses like yours grow with custom business website development. Each project demonstrates our commitment to quality, innovation, and results.",
    projects: (portfolioData
      .filter(p => p.category.some(c => c.includes("Graphics")))
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })) || []),
    whyUs: {
      title: "Why Choose Us for Business Websites?",
      description: "We deliver tailor-made business websites that not only look professional but also convert visitors into customers. Our focus on performance, SEO, and responsive design ensures your business stands out online."
    },
    process: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description: "We analyze your brand vision, user behavior, and design requirements.",
        icon: "FiSearch",
        mt: "sm:mt-[120px]",
        delay: ".3s",
      },
      {
        number: "02",
        title: "Design & Development",
        description: "We create UI/UX concepts, branding assets, and prototypes tailored to your identity.",
        icon: "FiSettings",
        mt: "",
        delay: ".5s",
      },
      {
        number: "03",
        title: "Testing & Launch",
        description: "We validate user flows, accessibility, and usability across devices.",
        icon: "FiActivity",
        mt: "sm:mt-[120px]",
        delay: ".7s",
      },
      {
        number: "04",
        title: "Maintenance & Support",
        description: "We refine visuals, maintain consistency, and support ongoing brand evolution.",
        icon: "FiCheckCircle",
        mt: "",
        delay: ".9s",
      }
    ],
     cta: {
      text: "Ready to transform your business with a Conversion-Focused Business Website?",
      buttonLabel: "Contact Brain Gig today ",
      buttonLink: "/contact"
    }

  },
  {
    id: 6,
    title: "Digital Marketing Strategy",
    // highlight: "Strategy",
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
    benefitsTitle: "Benefits of Our Business Website Solutions",
    benefits: [
      "Enhanced brand credibility with bespoke professional website design.",
      "Engage customers through a flawless, responsive business website.",
      "Boost sales and loyalty with a conversion-focused business website.",
      "Gain visibility with an expertly developed SEO optimized business website.",
      "Enjoy peace of mind with proactive business website maintenance.",
      "Achieve all this with cost-effective, affordable business website services."
    ],
    projectsTitle: "Marketing",
    projects: portfolioData
      .sort(() => 0.5 - Math.random())
      .slice(0, 8)
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })),
    whyUs: {
      title: "Why Choose Us for Business Websites?",
      description: "We deliver tailor-made business websites that not only look professional but also convert visitors into customers. Our focus on performance, SEO, and responsive design ensures your business stands out online."
    },
    process: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description: "We analyze your brand vision, user behavior, and design requirements.",
        icon: "FiSearch",
        mt: "sm:mt-[120px]",
        delay: ".3s",
      },
      {
        number: "02",
        title: "Design & Development",
        description: "We create UI/UX concepts, branding assets, and prototypes tailored to your identity.",
        icon: "FiSettings",
        mt: "",
        delay: ".5s",
      },
      {
        number: "03",
        title: "Testing & Launch",
        description: "We validate user flows, accessibility, and usability across devices.",
        icon: "FiActivity",
        mt: "sm:mt-[120px]",
        delay: ".7s",
      },
      {
        number: "04",
        title: "Maintenance & Support",
        description: "We refine visuals, maintain consistency, and support ongoing brand evolution.",
        icon: "FiCheckCircle",
        mt: "",
        delay: ".9s",
      }
    ]
  }
];
