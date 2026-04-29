import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2026 GTL Campaign Proposal",
  description: "Join Strategies proposal for the 2026 Global Teen Leaders campaign.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nhp6oel.css" />
      </head>
      <body className="min-h-full bg-limestone text-ink antialiased">{children}</body>
    </html>
  );
}
