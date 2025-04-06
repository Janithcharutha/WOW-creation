import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";  // Corrected imports
import "./globals.css";
import { CloudinaryProvider } from '../components/providers/CloudinaryProvider';

// Define the fonts with correct names
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "My Fullstack Website",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gray-100">
        <CloudinaryProvider>
          <main className="mx-auto w-full  ">
            {children}
          </main>
        </CloudinaryProvider>
      </body>
    </html>
  );
}