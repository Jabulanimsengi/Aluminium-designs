import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { businessContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Aluminium Designs collects and uses website monitoring and enquiry information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information we collect",
    body: "When you use this website, our first-party monitoring system may record your IP address, anonymous visitor and session identifiers, the pages you visit, referring page, timestamps, basic performance measurements, and clicks on navigation, WhatsApp, telephone, email, quotation, and directions links.",
  },
  {
    title: "Why we collect it",
    body: "We use this information to understand whether visitors engage with the website, distinguish new and repeat activity, measure enquiry-button usage, improve site performance and content, investigate technical problems, and protect the website against misuse.",
  },
  {
    title: "Storage and retention",
    body: "Monitoring records are stored in access-controlled systems available only to authorised administrators. We retain records only for as long as reasonably required for website monitoring, security, operational reporting, and any applicable legal obligations, after which they are deleted or de-identified.",
  },
  {
    title: "Sharing and your choices",
    body: "We do not sell monitoring information. Information may be processed by hosting or technical service providers supporting this website, or disclosed where required by law. You may contact us to ask whether we hold personal information about you or to request correction, deletion, or restriction where applicable.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-surface py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border border-outline-variant bg-surface-container-lowest p-6 shadow-sm sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Website privacy</p>
          <h1 className="mt-2 text-left font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-5xl">Privacy notice</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
            This notice explains the website information Aluminium Designs collects and how it is used for monitoring, enquiries, security, and service improvement.
          </p>

          <div className="mt-10 grid gap-8 border-t border-outline-variant pt-8 sm:grid-cols-2">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-left text-sm font-bold uppercase tracking-tight text-primary">{section.title}</h2>
                <p className="mt-3 text-xs leading-relaxed text-on-surface-variant">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 border border-outline-variant bg-surface-container-low p-5 sm:p-6">
            <h2 className="text-left text-sm font-bold uppercase tracking-tight text-primary">Contact us about privacy</h2>
            <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">
              Email <a className="font-bold text-primary underline" href={`mailto:${businessContact.email}`}>{businessContact.email}</a> with your request and enough information for us to respond.
            </p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-primary hover:text-secondary">
              Contact details <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
