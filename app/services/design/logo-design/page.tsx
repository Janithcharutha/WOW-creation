'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import RecentProjects from '@/components/recentprojects';
export default function LogoDesign() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mt-5 mx-4">Logo Design Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-4 mx-left mb-5 "></div>
      
      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/logod.jpg" alt="Logo Design Banner" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8 mx-4">
        At WOW Creation, we specialize in custom logo design that makes your brand instantly recognizable. Our team of experts works closely with you to create a logo that captures the essence of your brand and sets you apart from the competition. From initial concept to final design, we provide tailored logo design services that reflect your business values and vision. We also offer branding design, rebranding, and visual identity solutions to ensure your entire brand presence is cohesive and impactful. Book a logo design consultation today and let us help you craft the perfect logo for your business.
      </p>
      <RecentProjects serviceFolder="logo" title="Logo" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4  text-left mx-4">Logo Identity Design Process</h2>
      <div className="w-20 h-1 bg-[#fdd302]  mx-4 mx-left mb-5 "></div>
      <DesignProcess />
      <Contact/>  
      <Footer/>
    </div>
  );
}
