import DocumentLocale from "@/components/DocumentLocale";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialDock from "@/components/SocialDock";
import { legalDocuments, type LegalDocumentType } from "@/data/legal";
import { legalPaths } from "@/data/routes";
import type { Locale } from "@/types";

interface LegalPageProps {
  locale: Locale;
  type: LegalDocumentType;
}

export default function LegalPage({ locale, type }: LegalPageProps) {
  const document = legalDocuments[locale][type];
  const direction = locale === "ar" ? "rtl" : "ltr";
  const languagePaths = {
    en: legalPaths.en[type],
    de: legalPaths.de[type],
    ar: legalPaths.ar[type],
  };

  return (
    <div lang={locale} dir={direction} className={`site-${locale}`}>
      <DocumentLocale locale={locale} />
      <Navbar locale={locale} languagePaths={languagePaths} />

      <main className="min-h-screen bg-brand pb-24 pt-36">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">MEDYA TRAVEL</p>
          <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">{document.title}</h1>
          <p className="mt-4 text-sm text-white/40">{document.updated}</p>

          {document.warning ? (
            <div className="mt-10 border-s-4 border-gold bg-gold/10 p-5 text-sm leading-7 text-white/80">
              {document.warning}
            </div>
          ) : null}

          <div className="mt-12 space-y-10">
            {document.sections.map((section) => (
              <section key={section.heading} className="border-t border-white/10 pt-8">
                <h2 className="font-serif text-3xl text-white">{section.heading}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-8 text-light-gray sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer locale={locale} />
      <SocialDock locale={locale} />
    </div>
  );
}
