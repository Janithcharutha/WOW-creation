'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import RecentProjects from '@/components/recentprojects';

export default function PackagingDesign() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2  mx-4 mt-5">Packaging Design Services</h1>
      <div className="w-40 h-1 bg-[#fdd302]  mx-4 mx-left mb-5"></div>

      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/packagingdesign.jpg" alt="Custom Packaging Design" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8 mx-4">
        At WOW Creation, we offer custom packaging design solutions that enhance your brand's visual appeal and product presentation. Our expert designers create eye-catching, functional, and brand-consistent packaging that attracts customers and strengthens your brand identity. Whether you need product packaging, box design, label design, or eco-friendly packaging, we deliver high-quality, market-ready designs tailored to your brand. We specialize in retail packaging, e-commerce packaging, food & beverage packaging, and luxury packaging, ensuring that every detail aligns with your marketing goals. Book a packaging design consultation today and transform your product packaging into a powerful branding tool!
      </p>
<RecentProjects serviceFolder="packaging" title="Packaging" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left mx-4">Packaging Design Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-4 mx-left mb-5"></div>

      <DesignProcess />
      <Contact />
      <Footer />
    </div>
  );
}
