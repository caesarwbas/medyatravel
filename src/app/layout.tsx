import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { assets } from "@/data/assets";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medyatravel.de"),

  title: {
    default: "Syrien Reisen & Rundreisen | MEDYA TRAVEL Deutschland",
    template: "%s | MEDYA TRAVEL",
  },

  description:
    "Entdecken Sie Syrien mit MEDYA TRAVEL: sorgfältig geplante Rundreisen, Kulturreisen, exklusive Hotels und individuelle Reiseprogramme ab Deutschland.",

  keywords: [
    "Syrien Reisen",
    "Syrien Rundreise",
    "Reise nach Syrien",
    "Syrien Urlaub",
    "Syrien Kulturreise",
    "Damaskus Reise",
    "Aleppo Reise",
    "Palmyra Reise",
    "Syrien Reiseveranstalter",
    "MEDYA TRAVEL",
  ],

  authors: [
    {
      name: "MEDYA TRAVEL",
    },
  ],

  creator: "MEDYA TRAVEL",
  publisher: "MEDYA TRAVEL",

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
    url: "https://medyatravel.de",
    siteName: "MEDYA TRAVEL",
    title: "Syrien Reisen & Rundreisen | MEDYA TRAVEL Deutschland",
    description:
      "Entdecken Sie Syrien mit MEDYA TRAVEL: Rundreisen, Kulturreisen und individuelle Reiseprogramme ab Deutschland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEDYA TRAVEL – Syrien Reisen und Rundreisen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Syrien Reisen & Rundreisen | MEDYA TRAVEL",
    description:
      "Rundreisen, Kulturreisen und individuelle Reiseprogramme nach Syrien.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: assets.favicon,
    shortcut: assets.favicon,
    apple: assets.favicon,
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
      </body>
    </html>
  );
}