"use client";
export default function Footer() {
    return (
      <footer className="bg-[#620174] text-white p-6 mt-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">We are a creative agency based in Monaragala, Sri Lanka, specializing in design, marketing, and media services.</p>
          </div>
  
          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/services/design" className="hover:text-gray-300">Design</a></li>
              <li><a href="/services/print" className="hover:text-gray-300">Print</a></li>
              <li><a href="/services/video-editing" className="hover:text-gray-300">Video Editing</a></li>
              <li><a href="/services/marketing" className="hover:text-gray-300">Marketing</a></li>
              <li><a href="/services/advertising" className="hover:text-gray-300">Advertising</a></li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="tel:+94779279067" className="hover:text-gray-300">077 927 9067</a>
              </li>
              <li>
                <a href="mailto:wowcreation11@gmail.com" className="hover:text-gray-300">wowcreation11@gmail.com</a>
              </li>
              <li>
                <a href="https://tiktok.com/@wowcreation0" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">tiktok.com/@wowcreation0</a>
              </li>
              <li>
                <a href="https://wa.me/+94718809058" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">WhatsApp with +94 71 880 9058</a>
              </li>
            </ul>
          </div>
  
          {/* Location Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-sm">Sri Lanka</p>
          </div>
        </div>
  
        <div className="text-center mt-8 border-t pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Wow Creation. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  