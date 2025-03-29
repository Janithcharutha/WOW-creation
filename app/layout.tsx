import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Define the fonts correctly
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Fullstack Website",
  description: "A fullstack application built with Next.js, providing a seamless experience for users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>My Fullstack Website</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`bg-gray-100 ${geistSans.variable} ${geistMono.variable}`}>
        <main className="container mx-auto p-6 h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
