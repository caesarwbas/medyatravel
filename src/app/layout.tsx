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

  title: {
    default: "MEDYA TRAVEL | Reisen nach Syrien",
    template: "%s | MEDYA TRAVEL",
  },

  description:
    "Kuratiere Reisen nach Syrien mit MEDYA TRAVEL. Kulturreisen, private Rundreisen, ausgewählte Hotels und authentische Begegnungen.",

  keywords: [
    "Syrien Reisen",
    "Syrien Rundreise",
    "Reise nach Syrien",
    "Syrien Urlaub",
    "Syrien Kulturreise",
    "Damaskus Reise",
    "Aleppo Reise",
    "Palmyra Reise",
    "MEDYA TRAVEL",
  ],

  alternates: {
    canonical: "https://medyatravel.de",
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://medyatravel.de",
    siteName: "MEDYA TRAVEL",
    title: "MEDYA TRAVEL | Reisen nach Syrien",
    description:
      "Authentische und sorgfältig kuratierte Reisen durch Syrien für Reisende aus Deutschland.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/apple-icon",
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