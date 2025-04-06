'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import RecentProjects from '@/components/recentprojects';

export default function BusinessCardDesign() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <h1 className="text-4xl mx-4 font-bold text-black text-left mb-2 mt-5">Business Card Design Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mx-4 mb-5"></div>

      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/businesscard.jpg" alt="Business Card Design" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="mx-4 text-gray-600 text-lg mt-5 mb-8">
        At WOW Creation, we offer custom business card design services that make a lasting impression. A well-designed business card enhances your brand identity and leaves a professional impact on clients. Our expert designers create modern, minimalist, luxury, and creative business card designs tailored to your needs. Whether you need personalized branding, rebranding, or a fresh visual identity, we ensure your business cards reflect your brand’s style. We specialize in professional business card design, ensuring high-quality print-ready and digital business cards that stand out. Book a business card design consultation today and elevate your networking game!
      </p>
            <RecentProjects serviceFolder="business" title="Business" />

      <h2 className="text-2xl mx-4 font-bold text-gray-900 mb-4 text-left">Business Card Design Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mx-4 mb-5"></div>

      <DesignProcess />
      <Contact />
      <Footer />
    </div>
  );
}
