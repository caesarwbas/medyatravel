import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { contactDetails } from "@/data/contact";
import { navLinks } from "@/data/navigation";

type IconProps = {
  className?: string;
};

function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.3 3.8 9.7 7c.3.4.3 1-.1 1.4l-1.4 1.4a14 14 0 0 0 6 6l1.4-1.4c.4-.4 1-.4 1.4-.1l3.2 2.4c.5.4.6 1 .3 1.5l-1 1.7c-.4.7-1.2 1.1-2 1-7.7-.9-13.6-6.8-14.5-14.5-.1-.8.3-1.6 1-2l1.7-1c.6-.3 1.2-.1 1.6.4Z" />
    </svg>
  );
}

function SocialIcon({ type }: { type: "instagram" | "facebook" }) {
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M13.8 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.4-.1-1.3-.2-2.4-.2-2.4 0-4 1.4-4 4.2V10H8v3h2.6v8h3.2Z" />
    </svg>
  );
}

const bookingLink =
  "mailto:booking@medyatravel.de?subject=Private%20Syria%20Journey%20Enquiry";

export default function Footer() {
  return (
    <footer
      id="book"
      className="relative overflow-hidden border-t border-white/10 bg-brand py-14 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.7fr_1.1fr]">
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-4"
              aria-label="MEDYA TRAVEL home"
            >
              <span className="relative h-20 w-20 overflow-hidden rounded-full border border-gold/60 shadow-[0_0_30px_rgba(199,156,89,0.2)]">
                <Image
                  src={assets.favicon}
                  alt="MEDYA TRAVEL logo"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </span>

              <span>
                <span className="block font-serif text-2xl tracking-[0.12em] text-white">
                  MEDYA TRAVEL
                </span>
                <span className="block text-[9px] uppercase tracking-[0.32em] text-gold">
                  Reisen wie es sein sollte
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-light-gray">
              Curated private journeys across Syria, connecting travelers from
              Germany with history, culture, hospitality, and extraordinary
              human experiences.
            </p>

            <Link
              href={bookingLink}
              className="mt-7 inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand transition hover:bg-transparent hover:text-gold"
            >
              Plan Your Journey
            </Link>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
              Navigate
            </h2>

            <nav className="mt-6 flex flex-col gap-4" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/65 transition hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
              Contact
            </h2>

            <div className="mt-6 space-y-5">
              <a
                href={`mailto:${contactDetails.generalEmail}`}
                className="group flex items-start gap-3"
              >
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40">
                    General enquiries
                  </span>
                  <span className="mt-1 block text-sm text-white/75 transition group-hover:text-gold">
                    {contactDetails.generalEmail}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${contactDetails.bookingEmail}`}
                className="group flex items-start gap-3"
              >
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Bookings
                  </span>
                  <span className="mt-1 block text-sm text-white/75 transition group-hover:text-gold">
                    {contactDetails.bookingEmail}
                  </span>
                </span>
              </a>

              <a
                href={contactDetails.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
              >
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-white/40">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm text-white/75 transition group-hover:text-gold">
                    {contactDetails.phoneDisplay}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={contactDetails.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="MEDYA TRAVEL on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:bg-gold hover:text-brand"
              >
                <SocialIcon type="instagram" />
              </a>

              <a
                href={contactDetails.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="MEDYA TRAVEL on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:bg-gold hover:text-brand"
              >
                <SocialIcon type="facebook" />
              </a>

              <div className="ml-2 text-xs leading-5 text-white/45">
                <div>{contactDetails.instagramHandle}</div>
                <div>{contactDetails.facebookHandle}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MEDYA TRAVEL. All rights reserved.
          </p>

          <a
            href={contactDetails.website}
            className="transition hover:text-gold"
          >
            medyatravel.de
          </a>
        </div>
      </div>
    </footer>
  );
}