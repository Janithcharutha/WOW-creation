'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';

export default function SocialMediaDesign() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mt-5">Social Media Design Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mb-5"></div>

      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/socialmediadesign.jpg" alt="Social Media Branding" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8">
        At WOW Creation, we design stunning, high-impact social media graphics that enhance your brand’s online presence. Whether you need Facebook posts, Instagram stories, YouTube thumbnails, LinkedIn banners, or Twitter ads, our team creates engaging visuals tailored for each platform. We offer custom social media branding, promotional designs, animated graphics, and ad creatives to help your business stand out. Boost your social media engagement with our expertly crafted visuals. Book a design consultation today!
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Social Media Design Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5"></div>

      <DesignProcess />
      <Contact />
      <Footer />
    </div>
  );
}
