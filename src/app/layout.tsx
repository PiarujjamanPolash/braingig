import type { Metadata } from "next";
import { Bebas_Neue, DM_Serif_Display, Inter, Manrope, Plus_Jakarta_Sans, Rethink_Sans } from "next/font/google";
import "./globals.css";
import "@/assets/css/main.css"
import Header from "@/components/shared/Header";

const bebasNeue  = Bebas_Neue({
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
        className={`${bebasNeue .variable} ${plusJakarta.variable} antialiased`}
      >
        <Header />
        {children}        
      </body>
    </html>
  );
}
