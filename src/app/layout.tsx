import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { assets } from "@/data/assets";
import "./globals.css";

const siteUrl = "https://medyatravel.de";
const siteName = "MEDYA TRAVEL";
const defaultTitle = "Syrien Reisen ab Deutschland | MEDYA TRAVEL";
const defaultDescription =
  "Individuelle und geführte Syrien-Reisen ab Deutschland: Damaskus, Aleppo, Palmyra, Tartus und weitere Reiseziele mit sorgfältig ausgewählten Hotels, Transfers und lokaler Betreuung.";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Syrien Reisen",
    "Syrien Rundreise",
    "Reise nach Syrien",
    "Syrien Urlaub",
    "Syrien Kulturreise",
    "Syrien Gruppenreise",
    "Damaskus Reise",
    "Aleppo Reise",
    "Palmyra Reise",
    "Syrien Reiseveranstalter Deutschland",
    "MEDYA TRAVEL",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "travel",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: assets.banner,
        width: 1200,
        height: 630,
        alt: "Syrien-Reisen mit MEDYA TRAVEL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [assets.banner],
  },
  icons: {
    icon: assets.favicon,
    shortcut: assets.favicon,
    apple: assets.favicon,
  },
  manifest: "/manifest.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "Organization"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: assets.logoSlogan,
  image: assets.banner,
  description: defaultDescription,
  email: "info@medyatravel.de",
  areaServed: [
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Syrien" },
  ],
  knowsAbout: [
    "Syrien-Reisen",
    "Kulturreisen",
    "Gruppenreisen",
    "Private Rundreisen",
    "Damaskus",
    "Aleppo",
    "Palmyra",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@medyatravel.de",
    availableLanguage: ["de", "en", "ar"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-brand font-sans text-white">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
