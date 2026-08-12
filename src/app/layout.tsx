import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import NavigationLoader from "@/components/NavigationLoader";
import QuotePrompt from "@/components/QuotePrompt";
import { absoluteUrl, businessContact, siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const socialImageUrl = absoluteUrl("/images/hero_exterior.png");

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
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
  openGraph: {
    type: "website",
    siteName: "Aluminium Designs",
    title: "Aluminium Designs | Premium Windows & Doors",
    description:
      "Premium custom aluminium windows, doors, shopfronts, and partitions, manufactured and installed in Gauteng.",
    ...(socialImageUrl
      ? { images: [{ url: socialImageUrl, alt: "Aluminium Designs installation" }] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Designs | Premium Windows & Doors",
    description:
      "Custom aluminium windows, doors, security systems, and glass installations in Gauteng.",
    ...(socialImageUrl ? { images: [socialImageUrl] } : {}),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessContact.name,
    ...(absoluteUrl("/images/hero_exterior.png")
      ? { image: absoluteUrl("/images/hero_exterior.png") }
      : {}),
    telephone: businessContact.phone,
    email: businessContact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessContact.streetAddress,
      addressLocality: `${businessContact.addressLocality}, ${businessContact.addressCity}`,
      addressRegion: businessContact.addressRegion,
      addressCountry: businessContact.addressCountry,
    },
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
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
        <QuotePrompt />
        <ScrollToTop />
      </body>
    </html>
  );
}
