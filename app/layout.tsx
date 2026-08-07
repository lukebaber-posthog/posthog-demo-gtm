import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTM trigger surface",
  description:
    "Buttons, inputs, and forms for a Google Tag Manager container to hook into.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-PDTMB52T" />
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
