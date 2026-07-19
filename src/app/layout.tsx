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
    default: "Syrien Reisen & Rundreisen | MEDYA TRAVEL Deutschland",
    template: "%s | MEDYA TRAVEL",
  },
  description:
    "Entdecken Sie Syrien mit MEDYA TRAVEL: sorgfältig geplante Rundreisen, Kulturreisen und individuelle Reiseprogramme ab Deutschland.",
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
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
    locale: "de_DE",
    alternateLocale: ["ar_AR"],
    url: "https://medyatravel.de",
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
      lang="de"
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
