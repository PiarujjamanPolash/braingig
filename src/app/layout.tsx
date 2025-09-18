import type { Metadata } from "next";
import { Bebas_Neue, DM_Serif_Display, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@/assets/css/main.css"
import Header from "@/components/shared/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--td-ff-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brain Gig LLC",
  description: "We welcome you to the world of braingig. Where we build what your business needs.",
  keywords: "braingig, business website, seo, graphics design, brand design, wordpress, shopify, webflow, ecommerce website, directory listing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebas.variable} ${plusJakarta.variable} ${dmSerif.variable} antialiased`}
      >
        <Header />
        {children}        
      </body>
    </html>
  );
}
