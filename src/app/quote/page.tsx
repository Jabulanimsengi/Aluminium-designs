import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { whatsappQuoteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description:
    "Request a free aluminium installation quotation from Aluminium Designs on WhatsApp.",
  robots: { index: false, follow: false },
};

export default function QuotePage() {
  redirect(whatsappQuoteUrl);
}
