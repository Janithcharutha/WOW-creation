"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#620174] p-4 shadow-lg z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={50} 
            height={50} 
            className="cursor-pointer" 
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-4 lg:space-x-10 text-white text-lg">
          {/* Design */}
          <li className="relative group">
            <Link href="" className="hover:text-gray-300 text-lg">
              DESIGN
            </Link>
            <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#fdd302] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
                <Link href="/services/design/brand-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Brand Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/logo-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/packaging-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/social-media-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Social Media Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/label-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Label Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/business-card" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Business Card
                </Link>
              </li>
              <li>
                <Link href="/services/design/letterhead-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Letterhead Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/t-shirts-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  T-Shirts Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/banner-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
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
            <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#fdd302] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
                <Link href="/services/print/poster-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Poster Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/flyer-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Flyer Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/brochure-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Brochure Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/leaflet-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Leaflet Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/banner-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Banner Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/menu-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Menu Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/book-cover-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Book Cover Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/catalog-print" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Catalog Printing
                </Link>
              </li>
            </ul>
          </li>

          {/* Video Editing */}
          <li className="relative group">
            <Link href="/services/video-editing" className="hover:text-gray-300 text-lg">
              VIDEO EDITING
            </Link>
            <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#fdd302] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
                <Link href="/services/basic-editing" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Basic Editing
                </Link>
              </li>
              <li>
                <Link href="/services/motion-graphics" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Motion Graphics
                </Link>
              </li>
            </ul>
          </li>

          {/* Advertising */}
          <li className="relative group">
            <Link href="/services/advertising" className="hover:text-gray-300 text-lg">
              ADVERTISING
            </Link>
            <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#fdd302] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
                <Link href="/services/interior-design" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle-branding" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Vehicle Branding
                </Link>
              </li>
              <li>
                <Link href="/services/shop-branding" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Shop Branding
                </Link>
              </li>
            </ul>
          </li>

          {/* Marketing */}
          <li className="relative group">
            <Link href="/services/marketing" className="hover:text-gray-300 text-lg">
              MARKETING
            </Link>
            <ul className="absolute left-1/2 transform -translate-x-1/2 bg-[#fdd302] text-black shadow-2xl p-2 w-56 space-y-2 rounded-lg hidden group-hover:block transition-all duration-500 ease-out scale-95 group-hover:scale-100">
              <li>
                <Link href="/services/digital-marketing" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-campaign" className="block px-4 py-2 text-sm hover:bg-pink-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-black font-semibold">
                  Social Media Campaign Design
                </Link>
              </li>
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact" className="hover:text-gray-300 text-lg">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#620174] pb-4`}>
        <ul className="flex flex-col space-y-4 px-4 text-white">
          {/* Design */}
          <li className="relative">
            <button 
              className="w-full text-left hover:text-gray-300 text-lg flex justify-between items-center"
              // onClick={() => document.getElementById('design-submenu').classList.toggle('hidden')}
              onClick={() => {
                const submenu = document.getElementById('design-submenu');
                if (submenu) { // Check if the element exists
                  submenu.classList.toggle('hidden');
                }
              }}
            > 
              DESIGN
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul id="design-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#fdd302] rounded-lg p-2">
              <li>
                <Link href="/services/design/brand-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Brand Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/logo-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/packaging-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Packaging Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/social-media-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Social Media Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/label-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Label Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/business-card" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Business Card
                </Link>
              </li>
              <li>
                <Link href="/services/design/letterhead-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Letterhead Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/t-shirts-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  T-Shirts Design
                </Link>
              </li>
              <li>
                <Link href="/services/design/banner-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Banner Design
                </Link>
              </li>
            </ul>
          </li>

          {/* Printing */}
          <li className="relative">
            <button 
              className="w-full text-left hover:text-gray-300 text-lg flex justify-between items-center"
              // onClick={() => document.getElementById('printing-submenu').classList.toggle('hidden')}
              onClick={() => {
                const submenu = document.getElementById('printing-submenu');
                if (submenu) { // Check if the element exists
                  submenu.classList.toggle('hidden');
                }
              }}
              
            > 
              PRINTING
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul id="printing-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#fdd302] rounded-lg p-2">
              <li>
                <Link href="/services/print/poster-print" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Poster Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/flyer-print" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Flyer Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/brochure-print" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Brochure Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/leaflet-print" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Leaflet Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/banner-print" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Banner Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/menu-print" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Menu Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/book-cover-print" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Book Cover Printing
                </Link>
              </li>
              <li>
                <Link href="/services/print/catalog-print" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Catalog Printing
                </Link>
              </li>
            </ul>
          </li>

          {/* Video Editing */}
          <li className="relative">
            <button 
              className="w-full text-left hover:text-gray-300 text-lg flex justify-between items-center"
              // onClick={() => document.getElementById('video-submenu').classList.toggle('hidden')}
              onClick={() => {
                const submenu = document.getElementById('video-submenu');
                if (submenu) { // Check if the element exists
                  submenu.classList.toggle('hidden');
                }
              }}
            >
              VIDEO EDITING
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul id="video-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#fdd302] rounded-lg p-2">
              <li>
                <Link href="/services/basic-editing" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Basic Editing
                </Link>
              </li>
              <li>
                <Link href="/services/motion-graphics" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Motion Graphics
                </Link>
              </li>
            </ul>
          </li>

          {/* Advertising */}
          <li className="relative">
            <button 
              className="w-full text-left hover:text-gray-300 text-lg flex justify-between items-center"
              // onClick={() => document.getElementById('advertising-submenu').classList.toggle('hidden')}
              onClick={() => {
                const submenu = document.getElementById('advertising-submenu');
                if (submenu) { // Check if the element exists
                  submenu.classList.toggle('hidden');
                }
              }}
            >
              ADVERTISING
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul id="advertising-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#fdd302] rounded-lg p-2">
              <li>
                <Link href="/services/interior-design" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle-branding" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Vehicle Branding
                </Link>
              </li>
              <li>
                <Link href="/services/shop-branding" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Shop Branding
                </Link>
              </li>
            </ul>
          </li>

          {/* Marketing */}
          <li className="relative">
            <button 
              className="w-full text-left hover:text-gray-300 text-lg flex justify-between items-center"
              onClick={() => {
                const submenu = document.getElementById('marketing-submenu');
                if (submenu) { // Check if the element exists
                  submenu.classList.toggle('hidden');
                }
              }}
            >
              MARKETING
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul id="marketing-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#fdd302] rounded-lg p-2">
              <li>
                <Link href="/services/digital-marketing" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-campaign" className="block px-4 py-2 text-sm hover:bg-[#fdd302] hover:text-black rounded transition-all">
                  Social Media Campaign Design
                </Link>
              </li>
            </ul>
          </li> 
        
          {/* Contact */}
          <li>
            <Link href="/contact" className="hover:text-gray-300 text-lg block">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}