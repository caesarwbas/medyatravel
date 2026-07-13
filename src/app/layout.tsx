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
  title: "MEDYA TRAVEL | Luxury Travel Experiences",
  description:
    "Bespoke luxury travel experiences across Syria and beyond. Reisen wie es sein sollte.",
  icons: {
    icon: assets.logoSlogan,
    apple: assets.logoSlogan,
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
