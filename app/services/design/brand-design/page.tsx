'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import RecentProjects from '@/components/recentprojects';
import HotDeals from '@/components/HotDeals';

export default function BrandDesign() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2  mx-4 mt-5">Brand Design Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>
      
      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/brand.jpg" alt="Banner Design" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8 mx-4">
        At WOW Creation, we specialize in custom design and offer expert branding design solutions. From graphic design to logo design, our team creates creative design that strengthens your brand identity and makes your business stand out. We provide a range of design services, including web design, UX/UI design, and print design, all tailored to meet your unique needs. Whether you need responsive design for your website or a complete rebranding strategy, our design solutions are crafted to elevate your brand. Book a design consultation today to get started on building a compelling visual identity that resonates with your audience.
      </p>
      <HotDeals serviceFolder="brand" title="Banner " />
      <RecentProjects serviceFolder="brand" title="Brand" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mx-4 text-left">Brand Identity Design Process</h2>
    
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>
      <DesignProcess />
      <Contact/>  
      <Footer/>
    </div>
  );
}
