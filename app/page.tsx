import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import WelcomeComponent from '../components/welcomecomponent';
import ImageSlider from '../components/imageslider';
import ServicesComponent from '../components/servicescomponent';
import Footer from '../components/footer';
import DesignServices from '../components/designservices';
import Testimonial from '../components/testimonial';
import "./globals.css";

// Define the fonts correctly
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--geist-sans',
});

export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>My Fullstack Website</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`bg-gray-100 ${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <HeroSection />
        <WelcomeComponent />
        <DesignServices /> 
        <ImageSlider />
        <ServicesComponent />
        
        <Testimonial />
        <Footer />
      </body>
    </html>
  );
}
