'use client';

import React from 'react';
import NavbarAdmin from '@/components/adminnavbar';
import ImageUpload from '@/components/ImageUpload';

export default function AdminPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarAdmin />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-gray-600 font-bold mb-8">Image Management</h1>
        <ImageUpload />
      </div>
    </div>
  );
}
