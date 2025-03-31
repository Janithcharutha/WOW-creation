'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import RecentProjects from '@/components/recentprojects';

export default function LabelDesign() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mt-5">Label Design Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mb-5"></div>

      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/labeldesign.jpg" alt="Custom Label Design" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8">
        At WOW Creation, we specialize in custom label design that enhances your product’s appeal and branding. Whether you need product labels, packaging labels, bottle labels, food labels, or sticker designs, we create high-quality, professional, and eye-catching labels tailored to your brand identity. Our expert designers ensure your custom labels are unique, creative, and ready for print or digital use. We offer branding consultation, rebranding solutions, and high-resolution label design for businesses of all sizes. Book a label design consultation today to get professional, brand-aligned labels that make your product stand out on shelves!
      </p>
      <RecentProjects serviceFolder="label" title="Label" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-4 text-left">Label Design Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5"></div>
      <DesignProcess />
      <Contact />
      <Footer />
    </div>
  );
}
