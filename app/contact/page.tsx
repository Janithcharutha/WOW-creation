'use client';
import React from 'react';
import Navbar from '@/components/navbar';
import ContactPage from '@/components/contact';


export default function AdvertisingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      <ContactPage/>
      
    </div>
  );
}
