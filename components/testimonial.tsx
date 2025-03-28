'use client';

import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className="py-12 px-8 bg-white flex items-center justify-center text-center md:text-left">
      {/* Profile image on the left */}
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg mr-6">
        <Image
          src="/images/profile.jpg" // Change to the correct image path
          alt="Founder Image"
          width={192} // Increased size
          height={192} // Increased size
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Testimonial text */}
      <div className="flex flex-col items-center md:items-start">
        <blockquote className="max-w-2xl text-gray-700 italic text-lg leading-relaxed">
          “As the founder of Wow Creation, I am passionate about helping small and medium businesses establish 
          their brand identity through creative design. With over 12 years of experience, I understand the 
          importance of a strong visual presence. Our team specializes in providing valuable brand design 
          experiences, including logos, that elevate your business. At Gavi Digital, we are committed to 
          delivering exceptional results that help your brand shine in a competitive market.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-900">- Gimhana, Founder</p>
      </div>
    </section>
  );
}
