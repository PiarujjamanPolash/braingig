import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@/assets/css/main.css"
import Header from "@/components/shared/Header";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M0E65B3S7Y"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M0E65B3S7Y');
          `}
        </Script>
      </head>
      <body
        className={`${bebasNeue .variable} ${plusJakarta.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4aed88',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ff6b6b',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
