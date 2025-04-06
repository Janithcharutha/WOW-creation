'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import RecentProjects from '@/components/recentprojects';
export default function TShirtDesign() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mx-4 mt-5">Custom T-Shirt Design Services</h1>
      <div className="w-40 h-1 bg-[#fdd302]  mx-4 mx-left mb-5"></div>

      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/tshirtdesign.jpg" alt="Custom T-Shirt Design" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8 mx-4">
        At WOW Creation, we bring your ideas to life with custom T-shirt designs that make a statement. Whether you need branded merchandise, event T-shirts, sportswear designs, or streetwear graphics, our team delivers high-quality, print-ready designs. We specialize in vector illustrations, typography-based designs, minimalist branding, and full-color graphic prints for various printing methods, including screen printing, DTG (Direct-to-Garment), and sublimation printing. Turn your vision into wearable art! Book a T-shirt design consultation today.
      </p>
      <RecentProjects serviceFolder="tshirts" title="Tshirts" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left mx-4">T-Shirt Design Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>

      <DesignProcess />
      <Contact />
      <Footer />
    </div>
  );
}
