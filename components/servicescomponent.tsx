'use client';

export default function ServicesComponent() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#620174] mb-8">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Design Service */}
          <div className="flex flex-col items-center p-6 bg-white hover:bg-[#e9c6e6] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#620174] mb-4">Design</h3>
            <p className="text-gray-600 text-sm">Where creativity and precision meet to bring your ideas to life!</p>
          </div>
          
          {/* Print Service */}
          <div className="flex flex-col items-center p-6 bg-white hover:bg-[#e9c6e6] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#620174] mb-4">Print</h3>
            <p className="text-gray-600 text-sm">High-quality print materials that leave a lasting impression!</p>
          </div>
          
          {/* Video Editing Service */}
          <div className="flex flex-col items-center p-6 bg-white hover:bg-[#e9c6e6] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#620174] mb-4">Video Editing</h3>
            <p className="text-gray-600 text-sm">Make every second count with expertly edited social media ads!</p>
          </div>
          
          {/* Marketing Service */}
          <div className="flex flex-col items-center p-6 bg-white hover:bg-[#e9c6e6] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#620174] mb-4">Marketing</h3>
            <p className="text-gray-600 text-sm">Boost your brand’s presence with tailored marketing strategies!</p>
          </div>
          
          {/* Advertising Service */}
          <div className="flex flex-col items-center p-6 bg-white hover:bg-[#e9c6e6] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#620174] mb-4">Advertising</h3>
            <p className="text-gray-600 text-sm">Reach a wider audience with innovative advertising solutions!</p>
          </div>
          
          {/* Social Media Marketing Service */}
          <div className="flex flex-col items-center p-6 bg-white hover:bg-[#e9c6e6] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#620174] mb-4">Social Media Marketing</h3>
            <p className="text-gray-600 text-sm">Unlock the full potential of your brand with tailored social media marketing on Facebook, Instagram, and TikTok!</p>
          </div>
        </div>
        <img 
          src="/images/l.jpg" 
          alt="Creative Design" 
          className="w-full mt-8 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
