'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';

import RecentProjects from '@/components/recentprojects';
export default function FlyerPrint() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mt-5 mx-4">Flyer Print Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>
      
      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/flyer.jpg" alt="Flyer Print Services" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8 mx-4">
        At WOW Creation, we specialize in custom flyer printing that enhances your brand’s visual identity. Whether you need digital flyers, promotional flyers, event flyers, or print flyers, our expert designers create high-quality visuals tailored to your branding strategy. We provide rebranding solutions, graphic design expertise, and branding consultation to ensure your flyers align with your business goals. Book a flyer print consultation today and let’s create eye-catching designs that make an impact!
      </p>
<RecentProjects serviceFolder="flyerprint" title="Flyer" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left mx-4">Flyer Print Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>
      
      <DesignProcess />
      <Contact />  
      <Footer />
    </div>
  );
}