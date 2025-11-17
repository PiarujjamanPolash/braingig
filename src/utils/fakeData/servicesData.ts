import { FaChartLine, FaExpand, FaLightbulb, FaLink, FaRegClock, FaRegFileAlt, FaRocket, FaSearch } from "react-icons/fa";
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
  tagsData?: {
    id: string;
    label: string;
  }[];

  featuresData?: {
  sectionTitle: string;
  sectionDescription: string;
  services: {
    id: number;
    title: string;
    description: {
      title: string;
      text: string;
    }[];
  }[];
};


  projectsData?: {
    id: number;
    title: string;
    image: string;
    strategy: {
      icon: any;
      text: string;
    }[];
    results: {
      clicks: { start: number; end: number };
      impressions: { start: number; end: number };
      avgPosition: { start: number; end: number; gain: number };
      ctr: { start: number; end: number };
      keywords: { start: number; end: number };
    };
  }[];

  processData?: {
    icon: any;
    title: string;
  }[];
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
    title: "Marketing That Moves Markets",
    description: "Transforming ideas into campaigns that connect and convert your ideal audience through expert <strong>Digital Marketing Services.</strong>",
    path: "/services/digital-marketing-strategy",
    slug: "digital-marketing-strategy",
    img: "/images/services/marketing.webp",
    projectsTitle: "Marketing",
    projects: portfolioData
      .sort(() => 0.5 - Math.random())
      .slice(0, 8)
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })),
      tagsData: [
    { id: "service-1", label: "SEO" },
    { id: "service-2", label: "Authority" },
    { id: "service-3", label: "Ads" },
    { id: "service-4", label: "Creatives" },
    { id: "service-5", label: "Content Funnel" },
  ],
  featuresData: {
    sectionTitle: "Our Digital Marketing Services",
    sectionDescription: "Comprehensive strategies to grow your online presence, drive traffic, and increase conversions across SEO, Paid Media, Social Media, Content, and Analytics.",
    services: [
      {
        id: 1,
        title: "SEO Pillar",
        description: [
          {
            title: "SEO Website Audit:",
            text: "Full baseline review + ongoing <strong>SEO Audit and Optimization.</strong>",
          },
          {
            title: "Technical SEO Service:",
            text: "Improve crawlability, site structure, schema, and speed.",
          },
          {
            title: "On-Page SEO:",
            text: "Optimize content, titles, meta, headers, internal links, and UX.",
          },
          {
            title: "SEO Strategy Services:",
            text: "Data-led <strong>SEO Optimization Services</strong> and <strong>Organic SEO Services</strong> to <strong>increase organic traffic</strong>, guided by a clear roadmap.",
          },
        ],
      },
      {
        id: 2,
        title: "Authority & Off-Page",
        description: [
          {
            title: "Off-Page SEO Services:",
            text: "Build authority with quality, white-hat links.",
          },
          {
            title: "Backlink Building Service:",
            text: "Clean, relevant placements from trusted sites.",
          },
          {
            title: "Guest Post Service:",
            text: "Vetted publishers, brand-safe content and outreach.",
          },
          {
            title: "Transparent Results:",
            text: "Clear sourcing and reporting with measurable gains in rankings and visibility.",
          },
        ],
      },
      {
        id: 3,
        title: "Paid Media Engine",
        description: [
          {
            title: "Paid Advertising Services:",
            text: "Plan and manage multi-channel campaigns with precise targeting, A/B testing, and rapid creative iteration.",
          },
          {
            title: "Google Ads Management:",
            text: "Intent-driven campaigns optimized for ROAS and lower CPA.",
          },
          {
            title: "Facebook Ads Services & Instagram Ads:",
            text: "Build reach and demand with smart audiences and creative testing.",
          },
          {
            title: "Continuous Optimization:",
            text: "Budgets, bids, audiences, and ads refined ongoing for peak performance.",
          },
        ],
      },
      {
        id: 4,
        title: "Social Media & Creative",
        description: [
          {
            title: "Social Media Management:",
            text: "Consistent posting, community growth, and clear brand voice.",
          },
          {
            title: "Creative Production:",
            text: "On-brand <strong>Social Media Graphics</strong> and <strong>Social Media Post Design</strong> in platform-ready formats.",
          },
          {
            title: "Ad Creative Design:",
            text: "Campaign-specific creatives to lift CTR and reduce CPA.",
          },
          {
            title: "Conversion Support:",
            text: "Every asset is built to drive clicks, leads, and sales.",
          },
        ],
      },
      {
        id: 5,
        title: "Content That Converts",
        description: [
          {
            title: "Targeted SEO Content:",
            text: "Plan and publish blog posts around high-value keywords and search intent to attract qualified visitors.",
          },
          {
            title: "Funnel Mapping:",
            text: "TOFU–MOFU–BOFU topics that guide readers from discovery to conversion.",
          },
          {
            title: "Geo-Optimized & Evergreen:",
            text: "Localized, long-lasting content built to compete for page-one on Google.",
          },
          {
            title: "Sustainable Growth:",
            text: "Fully organic approach with continual updates, internal linking, and measurement.",
          },
        ],
      },
      {
        id: 6,
        title: "Analytics & Reporting",
        description: [
          {
            title: "Marketing Analytics:",
            text: "Track goals, funnels, cohorts, and creative performance across all channels.",
          },
          {
            title: "Clear Dashboards:",
            text: "Real-time KPIs show what’s working and what needs improvement.",
          },
          {
            title: "Actionable Insights:",
            text: "Testing and attribution guide budget, audience, and creative changes.",
          },
          {
            title: "Accountable & Scalable:",
            text: "Transparent reporting keeps your <strong>Digital Marketing Services</strong> measurable and built to scale.",
          },
        ],
      },
    ],
  },
  projectsData: [
    {
      id: 1,
      title: "Project 1",
      image: "/images/service-details/digital-marketing-service/P1.jpg",
      strategy: [
        // { icon: FaRegClock, text: "5 Months" },
        // { icon: FaRegFileAlt, text: "45 Blogs" },
        // { icon: FaLink, text: "On-Page + Off-Page SEO" },
      ],
      results: {
        clicks: { start: 63, end: 5460 },
        impressions: { start: 912, end: 91100 },
        avgPosition: { start: 38, end: 20.3, gain: 17.7 },
        ctr: { start: 0, end: 6 },
        keywords: { start: 0, end: 1036 },
      },
    },
    {
      id: 2,
      title: "Project 2",
      image: "/images/service-details/digital-marketing-service/P2.jpg",
      strategy: [
        // { icon: FaRegClock, text: "3 Months Ongoing" },
        // { icon: FaLink, text: "blogs + off-page SEO." },
      ],
      results: {
        clicks: { start: 158, end: 608 },
        impressions: { start: 3830, end: 27900 },
        avgPosition: { start: 41.8, end: 28.3, gain: 13.5 },
        ctr: { start: 0, end: 2.2 },
        keywords: { start: 0, end: 1248 },
      },
    },
    {
      id: 3,
      title: "Project 3",
      image: "/images/service-details/digital-marketing-service/P3.jpg",
      strategy: [
        // { icon: FaRegClock, text: "1 Month" },
        // { icon: FaRegFileAlt, text: "8 Blogs" },
        // { icon: FaLink, text: "Basic + Technical SEO" },
      ],
      results: {
        clicks: { start: 61, end: 113 },
        impressions: { start: 4900, end: 10200 },
        avgPosition: { start: 57.9, end: 51.2, gain: 6.7 },
        ctr: { start: 0, end: 1.1 },
        keywords: { start: 0, end: 388 },
      },
    },
  ],

  processData: [
    // { icon: FaSearch, title: "Audit" },
    // { icon: FaLightbulb, title: "Strategy & Plan" },
    // { icon: FaRocket, title: "Create & Launch" },
    // { icon: FaChartLine, title: "Measure & Optimize" },
    // { icon: FaExpand, title: "Scale" },
  ],
  },
];
