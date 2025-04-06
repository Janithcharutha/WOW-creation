
"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavbarAdmin() {
  return (
    <nav className="bg-[#620210] p-4 shadow-lg z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="cursor-pointer" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-white text-lg">
          {/* Design */}
          <li className="relative group">
            <Link href="" className="hover:text-gray-300 text-lg">
              DESIGN
            </Link>
            <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#FF2DF1] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
                <Link href="/admin/services/design/brand-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Brand Design
                </Link>
              </li>
              <li>
                <Link href="/admin/services/design/logo-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link href="/admin/services/design/packaging-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link href="/admin/services/design/social-media-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                social media design
                </Link>
              </li>
              <li>
                <Link href="/admin/services/design/label-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                label design
                </Link>
              </li>
              <li>
                <Link href="/admin/services/design/business-card" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                business card
                </Link>
              </li>
              <li>
                <Link href="/admin/services/design/letterhead-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                Letterhead Design
                </Link>
              </li>
              <li>
                <Link href="/admin/services/design/t-shirts-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                T-Shirts Design
                </Link>
              </li>
              <li>
                <Link href="/admin/services/design/banner-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                Banner Design
                </Link>
              </li>
            </ul>
          </li>

          {/* Printing */}
          <li className="relative group">
            <Link href="" className="hover:text-gray-300 text-lg">
              PRINTING
            </Link>
            <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#FF2DF1] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
                <Link href="/admin/services/print/poster-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Poster Printing
                </Link>
              </li>
              <li>
                <Link href="/admin/services/print/flyer-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Flyer Printing
                </Link>
              </li>
              <li>
                <Link href="/admin/services/print/brochure-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                brochure Printing
                </Link>
              </li>
              <li>
                <Link href="/admin/services/print/leaflet-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                leaflet Printing
                </Link>
              </li>
              <li>
                <Link href="/admin/services/print/banner-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                banner Printing
                </Link>
              </li>
              <li>
                <Link href="/admin/services/print/menu-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                menu Printing
                </Link>
              </li>
              <li>
                <Link href="/admin/services/print/book-cover-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                book-cover Printing
                </Link>
              </li>
              <li>
                <Link href="/admin/services/print/catalog-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                catalog Printing
                </Link>
              </li>
            </ul>
          </li>

          {/* Video Editing */}
          <li className="relative group">
            <Link href="/admin/services/video-editing" className="hover:text-gray-300 text-lg">
              VIDEO EDITING
            </Link>
            <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#FF2DF1] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
                <Link href="/admin/services/basic-editing" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Basic Editing
                </Link>
              </li>
              <li>
                <Link href="/admin/services/motion-graphics" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Motion Graphics
                </Link>
              </li>
            </ul>
          </li>
                    {/* Advertising */}
<li className="relative group">
  <Link href="/admin/services/advertising" className="hover:text-gray-300 text-lg">
    ADVERTISING
  </Link>
  <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#FF2DF1] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
      <Link href="/admin/services/interior-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
        Interior Design
      </Link>
    </li>
    <li>
      <Link href="/admin/services/vehicle-branding" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
        Vehicle Branding
      </Link>
    </li>
    <li>
      <Link href="/admin/services/shop-branding" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
        Shop Branding
      </Link>
    </li>
  </ul>
</li>

 {/* Marketing */}
<li className="relative group">
  <Link href="/admin/services/marketing" className="hover:text-gray-300 text-lg">
    MARKETING
  </Link>
  <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#FF2DF1] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
      <Link href="/admin/services/digital-marketing" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
        Digital Marketing
      </Link>
    </li>
    <li>
      <Link href="/admin/services/social-media-marketing" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
        Social Media Marketing
      </Link>
    </li>
    <li>
      <Link href="/admin/services/social-media-campaign" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
        Social Media Campaign Design
      </Link>
    </li>
  </ul>
</li>
          {/* Contact */}
       <li>
            <Link href="" className="hover:text-gray-300 text-lg">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

