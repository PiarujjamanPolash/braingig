// fakedata.ts

export type MenuItem = {
  id: number;
  label: string;
  path: string;
  children?: MenuItem[];
};

export type DataType = MenuItem[];

export const menuList: DataType = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About Us",
    path: "/about/",
  },
  {
    id: 3,
    label: "Our Services",
    path: "/services/",
    children: [
      { id: 31, label: "Business Website Development", path: "/services/business-website-development" },
      { id: 32, label: "eCommerce Website Development", path: "/services/ecommerce-website-development" },
      { id: 33, label: "Directory & Listing Website Development", path: "/services/directory-listing-website-development" },
      { id: 34, label: "SEO & Website Optimization", path: "/services/seo-website-optimization" },
      { id: 35, label: "Graphic & Brand Design", path: "/services/graphic-brand-design" },
      { id: 36, label: "Digital Marketing Strategy", path: "/services/digital-marketing-strategy" },
    ],
  },
  {
    id: 4,
    label: "Portfolio",
    path: "/portfolio/",
  },
  {
    id: 6,
    label: "Contact Us",
    path: "/contact/",
  },
];
