import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import NavigationLoader from "@/components/NavigationLoader";
import QuotePrompt from "@/components/QuotePrompt";
import WorkVideosModal from "@/components/WorkVideosModal";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import LeadGate from "@/components/LeadGate";
import { absoluteUrl, businessContact, siteUrl } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
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
    priceRange: "R1500 - R85000",
    currenciesAccepted: "ZAR",
    paymentAccepted: "Cash, Credit Card, Debit Card, EFT",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessContact.streetAddress,
      addressLocality: businessContact.addressCity,
      addressRegion: businessContact.addressRegion,
      postalCode: businessContact.postalCode,
      addressCountry: businessContact.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessContact.geo.latitude,
      longitude: businessContact.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "City of Johannesburg" },
      { "@type": "AdministrativeArea", name: "City of Tshwane" },
      { "@type": "AdministrativeArea", name: "City of Ekurhuleni" },
      { "@type": "AdministrativeArea", name: "West Rand" },
      { "@type": "AdministrativeArea", name: "Sedibeng" },
      { "@type": "AdministrativeArea", name: "Gauteng" },
    ],
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="geo.region" content="ZA-GT" />
        <meta name="geo.placename" content="Katlehong, Gauteng" />
        <meta name="geo.position" content="-26.3458;28.1633" />
        <meta name="ICBM" content="-26.3458, 28.1633" />
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed font-sans">
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
        <WorkVideosModal />
        <LeadGate />
        <ScrollToTop />
      </body>
    </html>
  );
}
