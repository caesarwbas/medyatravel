"use client";

import { FormEvent, useState } from "react";
import { contactDetails } from "@/data/contact";
import { formCopy } from "@/data/new-copy";
import type { Locale } from "@/types";

interface RequestFormProps {
  locale: Locale;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  country: string;
  travellers: string;
  date: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  country: "",
  travellers: "",
  date: "",
  message: "",
};

export default function RequestForm({ locale }: RequestFormProps) {
  const copy = formCopy[locale];
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const required = [form.name, form.email, form.phone, form.country, form.travellers];
    if (required.some((value) => !value.trim())) {
      setError(copy.required);
      return;
    }

    const message = [
      copy.whatsappIntro,
      "",
      `${copy.name}: ${form.name}`,
      `${copy.email}: ${form.email}`,
      `${copy.phone}: ${form.phone}`,
      `${copy.country}: ${form.country}`,
      `${copy.travellers}: ${form.travellers}`,
      `${copy.date}: ${form.date || "-"}`,
      `${copy.message}: ${form.message || "-"}`,
    ].join("\n");

    window.open(`${contactDetails.whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "mt-2 min-h-12 w-full border border-white/15 bg-brand/60 px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-gold";

  return (
    <section id="request" className="relative overflow-hidden bg-brand py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute -right-36 top-20 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{copy.eyebrow}</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">{copy.title}</h2>
          <p className="mt-6 max-w-lg text-sm leading-8 text-light-gray sm:text-base">{copy.description}</p>
        </div>

        <form onSubmit={submit} className="grid gap-5 border border-white/10 bg-charcoal/80 p-5 shadow-2xl backdrop-blur-sm sm:grid-cols-2 sm:p-8">
          <label className="text-xs font-medium text-white/70">
            {copy.name} *
            <input value={form.name} onChange={(event) => update("name", event.target.value)} className={inputClass} autoComplete="name" />
          </label>
          <label className="text-xs font-medium text-white/70">
            {copy.email} *
            <input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} className={inputClass} autoComplete="email" />
          </label>
          <label className="text-xs font-medium text-white/70">
            {copy.phone} *
            <input value={form.phone} onChange={(event) => update("phone", event.target.value)} className={inputClass} autoComplete="tel" dir="ltr" />
          </label>
          <label className="text-xs font-medium text-white/70">
            {copy.country} *
            <input value={form.country} onChange={(event) => update("country", event.target.value)} className={inputClass} autoComplete="country-name" />
          </label>
          <label className="text-xs font-medium text-white/70">
            {copy.travellers} *
            <input type="number" min="1" max="50" value={form.travellers} onChange={(event) => update("travellers", event.target.value)} className={inputClass} />
          </label>
          <label className="text-xs font-medium text-white/70">
            {copy.date}
            <input type="date" value={form.date} onChange={(event) => update("date", event.target.value)} className={inputClass} />
          </label>
          <label className="text-xs font-medium text-white/70 sm:col-span-2">
            {copy.message}
            <textarea value={form.message} onChange={(event) => update("message", event.target.value)} className={`${inputClass} min-h-32 py-3`} />
          </label>

          {error ? <p role="alert" className="text-sm text-red-300 sm:col-span-2">{error}</p> : null}

          <div className="sm:col-span-2">
            <button type="submit" className="min-h-13 w-full bg-gold px-7 text-xs font-semibold uppercase tracking-[0.18em] text-brand transition hover:bg-bronze sm:w-auto">
              {copy.submit}
            </button>
            <p className="mt-4 max-w-2xl text-[11px] leading-5 text-white/40">{copy.privacy}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
