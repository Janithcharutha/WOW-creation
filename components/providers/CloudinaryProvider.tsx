'use client';

import { CldImage } from 'next-cloudinary';

export function CloudinaryProvider({ children }: { children: React.ReactNode }) {
  if (typeof window !== 'undefined' && !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
    console.error('Warning: Cloudinary cloud name is missing');
  }

  return (
    <div data-cloudinary-cloud-name={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}>
      {children}
    </div>
  );
}