'use client';

import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface CloudinaryImage {
  id: string;
  publicId: string;
}

interface HotDealsProps {
  serviceFolder: string;
  title: string;
}

export default function HotDeals({ serviceFolder, title }: HotDealsProps) {
  const [deals, setDeals] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const response = await fetch(`/api/upload/list?folder=${serviceFolder}/hotdeals`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.resources) {
          setDeals(data.resources.map((resource: any) => ({
            id: resource.asset_id,
            publicId: resource.public_id
          })));
        }
      } catch (error) {
        console.error('Failed to fetch hot deals:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDeals();
  }, [serviceFolder]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (deals.length === 0) {
    return null;
  }

  return (
    <section className="py-8 mx-auto max-w-4xl px-4">
      <h2 className="text-2xl font-bold text-black mb-3 text-left">Hot Deals</h2>
      <div className="w-15 h-1 bg-[#fdd302] md-2 mx-left mb-4"></div>

      <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          className="w-full h-full rounded-lg overflow-hidden"
        >
          {deals.map((deal) => (
            <SwiperSlide key={deal.id} className="h-full">
              <div className="relative w-full h-full bg-gray-100">
                <CldImage
                  src={deal.publicId}
                  alt={`${title} Hot Deal`}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-bold text-xl px-3 py-1.5 bg-red-500 rounded-lg">
                      Special Offer
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}