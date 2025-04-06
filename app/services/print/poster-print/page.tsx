'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';

import RecentProjects from '@/components/recentprojects';
export default function PosterPrint() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mt-5 mx-4">Poster Print Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>
      
      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/poster.jpg" alt="Poster Print Services" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8 mx-4">
        At WOW Creation, we specialize in custom poster printing that enhances your brand’s visual identity. Whether you need event posters, promotional posters, advertising posters, or digital posters, our expert designers create high-quality visuals tailored to your branding strategy. We provide rebranding solutions, graphic design expertise, and branding consultation to ensure your posters align with your business goals. Book a poster print consultation today and let’s create eye-catching designs that make an impact!
      </p>
<RecentProjects serviceFolder="posterprint" title="Poster" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left mx-4">Poster Print Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>
      
      <DesignProcess />
      <Contact />  
      <Footer />
    </div>
  );
}
