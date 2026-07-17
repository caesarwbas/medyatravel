import type { Locale, LocalizedText } from "@/types";

export const homePaths: Record<Locale, string> = {
  en: "/",
  de: "/de",
  ar: "/ar",
};

export const destinationsPaths: Record<Locale, string> = {
  en: "/en/destinations",
  de: "/de/reiseziele",
  ar: "/ar/destinations",
};

export const journeyPaths: Record<Locale, string> = {
  en: "/en/journeys/first-journey-to-syria",
  de: "/de/reisen/erste-syrienreise",
  ar: "/ar/journeys/first-journey-to-syria",
};

export const brochurePaths: Record<Locale, string> = {
  en: "/brochures/medya-travel-syria-journey-en.pdf",
  de: "/brochures/medya-travel-syria-journey-de.pdf",
  ar: "/brochures/medya-travel-syria-journey-ar.pdf",
};

export const legalPaths: Record<
  Locale,
  {
    imprint: string;
    privacy: string;
    cookies: string;
    terms: string;
  }
> = {
  en: {
    imprint: "/en/legal/imprint",
    privacy: "/en/legal/privacy",
    cookies: "/en/legal/cookies",
    terms: "/en/legal/terms",
  },
  de: {
    imprint: "/de/impressum",
    privacy: "/de/datenschutz",
    cookies: "/de/cookie-einstellungen",
    terms: "/de/agb",
  },
  ar: {
    imprint: "/ar/legal/imprint",
    privacy: "/ar/legal/privacy",
    cookies: "/ar/legal/cookies",
    terms: "/ar/legal/terms",
  },
};

export const localizeAnchor = (
  locale: Locale,
  anchor: string,
): string => `${homePaths[locale]}${anchor}`;

export const routeLabels: Record<
  "destinations" | "journey" | "catalogue" | "about",
  LocalizedText
> = {
  destinations: { en: "Destinations", de: "Reiseziele", ar: "الوجهات" },
  journey: { en: "The Journey", de: "Die Reise", ar: "الرحلة" },
  catalogue: { en: "Brochure", de: "Broschüre", ar: "البروشور" },
  about: { en: "About Us", de: "Über uns", ar: "من نحن" },
};
