import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syrien Reisen & Rundreisen | MEDYA TRAVEL Deutschland",
  description:
    "Entdecken Sie Syrien mit MEDYA TRAVEL: sorgfältig geplante Rundreisen, Kulturreisen und individuelle Reiseprogramme ab Deutschland.",
  alternates: {
    canonical: "/de",
    languages: {
      en: "/",
      "de-DE": "/de",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_GB", "ar_AR"],
    url: "https://medyatravel.de/de",
    siteName: "MEDYA TRAVEL",
    title: "Syrien Reisen & Rundreisen | MEDYA TRAVEL Deutschland",
    description:
      "Individuelle Rundreisen und Kulturreisen nach Syrien ab Deutschland.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEDYA TRAVEL – Reisen nach Syrien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syrien Reisen & Rundreisen | MEDYA TRAVEL",
    description:
      "Individuelle Rundreisen und Kulturreisen nach Syrien ab Deutschland.",
    images: ["/twitter-image.jpg"],
  },
};

export default function GermanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
