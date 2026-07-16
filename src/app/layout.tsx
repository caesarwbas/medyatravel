import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
  applicationName: "MEDYA TRAVEL",
  title: {
    default: "Luxury Travel to Syria | MEDYA TRAVEL Germany",
    template: "%s | MEDYA TRAVEL",
  },
  description:
    "Discover Syria with MEDYA TRAVEL through carefully curated private journeys, cultural tours, premium stays, and authentic encounters.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "de-DE": "/de",
      ar: "/ar",
    },
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
    locale: "en_GB",
    alternateLocale: ["de_DE", "ar_AR"],
    url: "https://medyatravel.de",
    siteName: "MEDYA TRAVEL",
    title: "Luxury Travel to Syria | MEDYA TRAVEL Germany",
    description:
      "Carefully curated private journeys and cultural travel experiences across Syria.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEDYA TRAVEL – Luxury travel to Syria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Travel to Syria | MEDYA TRAVEL",
    description:
      "Carefully curated private journeys and cultural travel experiences across Syria.",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/icon.png",
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-brand font-sans text-white">
        {children}
      </body>
    </html>
  );
}
