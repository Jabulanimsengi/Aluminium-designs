import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import NavigationLoader from "@/components/NavigationLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aluminium Designs | Premium Windows & Doors",
    template: "%s | Aluminium Designs"
  },
  description:
    "Premium custom aluminium windows, doors, shopfronts, and partitions. Measured, designed, fabricated, and installed to last. Request a free quote.",
  keywords: [
    "aluminium windows",
    "aluminium doors",
    "aluminium fabrication",
    "custom aluminium",
    "aluminium shopfronts",
    "sliding doors",
    "aluminium installers",
  ],
  authors: [{ name: "Aluminium Designs" }],
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aluminium Designs",
    image: "https://www.apexaluminium.co.za/images/hero_exterior.png",
    telephone: "+27-87-123-4567",
    email: "info@aluminiumdesigns.co.za",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 12, Enterprise Industrial Park, Sandton",
      addressLocality: "Johannesburg",
      postalCode: "2196",
      addressCountry: "ZA",
    },
    geo: { "@type": "GeoCoordinates", latitude: "-26.1075", longitude: "28.0567" },
    url: "https://www.apexaluminium.co.za",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavigationLoader />
        <Header />
        <main className="flex-grow pt-16 md:pt-16">{children}</main>
        <Footer />
        <WhatsAppChatWidget />
        <ScrollToTop />
      </body>
    </html>
  );
}
