import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import NavigationLoader from "@/components/NavigationLoader";
import QuotePrompt from "@/components/QuotePrompt";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import LeadGate from "@/components/LeadGate";
import { absoluteUrl, businessContact, siteUrl } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const socialImageUrl = absoluteUrl("/images/hero_exterior.png");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#14181c",
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Aluminium Designs | Custom Aluminium Doors, Windows & Steel Works Gauteng",
    template: "%s | Aluminium Designs"
  },
  description:
    "Top-rated custom aluminium doors, sliding windows, folding stackers, security gates, burglar bars, steel carports & glass balustrades across Gauteng, South Africa. SABS certified. Request your free quote today.",
  keywords: [
    "aluminium designs",
    "aluminium doors gauteng",
    "aluminium windows johannesburg",
    "pretoria aluminium",
    "security gates",
    "burglar bars",
    "steel carports",
    "glass shopfronts",
    "folding stacker doors",
    "sabs approved",
  ],
  authors: [{ name: "Aluminium Designs" }],
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Aluminium Designs",
    title: "Aluminium Designs | Custom Aluminium Doors, Windows & Steel Works Gauteng",
    description:
      "Custom manufacturing and professional installation of SABS & AAAMSA certified aluminium doors, windows, security gates, and steel structures across Gauteng.",
    ...(socialImageUrl
      ? { images: [{ url: socialImageUrl, alt: "Aluminium Designs installation" }] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Designs | Custom Aluminium Doors, Windows & Steel Works Gauteng",
    description:
      "Custom-tailored SABS approved aluminium and steel fabrication with free on-site measuring in Johannesburg, Pretoria, and Gauteng.",
    ...(socialImageUrl ? { images: [socialImageUrl] } : {}),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}#business`,
    name: businessContact.name,
    ...(absoluteUrl("/images/hero_exterior.png")
      ? { image: absoluteUrl("/images/hero_exterior.png") }
      : {}),
    telephone: businessContact.phoneE164,
    email: businessContact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessContact.streetAddress,
      addressLocality: businessContact.addressCity,
      addressRegion: businessContact.addressRegion,
      addressCountry: businessContact.addressCountry,
    },
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavigationLoader />
        <ScrollRevealObserver />
        <Header />
        <main className="flex-grow pt-16 md:pt-16">{children}</main>
        <Footer />
        <WhatsAppChatWidget />
        <QuotePrompt />
        <LeadGate />
        <ScrollToTop />
      </body>
    </html>
  );
}
