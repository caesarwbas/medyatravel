import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "رحلات إلى سوريا | MEDYA TRAVEL ألمانيا",
  description:
    "اكتشف سوريا مع MEDYA TRAVEL من خلال رحلات ثقافية وبرامج سياحية مصممة بعناية للمسافرين من ألمانيا.",
  alternates: {
    canonical: "/ar",
    languages: {
      "de-DE": "/",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    alternateLocale: ["de_DE"],
    url: "https://medyatravel.de/ar",
    siteName: "MEDYA TRAVEL",
    title: "رحلات إلى سوريا | MEDYA TRAVEL ألمانيا",
    description:
      "رحلات ثقافية وبرامج سياحية مصممة بعناية إلى سوريا للمسافرين من ألمانيا.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEDYA TRAVEL – رحلات إلى سوريا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "رحلات إلى سوريا | MEDYA TRAVEL",
    description: "رحلات ثقافية وبرامج سياحية مصممة بعناية إلى سوريا.",
    images: ["/twitter-image.jpg"],
  },
};

export default function ArabicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
