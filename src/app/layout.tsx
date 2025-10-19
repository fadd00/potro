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
  keywords: "Andhika Hutama, Full Stack Developer, Web Developer, Game Developer, IT Support, Freelance, Backend Developer, Frontend Developer, Next.js, React, TypeScript, JavaScript, ElysiaJS, Bun, Turso, Laravel, PHP, SQL, MySQL, Prisma, .NET Framework, C#, C, Godot, GDScript, GameSeed, Tailwind CSS, Vercel, Portfolio, charlotte essence, Alfheimr, 5 Hari Lagi?!, ExionPW.com, Indonesia",
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
  icons: {
    icon: "/favicon.ico",
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
