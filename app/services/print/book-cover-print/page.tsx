'use client';
import Navbar from '@/components/navbar';
import DesignProcess from '@/components/designprocess';
import Image from 'next/image';
import Contact from '@/components/contactp';
import Footer from '@/components/footer';
import Head from 'next/head';
import RecentProjects from '@/components/recentprojects';
export default function BookCoverPrint() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Head>
        <title>Book Cover Printing Services | WOW Creation</title>
        <meta name="description" content="Get high-quality book cover printing services at WOW Creation. Custom designs for hardcover, softcover, and digital book covers tailored to your needs." />
        <meta name="keywords" content="book cover printing, custom book covers, hardcover printing, softcover printing, WOW Creation" />
      </Head>
      
      <Navbar />
      <h1 className="text-4xl font-bold text-black text-left mb-2 mt-5 mx-4">Book Cover Printing Services</h1>
      <div className="w-40 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>
      
      {/* Full screen image */}
      <div className="w-full h-screen relative">
        <Image src="/images/bookcoverprint.jpg" alt="Book Cover Printing Services" layout="fill" objectFit="cover" className="absolute inset-0" />
      </div>

      <p className="text-gray-600 text-lg mt-5 mb-8 mx-4">
        WOW Creation offers professional book cover printing services to bring your stories to life. Whether you need hardcover, softcover, or digital book covers, our expert designers create high-quality prints tailored to your vision. We provide custom designs, rebranding solutions, and expert consultations to ensure your book covers align with your creative and marketing goals. Contact us today to get started on your book cover printing project!
      </p>
      <RecentProjects serviceFolder="bookprint" title="BookCover" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left mx-4">Our Book Cover Printing Process</h2>
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5 mx-4"></div>
      
      <DesignProcess />
      <Contact />  
      <Footer />
    </div>
  );
}
