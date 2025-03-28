'use client';

import Image from 'next/image';

export default function DesignServices() {
  return (
    <section className="py-12 bg-gray-50 z-10 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-[#620174] mb-6">
          Popular Design Services
        </h1>
        <div className="border-t-4 border-[#620174] w-24 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo Design */}
          <div className="bg-white rounded-lg shadow-md hover:bg-[#e9c6e6] hover:text-white transition duration-300 overflow-hidden">
            <div className="w-full h-56">
              <Image src="/images/lo.jpg" alt="Logo Design" width={300} height={224} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#620174] group-hover:text-white">Logo Design</h3>
            </div>
          </div>

          {/* Packaging Design */}
          <div className="bg-white rounded-lg shadow-md hover:bg-[#e9c6e6] hover:text-white transition duration-300 overflow-hidden">
            <div className="w-full h-56">
              <Image src="/images/packing.jpg" alt="Packaging Design" width={300} height={224} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#620174] group-hover:text-white">Packaging Design</h3>
            </div>
          </div>

          {/* Social Media Design */}
          <div className="bg-white rounded-lg shadow-md hover:bg-[#e9c6e6] hover:text-white transition duration-300 overflow-hidden">
            <div className="w-full h-56">
              <Image src="/images/social.jpg" alt="Social Media Design" width={300} height={224} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#620174] group-hover:text-white">Social Media Design</h3>
            </div>
          </div>

          {/* Banner Design */}
          <div className="bg-white rounded-lg shadow-md hover:bg-[#e9c6e6] hover:text-white transition duration-300 overflow-hidden">
            <div className="w-full h-56">
              <Image src="/images/baner.jpg" alt="Banner Design" width={300} height={224} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#620174] group-hover:text-white">Banner Design</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
