'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import Head from 'next/head';

export default function BannerPrint() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Banner Printing Services | WOW Creation</title>
        <meta name="description" content="Get high-quality banner printing services at WOW Creation. Custom designs for digital, social media, website, and print banners tailored to your brand." />
        <meta name="keywords" content="banner printing, custom banners, digital banners, print banners, WOW Creation" />
      </Head>
      
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mt-5">Banner Printing Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mb-5"></div>
      
      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/banner.jpg" alt="Banner Printing Services" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8">
        WOW Creation offers professional banner printing services designed to enhance your brand visibility. Whether you need custom digital banners, social media graphics, website headers, or large-format prints, our expert team ensures top-quality prints tailored to your business needs. From concept to final product, we provide creative solutions, rebranding services, and expert consultations. Contact us today to get started on your custom banner printing project!
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Our Banner Printing Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5"></div>
      
      <DesignProcess />
      <Contact />  
      <Footer />
    </div>
  );
}
