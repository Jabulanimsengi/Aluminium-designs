"use client";

import { useState, type FormEvent } from "react";
import { LoaderCircle, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setMessage(result.message || "Unable to sign in. Please try again.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setMessage("Unable to reach the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="username" className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          autoFocus
          className="mt-2 w-full border border-outline-variant bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
      </div>
      <div>
        <label htmlFor="password" className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-2 w-full border border-outline-variant bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
      </div>

      {message ? (
        <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-primary/90 disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />}
        {isSubmitting ? "Signing in" : "Sign in"}
      </button>
    </form>
  );
}
