import { portfolioData } from "./portfolioData";
import { IconType } from "react-icons";

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
    icon?: IconType;
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
      icon: IconType;
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
    icon: IconType;
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
    // process: [
    //   {
    //     number: "01",
    //     title: "Discovery & Strategy",
    //     description: "We dive deep to understand your business goals and audience.",
    //     icon: FiSearch,
    //     mt: "sm:mt-[120px]",
    //     delay: ".3s",
    //   },
    //   {
    //     number: "02",
    //     title: "Design & Development",
    //     description: "Creating elegant, professional website design customized for conversion and brand impact.",
    //     icon: FiSettings,
    //     mt: "",
    //     delay: ".5s",
    //   },
    //   {
    //     number: "03",
    //     title: "Testing & Launch",
    //     description: "Delivering a flawless, responsive business website optimized for performance.",
    //     icon: FiActivity,
    //     mt: "sm:mt-[120px]",
    //     delay: ".7s",
    //   },
    //   {
    //     number: "04",
    //     title: "Maintenance & Support",
    //     description: "Providing reliable & dependable business website maintenance for long-term success.",
    //     icon: "FiCheckCircle",
    //     mt: "",
    //     delay: ".9s",
    //   }
    // ],
    tagsData: [
      { id: "service-1", label: "Custom Website" },
      { id: "service-2", label: "Responsive" },
      { id: "service-3", label: "Conversion-Focused" },
      { id: "service-4", label: "SEO Optimized" },
      { id: "service-5", label: "Maintenance" },
      { id: "service-6", label: "Affordable" },
    ],

    featuresData: {
      sectionTitle: "Our Business Website Development Services",
      sectionDescription: "Build fast, secure, and professional websites tailored for your business growth and online presence.",
      services: [
        {
          id: 1,
          title: "Custom Business Website",
          description: [
            { title: "Tailored Layouts & Features:", text: "Websites designed to highlight your brand’s unique story and market position." },
            { title: "Scalable Architecture:", text: "Websites built to grow with your business and evolving needs." },
          ],
        },
        {
          id: 2,
          title: "Responsive Business Website",
          description: [
            { title: "Device Compatibility:", text: "Optimized for desktops, tablets, and mobile devices." },
            { title: "Enhanced User Experience:", text: "Smooth navigation and fast-loading pages for all screen sizes." },
          ],
        },
        {
          id: 3,
          title: "Conversion-Focused Website",
          description: [
            { title: "Strategic Layouts:", text: "Designed to guide visitors towards desired actions and increase sales." },
            { title: "CTA Optimization:", text: "Call-to-actions strategically placed for maximum engagement." },
          ],
        },
        {
          id: 4,
          title: "SEO Optimized Website",
          description: [
            { title: "On-Page SEO:", text: "Optimized meta tags, headings, and content structure for search engines." },
            { title: "Performance & Indexing:", text: "Fast loading speed and proper indexing to boost search rankings." },
          ],
        },
        {
          id: 5,
          title: "Website Maintenance & Support",
          description: [
            { title: "Regular Updates:", text: "Keep your website secure and up-to-date with the latest software." },
            { title: "Backup & Security:", text: "Protect your site from threats and ensure reliable performance." },
          ],
        },
        {
          id: 6,
          title: "Affordable Business Website Solutions",
          description: [
            { title: "Budget-Friendly:", text: "Premium design and development tailored to your budget." },
            { title: "Ideal for Startups & Small Businesses:", text: "High-quality websites without breaking the bank." },
          ],
        },
      ],
    },
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
    // process: [
    //   {
    //     number: "01",
    //     title: "Discovery & Strategy",
    //     description: "Deep dive into your brand, products, and target customers.",
    //     icon: "FiSearch",
    //     mt: "sm:mt-[120px]",
    //     delay: ".3s",
    //   },
    //   {
    //     number: "02",
    //     title: "Design & Development",
    //     description: "Developing a visually stunning, intuitive, and professional ecommerce website design.",
    //     icon: "FiSettings",
    //     mt: "",
    //     delay: ".5s",
    //   },
    //   {
    //     number: "03",
    //     title: "Testing & Launch",
    //     description: "Rigorous quality assurance ensuring your responsive ecommerce website delivers flawless performance.",
    //     icon: "FiActivity",
    //     mt: "sm:mt-[120px]",
    //     delay: ".7s",
    //   },
    //   {
    //     number: "04",
    //     title: "Maintenance & Support",
    //     description: "Ongoing care and optimization to sustain success and scalability.",
    //     icon: "FiCheckCircle",
    //     mt: "",
    //     delay: ".9s",
    //   }
    // ],
    tagsData: [
    { id: "service-1", label: "Custom Website" },
    { id: "service-2", label: "Conversion-Focused" },
    { id: "service-3", label: "SEO Optimized" },
    { id: "service-4", label: "Responsive" },
    { id: "service-5", label: "Maintenance" },
    { id: "service-6", label: "Affordable" }
  ],

  featuresData: {
    sectionTitle: "Our Ecommerce Website Development Services",
    sectionDescription: "Comprehensive ecommerce solutions that help you sell online efficiently and increase revenue. We provide custom, responsive, and conversion-focused ecommerce websites optimized for SEO and backed by ongoing maintenance and support.",

    services: [
      {
        id: 1,
        title: "Custom Ecommerce Website Design",
        description: [
          { title: "Unique Brand Identity:", text: "Custom storefronts designed to reflect your brand and showcase your products effectively." },
          { title: "Flexible Product Layouts:", text: "Tailored layouts for diverse product types and categories." }
        ]
      },
      {
        id: 2,
        title: "Responsive Ecommerce Website",
        description: [
          { title: "Mobile-First Design:", text: "Seamless shopping experience across desktop, tablet, and mobile devices." },
          { title: "Adaptive Layouts:", text: "Automatically adjusts to different screen sizes for usability." }
        ]
      },
      {
        id: 3,
        title: "Conversion-Focused Ecommerce Website",
        description: [
          { title: "Sales Funnel Optimization:", text: "Design strategies to guide users from browsing to purchasing." },
          { title: "Call-to-Action Enhancement:", text: "Strategically placed buttons and links to maximize engagement and sales." },
          { title: "Customer Retention Tools:", text: "Loyalty programs, email marketing, and other strategies to keep customers returning." }
        ]
      },
      {
        id: 4,
        title: "SEO Optimized Ecommerce Website",
        description: [
          { title: "On-Page SEO:", text: "Optimize product pages and metadata to improve search visibility." },
          { title: "Analytics Integration:", text: "Track sales, traffic, and customer behavior to refine strategies." }
        ]
      },
      {
        id: 5,
        title: "Ecommerce Website Maintenance & Support",
        description: [
          { title: "Regular Updates:", text: "Keep your platform, plugins, and themes current." },
          { title: "Security Monitoring:", text: "Ensure website security and PCI compliance for safe transactions." },
          { title: "Bug Fixes & Troubleshooting:", text: "Quickly resolve technical issues to minimize downtime." },
          { title: "Customer Support Integration:", text: "Provide chat or ticket support for a seamless user experience." }
        ]
      },
      {
        id: 6,
        title: "Affordable Ecommerce Website Solutions",
        description: [
          { title: "Budget-Friendly Expertise:", text: "Premium ecommerce solutions tailored to your budget and growth ambitions." },
          { title: "Scalable Options:", text: "Grow your online store without breaking the bank." }
        ]
      }
    ]
  },
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
    // process: [
    //   {
    //     number: "01",
    //     title: "Discovery & Strategy",
    //     description: "We analyze your brand vision, user behavior, and design requirements.",
    //     icon: "FiSearch",
    //     mt: "sm:mt-[120px]",
    //     delay: ".3s",
    //   },
    //   {
    //     number: "02",
    //     title: "Design & Development",
    //     description: "We create UI/UX concepts, branding assets, and prototypes tailored to your identity.",
    //     icon: "FiSettings",
    //     mt: "",
    //     delay: ".5s",
    //   },
    //   {
    //     number: "03",
    //     title: "Testing & Launch",
    //     description: "We validate user flows, accessibility, and usability across devices.",
    //     icon: "FiActivity",
    //     mt: "sm:mt-[120px]",
    //     delay: ".7s",
    //   },
    //   {
    //     number: "04",
    //     title: "Maintenance & Support",
    //     description: "We refine visuals, maintain consistency, and support ongoing brand evolution.",
    //     icon: "FiCheckCircle",
    //     mt: "",
    //     delay: ".9s",
    //   }
    // ]

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
    // process: [
    //   {
    //     number: "01",
    //     title: "Comprehensive SEO Website Audit",
    //     description: "Identifying strengths, weaknesses, and growth opportunities.",
    //     icon: "FiSearch",
    //     mt: "sm:mt-[120px]",
    //     delay: ".3s",
    //   },
    //   {
    //     number: "02",
    //     title: "Strategy Development",
    //     description: "Adjusting SEO strategy services to your unique market and goals.",
    //     icon: "FiSettings",
    //     mt: "",
    //     delay: ".5s",
    //   },
    //   {
    //     number: "03",
    //     title: "Implementation",
    //     description: "Deploying technical SEO services and on-page SEO improvements.",
    //     icon: "FiActivity",
    //     mt: "sm:mt-[120px]",
    //     delay: ".7s",
    //   },
    //   {
    //     number: "04",
    //     title: "Monitoring & Optimization",
    //     description: "Ongoing adjustments to maximize organic traffic and ROI.",
    //     icon: "FiCheckCircle",
    //     mt: "",
    //     delay: ".9s",
    //   }
    // ],
    tagsData: [
      { id: "service-1", label: "Technical SEO" },
      { id: "service-2", label: "On-Page SEO" },
      { id: "service-3", label: "Off-Page SEO" },
      { id: "service-4", label: "Content SEO" },
      { id: "service-5", label: "SEO Strategy" },
      { id: "service-6", label: "Organic SEO" },
      { id: "service-7", label: "SEO Audit" },
    ],

    featuresData: {
      sectionTitle: "Our SEO Optimization Services",
      sectionDescription: "Improve rankings, drive traffic, and boost conversions through a comprehensive SEO strategy.",
      services: [
        {
          id: 1,
          title: "Technical SEO",
          description: [
            { title: "Site Audit:", text: "Analyze site structure, crawlability, speed, and schema." },
            { title: "Fix Errors:", text: "Resolve broken links, duplicate content, and indexing issues." },
            { title: "Mobile Optimization:", text: "Ensure mobile-friendly performance." },
            { title: "Speed & Performance:", text: "Optimize loading time for higher rankings." },
          ],
        },
        {
          id: 2,
          title: "On-Page SEO",
          description: [
            { title: "Keyword Optimization:", text: "Optimize titles, meta, headers, and content." },
            { title: "Content Optimization:", text: "Align content with search intent and SEO best practices." },
            { title: "Internal Linking:", text: "Improve site structure and navigation for SEO benefits." },
            { title: "Metadata Optimization:", text: "Enhance meta titles and descriptions for higher CTR." },
          ],
        },
        {
          id: 3,
          title: "Off-Page SEO",
          description: [
            { title: "Backlink Building:", text: "Gain authority through high-quality backlinks." },
            { title: "Guest Posting:", text: "Publish content on relevant, trusted websites." },
            { title: "Social Signals:", text: "Leverage social engagement to boost rankings." },
            { title: "Brand Mentions:", text: "Increase online mentions for authority and trust." },
          ],
        },
        {
          id: 4,
          title: "SEO Strategy",
          description: [
            { title: "Custom Roadmap:", text: "Tailored SEO plan to improve visibility and conversions." },
            { title: "Competitive Analysis:", text: "Identify opportunities and gaps in your niche." },
            { title: "Content Planning:", text: "Develop content aligned with SEO goals." },
            { title: "Continuous Monitoring:", text: "Track performance and adapt to algorithm changes." },
          ],
        },
        {
          id: 5,
          title: "Organic SEO",
          description: [
            { title: "Traffic Growth:", text: "Focus on natural, sustainable growth without shortcuts." },
            { title: "Long-Term ROI:", text: "Build lasting search engine visibility." },
            { title: "Content Marketing:", text: "Leverage high-quality content to attract users." },
            { title: "Performance Optimization:", text: "Regular updates and improvements for sustained rankings." },
          ],
        },
      ],
    },
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
    projectsDescription: "Explore how we transformed user experiences and interfaces for businesses like yours. Each project showcases our dedication to intuitive design, seamless usability, and impactful results.",
    projects: (portfolioData
      .filter(p => p.category.some(c => c.includes("Graphics")))
      .map(({ title, img, link, id, year, category }) => ({ title, img, link, id, year, category })) || []),
    whyUs: {
      title: "Why Choose Us for Business Websites?",
      description: "We deliver tailor-made business websites that not only look professional but also convert visitors into customers. Our focus on performance, SEO, and responsive design ensures your business stands out online."
    },
    // process: [
    //   {
    //     number: "01",
    //     title: "Discovery & Strategy",
    //     description: "We analyze your brand vision, user behavior, and design requirements.",
    //     icon: "FiSearch",
    //     mt: "sm:mt-[120px]",
    //     delay: ".3s",
    //   },
    //   {
    //     number: "02",
    //     title: "Design & Development",
    //     description: "We create UI/UX concepts, branding assets, and prototypes tailored to your identity.",
    //     icon: "FiSettings",
    //     mt: "",
    //     delay: ".5s",
    //   },
    //   {
    //     number: "03",
    //     title: "Testing & Launch",
    //     description: "We validate user flows, accessibility, and usability across devices.",
    //     icon: "FiActivity",
    //     mt: "sm:mt-[120px]",
    //     delay: ".7s",
    //   },
    //   {
    //     number: "04",
    //     title: "Maintenance & Support",
    //     description: "We refine visuals, maintain consistency, and support ongoing brand evolution.",
    //     icon: "FiCheckCircle",
    //     mt: "",
    //     delay: ".9s",
    //   }
    // ],
    tagsData: [
      { id: "service-1", label: "UX Research" },
      { id: "service-2", label: "Wireframing" },
      { id: "service-3", label: "Prototyping" },
      { id: "service-4", label: "Visual Design" },
      { id: "service-5", label: "Usability Testing" },
    ],
    featuresData: {
      sectionTitle: "Our UI/UX Design Services",
      sectionDescription: "Design experiences that are visually appealing, user-friendly, and optimized for engagement and conversions.",
      services: [
        {
          id: 1,
          title: "UX Research & Strategy",
          description: [
            { title: "User Research:", text: "Understand target audience needs, behaviors, and pain points." },
            { title: "Journey Mapping:", text: "Define user flows for better usability and experience." },
            { title: "Information Architecture:", text: "Organize content and navigation for clarity." },
            { title: "UX Strategy:", text: "Create a roadmap to align business goals with user needs." },
          ],
        },
        {
          id: 2,
          title: "Design & Testing",
          description: [
            { title: "Wireframes & Prototypes:", text: "Visualize design concepts and validate with users." },
            { title: "UI Design:", text: "Attractive, brand-aligned interfaces that engage users." },
            { title: "Interaction Design:", text: "Design intuitive interactions to enhance user engagement." },
            { title: "Usability Testing:", text: "Iteratively test and improve designs for optimal experience." },
          ],
        },
      ],
    },
    cta: {
      text: "Ready to elevate your user experience with Intuitive UI/UX Design?",
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
    cta: {
      text: "Contact Brain Gig today and start your journey to higher rankings and increased organic traffic.",
      buttonLabel: "I’m Ready To Grow",
      buttonLink: "/contact"
    }
  },
];
