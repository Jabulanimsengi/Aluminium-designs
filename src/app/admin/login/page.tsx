import type { Metadata } from "next";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import AdminLoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false, noarchive: true },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-surface-container-low px-4 py-12 sm:py-20">
      <div className="mx-auto w-full max-w-md border border-outline-variant bg-surface-container-lowest p-6 shadow-sm sm:p-9">
        <div className="flex h-12 w-12 items-center justify-center bg-primary text-white">
          <LockKeyhole className="h-6 w-6" />
        </div>
        <p className="mt-7 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
          Private dashboard
        </p>
        <h1 className="mt-2 text-left text-3xl font-bold uppercase tracking-tight text-primary">
          Admin login
        </h1>
        <p className="mt-3 text-sm leading-6 text-on-surface-variant">
          Sign in to view visitor activity, WhatsApp clicks, enquiries, and site performance.
        </p>

        <AdminLoginForm />

        <div className="mt-7 flex items-start gap-3 border-t border-outline-variant pt-5 text-xs text-on-surface-variant">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
          <p>Your session is protected and expires automatically after 8 hours.</p>
        </div>
      </div>
    </div>
  );
}
