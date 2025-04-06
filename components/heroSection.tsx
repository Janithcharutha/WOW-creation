"use client";
import Image from "next/image"; // Importing the Next.js Image component
import { FaFacebook, FaWhatsapp, FaTiktok, FaEnvelope } from 'react-icons/fa'; // Import social media icons from react-icons

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center text-white h-screen bg-gray-100">
      {/* Left Side: Background Image using Next.js Image component */}
      <div className="w-full lg:w-1/2 relative mb-14">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero image"
          width={1280}
          height={731}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 z-20 px-6 md:px-12 text-center lg:text-left flex flex-col justify-center items-center">
  <h1 className="text-gray-600 text-4xl md:text-3xl font-extrabold mb-9">
    Unlock your brand's potential with us.
  </h1>
  
  <p className="text-right mt-10"> {/* Added mt-6 for spacing */}
    <span className="text-gray-600 text-xl md:text-3xl">
      Your trusted partner as a
    </span>  
    <br />
    <span className="text-gray-600 font-bold text-3xl md:text-4xl">
      GRAPHIC DESIGNER  
    </span>
    <br />
    <span className="text-gray-600 font-bold text-3xl md:text-4xl">
      WOW CREATION (PVT) LTD
    </span>
  </p>

  {/* Social Media Icons */}
  <div className="flex justify-center lg:justify-end space-x-6 mt-6">
    <a href="https://wa.me/94718809058" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="text-3xl text-[#a60d8d] hover:text-gray-400 transition duration-300" />
    </a>
    <a href="mailto:wowcreation11@gmail.com">
      <FaEnvelope className="text-3xl text-[#a60d8d] hover:text-gray-400 transition duration-300" />
    </a>
    <a href="https://web.facebook.com/shashika11/photos" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-3xl text-[#a60d8d] hover:text-gray-400 transition duration-300" />
    </a>
    <a href="https://www.tiktok.com/@wowcreation0" target="_blank" rel="noopener noreferrer">
      <FaTiktok className="text-3xl text-[#a60d8d] hover:text-gray-400 transition duration-300" />
    </a>
  </div>
</div>

    </section>
  );
}
