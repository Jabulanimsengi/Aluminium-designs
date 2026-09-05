import type { Metadata } from "next";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description:
    "Request a free aluminium installation quotation from Aluminium Designs.",
  robots: { index: false, follow: false },
};

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <div className="rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-6 sm:p-10 shadow-sm">
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
          No-obligation quote
        </p>
        <h1 className="mt-3 text-left font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
          Request your free quote
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
          Tell us who to contact, where the project is, and roughly what you plan to spend.
          We&apos;ll continue the conversation on WhatsApp.
        </p>

        <div className="mt-8">
          <LeadCaptureForm source="quote" />
        </div>
      </div>
    </div>
  );
}
