"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
  limit?: number;
  category?: "general" | "installation" | "pricing" | "all";
  locationName?: string;
  items?: { question: string; answer: string }[];
}

export default function FAQAccordion({ limit, category = "all", locationName, items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(locationName ? "loc-1" : items ? "svc-1" : "faq-1");

  const baseFiltered = faqs.filter((item) => category === "all" || item.category === category);

  const customItems = items
    ? items.map((item, i) => ({ id: `svc-${i + 1}`, ...item, category: "general" as const }))
    : [];

  const locationFaqs = locationName
    ? [
        {
          id: "loc-1",
          question: `Do you provide installations directly in ${locationName}?`,
          answer: `Yes! We have dedicated installation teams servicing ${locationName} and the surrounding areas. We arrange professional on-site measurements and consultations for all local residential and commercial projects (R250 in Johannesburg, R350 outside — credited back in full against your installation invoice).`,
          category: "general" as const,
        },
        {
          id: "loc-2",
          question: `What are the lead times for projects in ${locationName}?`,
          answer: `Because we manufacture everything locally in Gauteng, our lead times for ${locationName} properties are typically 2 to 4 weeks from deposit to final installation, depending on the scale of the design.`,
          category: "installation" as const,
        },
      ]
    : [];

  const finalFaqs = [...customItems, ...locationFaqs, ...baseFiltered].slice(
    0,
    limit || items?.length || faqs.length + 2,
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {finalFaqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`border transition-colors ${
              isOpen
                ? "bg-surface-container-lowest border-outline-variant"
                : "bg-surface-container-lowest border-outline-variant hover:border-accent"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFaq(faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq.id}`}
              className="flex items-center justify-between w-full p-5 text-left cursor-pointer"
            >
              <div className="flex items-center gap-3 pr-4">
                <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-sans font-bold text-primary leading-snug">{faq.question}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-outline shrink-0 transition-transform ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            <div
              id={`faq-panel-${faq.id}`}
              aria-hidden={!isOpen}
              className={`overflow-hidden transition-all ${
                isOpen ? "max-h-[1000px] border-t border-outline-variant" : "max-h-0"
              }`}
            >
              <div className="p-5 text-xs text-on-surface-variant leading-relaxed">{faq.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
