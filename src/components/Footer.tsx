import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer id="book" className="border-t border-white/5 bg-brand py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="relative h-12 w-44">
              <Image
                src={assets.logoSlogan}
                alt="MEDYA TRAVEL"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-light-gray">
              Bespoke luxury travel across Syria. Reisen wie es sein sollte.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-luxury text-gold">
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-gray transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-luxury text-gold">
              Book Your Journey
            </p>
            <p className="text-sm leading-relaxed text-light-gray">
              Contact us to begin planning your private Syrian expedition.
            </p>
            <a
              href="mailto:info@medyatravel.com"
              className="mt-4 inline-block border border-gold px-5 py-2.5 text-xs font-medium uppercase tracking-luxury text-gold transition-all hover:bg-gold hover:text-brand"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-light-gray">
            &copy; {new Date().getFullYear()} MEDYA TRAVEL. All rights reserved.
          </p>
          <div className="relative h-8 w-28 opacity-70">
            <Image
              src={assets.partnerLogo}
              alt="Syrian partner"
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
