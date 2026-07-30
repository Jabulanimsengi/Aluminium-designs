"use client";

import React, { useMemo, useState } from "react";
import {
  AlertCircle, ArrowRight, CheckCircle, FileText, Mail,
  MessageCircle, Send, ShieldAlert, Upload, X,
} from "lucide-react";
import { services } from "@/data/services";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  serviceNeeded: string;
  projectType: "residential" | "commercial";
  description: string;
  contactMethod: "whatsapp" | "phone" | "email";
};

type SubmissionState =
  | { status: "idle" }
  | { status: "sent"; reference: string }
  | { status: "fallback"; reference: string; message?: string }
  | { status: "error"; message: string; errors?: Record<string, string> };

const emptyForm: FormState = {
  fullName: "", phone: "", email: "", location: "",
  serviceNeeded: "", projectType: "residential", description: "", contactMethod: "whatsapp",
};

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  const serviceTitle = services.find((s) => s.id === formData.serviceNeeded)?.title || formData.serviceNeeded;

  const quoteSummary = useMemo(() => {
    const reference = submission.status === "sent" || submission.status === "fallback" ? submission.reference : "pending";
    return [ `Reference: ${reference}`, `Name: ${formData.fullName}`, `Phone: ${formData.phone}`, `Email: ${formData.email}`, `Location: ${formData.location}`, `Service: ${serviceTitle}`, `Project type: ${formData.projectType}`, "", formData.description ].join("\n");
  }, [formData, serviceTitle, submission]);

  const whatsappFallbackUrl = `https://wa.me/27871234567?text=${encodeURIComponent(`Hi Aluminium Designs, please help with this quote request:\n\n${quoteSummary}`)}`;
  const emailFallbackUrl = `mailto:estimates@aluminiumdesigns.co.za?subject=${encodeURIComponent(`Quote request ${submission.status === "sent" || submission.status === "fallback" ? submission.reference : ""}`)}&body=${encodeURIComponent(quoteSummary)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setDragActive(e.type === "dragenter" || e.type === "dragover"); };
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if (e.dataTransfer.files?.[0]) setUploadedFile(e.dataTransfer.files[0]); };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) setUploadedFile(e.target.files[0]); };
  const resetForm = () => { setSubmission({ status: "idle" }); setUploadedFile(null); setFormData(emptyForm); };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setIsSubmitting(true); setSubmission({ status: "idle" });
    const data = new FormData(e.currentTarget);
    if (uploadedFile) data.set("attachment", uploadedFile);
    try {
      const response = await fetch("/api/quote", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok || !result.ok) { setSubmission({ status: "error", message: result.message || "Please check the details and try again.", errors: result.errors }); return; }
      if (result.delivery === "fallback_required") { setSubmission({ status: "fallback", reference: result.reference, message: result.message }); return; }
      setSubmission({ status: "sent", reference: result.reference });
    } catch { setSubmission({ status: "error", message: "Could not submit from this browser. Please use WhatsApp or email." }); }
    finally { setIsSubmitting(false); }
  };

  const inputClass = "w-full border border-outline-variant bg-surface px-4 py-3 text-sm text-primary placeholder-outline font-sans focus:outline-none focus:border-primary transition-colors rounded-xl";
  const labelClass = "mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-outline";

  if (submission.status === "sent" || submission.status === "fallback") {
    return (
      <div className="mx-auto max-w-2xl animate-fade-in border border-outline-variant bg-surface-container-lowest p-8 text-center md:p-12 rounded-2xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-outline-variant bg-surface-container text-secondary rounded-full">
          {submission.status === "sent" ? <CheckCircle className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
        </div>
        <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-primary">
          {submission.status === "sent" ? "Quote Request Sent" : "Quote Details Ready to Send"}
        </h3>
        <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
          {submission.status === "sent" ? (
            <>Thank you, <strong className="text-primary">{formData.fullName}</strong>. Your request was delivered.</>
          ) : (
            "Your details passed validation, but this site is not connected to an automatic delivery destination. Send via WhatsApp or email below."
          )}
        </p>

        <div className="mx-auto mt-6 max-w-md border border-outline-variant bg-surface-container p-4 text-left text-xs rounded-xl">
          <p className="font-mono text-[10px] text-outline uppercase"><strong>Reference:</strong> {submission.reference}</p>
          <p className="font-mono text-[10px] text-outline uppercase"><strong>Service:</strong> {serviceTitle}</p>
          <p className="font-mono text-[10px] text-outline uppercase"><strong>Sector:</strong> {formData.projectType.toUpperCase()}</p>
          <p className="font-mono text-[10px] text-outline uppercase"><strong>Contact:</strong> {formData.contactMethod.toUpperCase()}</p>
          {uploadedFile && <p className="font-mono text-[10px] text-outline uppercase"><strong>File:</strong> {uploadedFile.name}</p>}
        </div>

        {submission.status === "fallback" && (
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a href={whatsappFallbackUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba5a] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-white transition-colors">
              <MessageCircle className="mr-2 h-4 w-4" /> Send on WhatsApp
            </a>
            <a href={emailFallbackUrl}
              className="inline-flex items-center justify-center rounded-full border border-outline-variant bg-surface hover:bg-surface-container px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-secondary transition-colors">
              <Mail className="mr-2 h-4 w-4" /> Send by Email
            </a>
          </div>
        )}

        <button onClick={resetForm}
          className="mt-8 inline-flex cursor-pointer items-center font-mono text-[11px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
          Submit Another Request <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-outline-variant bg-surface-container-lowest p-6 sm:p-10 rounded-2xl">
      {submission.status === "error" && (
        <div className="mb-6 border border-outline-variant bg-surface-container p-4 text-left text-xs text-on-surface-variant rounded-xl">
          <div className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-on-tertiary-container" />
            <div>
              <p className="font-bold">{submission.message}</p>
              {submission.errors && (
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px]">
                  {Object.entries(submission.errors).map(([field, message]) => <li key={field}>{message}</li>)}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {(["fullName","phone","email","location"] as const).map((field) => (
          <div key={field}>
            <label htmlFor={field} className={labelClass}>
              {field === "fullName" ? "Full Name" : field === "phone" ? "Phone Number" : field === "email" ? "Email Address" : "Project Location"} <span className="text-on-tertiary-container">*</span>
            </label>
            <input type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} id={field} name={field} required
              value={formData[field]} onChange={handleChange}
              placeholder={field === "phone" ? "082 123 4567" : field === "email" ? "john@example.com" : field === "location" ? "e.g. Sandton, Johannesburg" : "Your name"}
              className={inputClass} />
          </div>
        ))}

        <div>
          <label htmlFor="serviceNeeded" className={labelClass}>Service Required <span className="text-on-tertiary-container">*</span></label>
          <select id="serviceNeeded" name="serviceNeeded" required value={formData.serviceNeeded} onChange={handleChange}
            className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select a service...</option>
            {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>
        </div>

        <div>
          <span className={labelClass}>Project Type <span className="text-on-tertiary-container">*</span></span>
          <div className="grid grid-cols-2 gap-3">
            {["residential","commercial"].map((type) => (
              <label key={type}
                className={`flex cursor-pointer items-center justify-center border p-3 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors rounded-full ${
                  formData.projectType === type
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-surface border-outline-variant text-secondary hover:bg-surface-container"
                }`}>
                <input type="radio" name="projectType" value={type} checked={formData.projectType === type} onChange={handleChange} className="sr-only" />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className={labelClass}>Project Description <span className="text-on-tertiary-container">*</span></label>
          <textarea id="description" name="description" required rows={4} value={formData.description} onChange={handleChange}
            placeholder="Tell us what you want: which rooms, what style, any preferences..."
            className={`${inputClass} resize-none`} />
        </div>

        <div className="sm:col-span-2">
          <span className={labelClass}>Upload Layout, Plan, or Photo (Optional)</span>
          <div onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop}
            className={`border-2 border-dashed p-6 text-center transition-colors rounded-2xl ${
              dragActive ? "border-primary bg-surface-container" : uploadedFile ? "border-primary bg-surface-container" : "border-outline-variant bg-surface hover:border-primary"
            }`}>
            <input type="file" id="file-upload" name="attachment" className="hidden" accept=".pdf,.png,.jpg,.jpeg,.dwg" onChange={handleFileChange} />
            {uploadedFile ? (
              <div className="mx-auto flex max-w-md items-center justify-between border border-outline-variant bg-surface p-3 rounded-xl">
                <div className="flex min-w-0 items-center gap-3 text-left">
                  <div className="flex h-8 w-8 items-center justify-center border border-outline-variant bg-surface-container text-secondary rounded-xl"><FileText className="h-4 w-4" /></div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-sans font-bold text-primary">{uploadedFile.name}</p>
                    <p className="font-mono text-[10px] text-outline">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button type="button" onClick={() => setUploadedFile(null)} className="p-1 text-outline hover:text-primary transition-colors"><X className="h-4 w-4" /></button>
              </div>
            ) : (
              <label htmlFor="file-upload" className="block cursor-pointer">
                <Upload className="mx-auto mb-2 h-8 w-8 text-outline" />
                <p className="text-xs text-on-surface-variant">Drag and drop files, or <span className="font-bold text-primary hover:underline">browse</span></p>
                <p className="mt-1 font-mono text-[10px] text-outline uppercase">PDF, JPG, PNG, CAD (max 10MB)</p>
              </label>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <span className={labelClass}>Preferred Contact Method <span className="text-on-tertiary-container">*</span></span>
          <div className="grid grid-cols-3 gap-3">
            {["whatsapp","phone","email"].map((method) => (
              <label key={method}
                className={`flex cursor-pointer items-center justify-center border p-3 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors rounded-full ${
                  formData.contactMethod === method
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-surface border-outline-variant text-secondary hover:bg-surface-container"
                }`}>
                <input type="radio" name="contactMethod" value={method} checked={formData.contactMethod === method} onChange={handleChange} className="sr-only" />
                {method}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="my-8 border-t border-outline-variant" />

      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-start gap-2.5 text-left text-xs text-outline">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
          <p>Your information is secure. We only use your details to provide structural consultation and estimates.</p>
        </div>
        <button type="submit" disabled={isSubmitting}
          className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-secondary text-on-primary px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors disabled:opacity-50 sm:w-auto">
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : (
            <span className="flex items-center">Request Free Estimate <Send className="ml-2 h-4 w-4" /></span>
          )}
        </button>
      </div>
    </form>
  );
}
