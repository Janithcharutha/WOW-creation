import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer"; 
// import HeroSection from "../components/heroSection";
    
// import WelcomeComponent from "../components/welcomeComponent";
// import StatsComponent from "../components/statsComponent";
// import ServicesComponent from "../components/servicesComponent";
// import ImageSlider from "../components/imageSlider";


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
        {/* <Navbar />
        <HeroSection />
        <WelcomeComponent />
       
        <ServicesComponent />
        <ImageSlider /> */}
        <main className="container mx-auto p-6">{children}</main>
        {/* <StatsComponent />
        <Footer /> */}
      </body>
    </html>
  );
}
