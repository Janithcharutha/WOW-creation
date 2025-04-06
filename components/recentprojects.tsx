'use client';

import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

interface CloudinaryImage {
  id: string;
  publicId: string;
}

interface RecentProjectsProps {
  serviceFolder: string;
  title: string;
}

export default function RecentProjects({ serviceFolder, title }: RecentProjectsProps) {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`/api/upload/list?folder=${serviceFolder}&excludeFolder=hotdeals`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.resources) {
          // Filter out hot deals images
          const regularImages = data.resources.filter((resource: any) => 
            !resource.public_id.includes('/hotdeals/')
          );
          
          setImages(regularImages.map((resource: any) => ({
            id: resource.asset_id,
            publicId: resource.public_id
          })));
        }
      } catch (error) {
        console.error('Failed to fetch images:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [serviceFolder]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="py-12 text-center mx-4">
      <h2 className="text-2xl font-bold text-black mb-3 text-left">Recent {title} Projects</h2>
      <div className="w-20 h-1 bg-[#fdd302] md-2 mx-left"></div>

      <div className="grid grid-cols-1 mt-3 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="relative group shadow-lg rounded-lg overflow-hidden w-full h-[400px]">
            <CldImage
              src={image.publicId}
              alt={`${title} Project`}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
