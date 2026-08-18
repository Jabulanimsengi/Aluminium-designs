const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteUrl = configuredSiteUrl || "https://www.aluminiumdesigns.co.za";

export const businessContact = {
  name: "Aluminium Designs",
  phone: "071 612 2439",
  phoneE164: "+27716122439",
  email: "info@aluminiumdesigns.co.za",
  streetAddress: "755 Sontonga Road",
  addressLocality: "Moleleki Ext 1",
  addressCity: "Katlehong",
  addressRegion: "Gauteng",
  addressCountry: "ZA",
  fullAddress: "755 Sontonga Road, Moleleki Ext 1, Katlehong, Gauteng, South Africa",
} as const;

export const businessHours = {
  weekdays: "08:00 - 17:00",
  weekends: "Closed",
  appointmentNote: "Home measurements available by appointment",
} as const;

const whatsappPhone = businessContact.phoneE164.replace(/\D/g, "");

export function getWhatsAppQuoteUrl(message: string) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const whatsappQuoteUrl = getWhatsAppQuoteUrl(
  "Hi Aluminium Designs, I'd like to request a quotation for an aluminium installation at my property."
);

export function getWhatsAppLeadUrl(lead: {
  firstName: string;
  surname: string;
  phone: string;
  email: string;
  location: string;
  budget: string;
}) {
  const name = [lead.firstName, lead.surname].filter(Boolean).join(" ");
  const message = [
    "Hi Aluminium Designs, I'd like a quote.",
    "",
    `Name: ${name}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "",
    `Location: ${lead.location}`,
    `Budget: ${lead.budget}`,
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
