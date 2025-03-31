'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import RecentProjects from '@/components/recentprojects';
export default function LetterheadDesign() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mt-5">Letterhead Design Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mb-5"></div>

      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/letterheaddesign.jpg" alt="Professional Letterhead Design" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8">
        At WOW Creation, we offer professional letterhead design services to help businesses create a strong brand identity. A well-designed letterhead enhances your company's credibility and ensures a polished, professional look in every communication.  
        
        Whether you need a corporate letterhead, business letterhead, personal letterhead, or digital letterhead, our expert designers craft high-quality, print-ready designs tailored to your brand's style and identity. Our custom letterhead designs feature unique layouts, brand-consistent colors, and professional typography to leave a lasting impression. Book a letterhead design consultation today and give your business documents a professional and elegant touch!
      </p>
 <RecentProjects serviceFolder="letterhead" title="Letterhead" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Letterhead Design Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5"></div>

      <DesignProcess />
      <Contact />
      <Footer />
    </div>
  );
}
