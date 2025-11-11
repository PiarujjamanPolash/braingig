import { FaRegFileAlt } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine, FaExpand } from 'react-icons/fa';

export const imagesData = [
    "/images/service-details/digital-marketing-service/on-page-seo.jpg",
    "/images/service-details/digital-marketing-service/slider-2.webp",
    "/images/service-details/digital-marketing-service/slider-3.jpg",
    "/images/service-details/digital-marketing-service/slider-4.jpg",
    "/images/service-details/digital-marketing-service/slider-5.jpg",
    "/images/service-details/digital-marketing-service/slider-6.jpg",
    "/images/service-details/digital-marketing-service/slider-7.jpg",
    "/images/service-details/digital-marketing-service/slider-8.jpg",
    "/images/service-details/digital-marketing-service/slider-9.jpg",
];
export const tagsData = [
    { id: "service-1", label: "(SEO)" },
    { id: "service-2", label: "(Authority)" },
    { id: "service-3", label: "(Ads)" },
    { id: "service-4", label: "(Creatives)" },
    { id: "service-5", label: "(Content Funnel)" },
];
export const digitalMarketingData = [
  { 
    id: 1,
    title: "SEO Pillar",
    description: [
      { title: "SEO Website Audit:", text: "Full baseline review + ongoing <strong>SEO Audit and Optimization.</strong>" },
      { title: "Technical SEO Service:", text: "Improve crawlability, site structure, schema, and speed." },
      { title: "On-Page SEO:", text: "Optimize content, titles, meta, headers, internal links, and UX." },
      { title: "SEO Strategy Services:", text: "Data-led <strong>SEO Optimization Services</strong> and <strong>Organic SEO Services</strong> to <strong>increase organic traffic</strong>, guided by a clear roadmap." }
    ]
  },
  { 
    id: 2,
    title: "Authority & Off-Page",
    description: [
      { title: "Off-Page SEO Services:", text: "Build authority with quality, white-hat links." },
      { title: "Backlink Building Service:", text: "Clean, relevant placements from trusted sites." },
      { title: "Guest Post Service:", text: "Vetted publishers, brand-safe content and outreach." },
      { title: "Transparent Results:", text: "Clear sourcing and reporting with measurable gains in rankings and visibility." }
    ]
  },
  { 
    id: 3,
    title: "Paid Media Engine",
    description: [
      { title: "Paid Advertising Services:", text: "Plan and manage multi-channel campaigns with precise targeting, A/B testing, and rapid creative iteration." },
      { title: "Google Ads Management:", text: "Intent-driven campaigns optimized for ROAS and lower CPA." },
      { title: "Facebook Ads Services & Instagram Ads:", text: "Build reach and demand with smart audiences and creative testing." },
      { title: "Continuous Optimization:", text: "Budgets, bids, audiences, and ads refined ongoing for peak performance." }
    ]
  },
  { 
    id: 4,
    title: "Social Media & Creative",
    description: [
      { title: "Social Media Management:", text: "Consistent posting, community growth, and clear brand voice." },
      { title: "Creative Production:", text: "On-brand <strong>Social Media Graphics</strong> and <strong>Social Media Post Design</strong> in platform-ready formats." },
      { title: "Ad Creative Design:", text: "Campaign-specific creatives to lift CTR and reduce CPA." },
      { title: "Conversion Support:", text: "Every asset is built to drive clicks, leads, and sales." }
    ]
  },
  { 
    id: 5,
    title: "Content That Converts",
    description: [
      { title: "Targeted SEO Content:", text: "Plan and publish blog posts around high-value keywords and search intent to attract qualified visitors." },
      { title: "Funnel Mapping:", text: "TOFU–MOFU–BOFU topics that guide readers from discovery to conversion." },
      { title: "Geo-Optimized & Evergreen:", text: "Localized, long-lasting content built to compete for page-one on Google." },
      { title: "Sustainable Growth:", text: "Fully organic approach with continual updates, internal linking, and measurement." }
    ]
  },
  { 
    id: 6,
    title: "Analytics & Reporting",
    description: [
      { title: "Marketing Analytics:", text: "Track goals, funnels, cohorts, and creative performance across all channels." },
      { title: "Clear Dashboards:", text: "Real-time KPIs show what’s working and what needs improvement." },
      { title: "Actionable Insights:", text: "Testing and attribution guide budget, audience, and creative changes." },
      { title: "Accountable & Scalable:", text: "Transparent reporting keeps your <strong>Digital Marketing Services</strong> measurable and built to scale." }
    ]
  }
];

export const projectsData = [
    {
        id: 1,
        title: "Project 1",
        image: "/images/service-details/digital-marketing-service/P1.jpg",
        strategy: [
            { icon: FaRegClock, text: "5 Months" },
            { icon: FaRegFileAlt, text: "45 Blogs" },
            { icon: FaLink, text: "On-Page + Off-Page SEO" },
        ],
        results: {
            clicks: { start: 63, end: 5460 },
            impressions: { start: 912, end: 91100 },
            avgPosition: { start: 38, end: 20.3, gain: 17.7 },
            ctr: { start: 0, end: 6 },
            keywords: { start: 0, end: 1036 },
        }
    },
    {
        id: 2,
        title: "Project 2",
        image: "/images/service-details/digital-marketing-service/P2.jpg",
        strategy: [
            { icon: FaRegClock, text: "3 Months Ongoing" },
            // { icon: <FaRegFileAlt />, text: "Blogs" },
            { icon: FaLink, text: "blogs + off-page SEO." },
        ],
        results: {
            clicks: { start: 158, end: 608 },
            impressions: { start: 3830, end: 27900 },
            avgPosition: { start: 41.8, end: 28.3, gain: 13.5 },
            ctr: { start: 0, end: 2.2 },
            keywords: { start: 0, end: 1248 },
        }
    },
    {
        id: 3,
        title: "Project 3",
        image: "/images/service-details/digital-marketing-service/P3.jpg",
        strategy: [
            { icon: FaRegClock, text: "1 Month" },
            { icon: FaRegFileAlt, text: "8 Blogs" },
            { icon: FaLink, text: "Basic + Technical SEO" },
        ],
        results: {
            clicks: { start: 61, end: 113 },
            impressions: { start: 4900, end: 10200 },
            avgPosition: { start: 57.9, end: 51.2, gain: 6.7 },
            ctr: { start: 0, end: 1.1 },
            keywords: { start: 0, end: 388 },
        }
    }
];

export const processData = [
  { icon: FaSearch, title: 'Audit' },
  { icon: FaLightbulb, title: 'Strategy & Plan' },
  { icon: FaRocket, title: 'Create & Launch' },
  { icon: FaChartLine, title: 'Measure & Optimize' },
  { icon: FaExpand, title: 'Scale' },
];