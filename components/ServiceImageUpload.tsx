'use client';

import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { Trash2 } from 'lucide-react';

interface ServiceImageUpload {
  serviceFolder: string;
  title: string;
}

interface CloudinaryImage {
  id: string;
  publicId: string;
}

export default function ServiceImageUpload({ serviceFolder, title }: ServiceImageUpload) {
  const [regularImages, setRegularImages] = useState<CloudinaryImage[]>([]);
  const [hotDeals, setHotDeals] = useState<CloudinaryImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, [serviceFolder]);

  async function fetchImages() {
    try {
      // Fetch regular images (excluding hot deals folder)
      const regularResponse = await fetch(`/api/upload/list?folder=${serviceFolder}&excludeFolder=hotdeals`);
      if (!regularResponse.ok) {
        throw new Error('Failed to fetch regular images');
      }
      const regularData = await regularResponse.json();
      const filteredRegularImages = regularData.resources?.filter((resource: any) => 
        !resource.public_id.includes('/hotdeals/')
      );
      setRegularImages(filteredRegularImages?.map((resource: any) => ({
        id: resource.asset_id,
        publicId: resource.public_id
      })) || []);

      // Fetch hot deals separately
      const hotDealsResponse = await fetch(`/api/upload/list?folder=${serviceFolder}/hotdeals`);
      if (!hotDealsResponse.ok) {
        throw new Error('Failed to fetch hot deals');
      }
      const hotDealsData = await hotDealsResponse.json();
      setHotDeals(hotDealsData.resources?.map((resource: any) => ({
        id: resource.asset_id,
        publicId: resource.public_id
      })) || []);

    } catch (error) {
      console.error('Failed to fetch images:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, isHotDeal: boolean = false) => {
    if (!e.target.files?.[0]) return;

    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', isHotDeal ? `${serviceFolder}/hotdeals` : serviceFolder);
    formData.append('isHotDeal', isHotDeal.toString());

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      await fetchImages();
      e.target.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      alert(error instanceof Error ? error.message : 'Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (publicId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await fetch('/api/upload/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicId }),
      });

      if (!response.ok) {
        throw new Error(`Delete failed: ${response.statusText}`);
      }

      await fetchImages();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete image. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Regular Images Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-black mb-6">Regular {title} Images</h2>
        <div className="mb-8">
          <label className="block mb-4 text-lg text-black font-medium">Upload Regular Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e, false)}
            disabled={uploading}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
          />
          {uploading && <p className="mt-2 text-sm text-black">Uploading...</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regularImages.map((image) => (
            <div key={image.id} className="relative group">
              <CldImage
                src={image.publicId}
                alt={`${title} Regular Image`}
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
              <button
                onClick={() => handleDelete(image.publicId)}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Delete image"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Deals Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold  text-black mb-6">Hot Deals</h2>
        <div className="mb-8">
          <label className="block mb-4 text-lg text-black font-medium">Upload Hot Deal</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e, true)}
            disabled={uploading}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-red-50 file:text-red-700
              hover:file:bg-red-100"
          />
          {uploading && <p className="mt-2 text-sm text-black">Uploading...</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotDeals.map((image) => (
            <div key={image.id} className="relative group">
              <CldImage
                src={image.publicId}
                alt={`${title} Hot Deal`}
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
              <button
                onClick={() => handleDelete(image.publicId)}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Delete image"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}