"use client";

import { motion } from "framer-motion";
import { contactDetails } from "@/data/contact";

type IconProps = {
  className?: string;
};

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 20.5 11.8Z" />
      <path d="M8.2 7.8c.3-.6.7-.6 1-.6h.4c.2 0 .4.1.5.4l.9 2c.1.3.1.5-.1.8l-.7.9c-.2.2-.2.4 0 .7.5.9 1.2 1.7 2.1 2.2.3.2.5.2.7 0l1-1.1c.2-.2.4-.3.7-.1l2 .9c.3.1.4.3.4.5 0 .5-.2 1.3-.7 1.8-.6.6-1.5.9-2.4.7-1.3-.3-3-1-4.7-2.6-1.4-1.3-2.4-2.9-2.8-4.2-.3-.9 0-1.7.4-2.3Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M13.8 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.4-.1-1.3-.2-2.4-.2-2.4 0-4 1.4-4 4.2V10H8v3h2.6v8h3.2Z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const links = [
  {
    label: "WhatsApp",
    href: contactDetails.whatsappUrl,
    icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    href: contactDetails.instagramUrl,
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: contactDetails.facebookUrl,
    icon: FacebookIcon,
  },
  {
    label: "Email",
    href: `mailto:${contactDetails.generalEmail}`,
    icon: MailIcon,
  },
];

export default function SocialDock() {
  return (
    <motion.aside
      aria-label="Contact MEDYA TRAVEL"
      initial={{ opacity: 0, x: 20, y: 15 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-brand/75 p-1.5 shadow-2xl backdrop-blur-xl md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:flex-col"
    >
      {links.map(({ label, href, icon: Icon }) => {
        const isExternal = href.startsWith("http");

        return (
          <a
            key={label}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition duration-300 hover:bg-gold hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Icon className="h-5 w-5" />

            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded bg-brand px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white opacity-0 shadow-xl transition group-hover:opacity-100 md:block">
              {label}
            </span>
          </a>
        );
      })}
    </motion.aside>
  );
}