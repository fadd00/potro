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
  title: "Andhika Hutama - Full Stack Developer",
  description: "Portfolio of Andhika Hutama - Full Stack Developer specializing in web development, game development, and modern technologies.",
  keywords: "Andhika Hutama, Full Stack Developer, Web Developer, Game Developer, Next.js, Laravel, React, TypeScript, PHP, MySQL, Godot, GameSeed, IT Support, Freelance Developer, Indonesia",
  authors: [{ name: "Andhika Hutama" }],
  creator: "Andhika Hutama",
  verification: {
    google: "_Dz0FjWvJxkW_Dj3budrOn-VTXkYrFTp5Setl_KwpEU",
  },
  openGraph: {
    title: "Andhika Hutama - Full Stack Developer",
    description: "Portfolio of Andhika Hutama - Full Stack Developer specializing in web development, game development, and modern technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Andhika Hutama Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andhika Hutama - Full Stack Developer",
    description: "Portfolio of Andhika Hutama - Full Stack Developer specializing in web development, game development, and modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
